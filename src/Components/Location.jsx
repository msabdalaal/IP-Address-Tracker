import '../App.css'
import { useLocationContext } from '../context/LocationContext'

export default function Location() {
  const { locationData } = useLocationContext()

  return (
    <div className='flex justify-center mt-8'>
      <div className='rounded-md w-full mx-7 lg:w-auto text-center lg:text-left p-8 z-10 min-w-[10px] bg-white flex items-center shadow-lg flex-col md:flex-row lg:flex-row'>
        <div className='lg:border-r-[1px] lg:pr-8'>
          <p className='text-gray-500 font-medium weight'>IP ADDRESS</p>
          <h2 className='font-semibold text-xl'>{fetchLocation(ip).ip}</h2>
        </div>
        <div className='lg:pl-8 lg:border-r-[1px] lg:pr-8'>
          <p className='text-gray-500 font-medium weight'>LOCATION</p>
          <h2 id='Adress' className='font-semibold text-xl'>
            {fetchLocation(ip).city}, {fetchLocation(ip).country}
          </h2>
        </div>
        <div className='lg:pl-8 lg:border-r-[1px] lg:pr-8'>
          <p className='text-gray-500 font-medium weight'>TIMEZONE</p>
          <h2 className='font-semibold text-xl'>
            {fetchLocation(ip).timezone.utc}
          </h2>
        </div>
        <div className='lg:pl-8'>
          <p className='text-gray-500 font-medium weight'>ISP</p>
          <h2 className='font-semibold text-xl'>
            {fetchLocation(ip).connection.isp}
          </h2>
        </div>
      </div>
    </div>
  )
}
