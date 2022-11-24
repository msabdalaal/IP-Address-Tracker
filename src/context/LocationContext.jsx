import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const LocationContext = createContext(null)

export default function LocationProvider({ children }) {
  const [locationData, setLocationData] = useState({
    ip: '000.00.000.000',
    country: '$$',
    city: '$$$',
    timezone: {
      utc: '$$$',
    },
    connection: {
      isp: '$$$',
    },
  })
  const [ip, setIp] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`https://ipwho.is/${ip ? ip : ''}`)
        const data = await result.json()

        if (data.success === true) setLocationData(data)
        else if (ip)
          throw new Error(
            'Sorry, service is not available at the moment, try again late'
          )
      } catch (error) {
        console.error('not available')
        alert(error.message)
      }
    }
    fetchData()
  }, [ip])

  return (
    <LocationContext.Provider value={{ locationData, setIp, ip }}>
      {children}
    </LocationContext.Provider>
  )
}

// Custom Hook
export function useLocationContext() {
  return useContext(LocationContext)
}

LocationProvider.propTypes = {
  children: PropTypes.node,
}
