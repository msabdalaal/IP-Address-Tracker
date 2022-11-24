import { useLocationContext } from '../context/LocationContext'
import '../App.css'

function Map() {
  const { locationData } = useLocationContext()

  return (
    <>
      <iframe
        title='My-Map'
        name='My-Map'
        loading='lazy'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBKCYCieqUIjeJp1EBc8MBQw8zvSjJooZU
    &q=${locationData.city}`}
        className='w-full absolute bottom-0 h-4/6'
      ></iframe>
    </>
  )
}

export default Map
