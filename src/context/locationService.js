import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const apiUrl = 'http://api.openweathermap.org/'
  const apiKey = '9980f38164f1b2cf7d9081d38f49a7fe';
  const [locationSwitchData, setLocationSwitchData] = useState({city: ''})
  const [locationWeather, setLocationWeather] = useState({temperature: ''});
  const [savedLocationsData, setSavedLocations] = useState([]);

  //## start location
  const GetStartLocation = (latitudeData, longitudeData) => {
    axios.get(`${ apiUrl }geo/1.0/reverse?lat=${latitudeData}&lon=${longitudeData}&limit=5&appid=${apiKey}`)
    .then(res => {
      // console.log(res.data[0])
      LocationSwitcher(res.data[0])
    });
  }
 //##

 //## users's search location
    const GetUserSearchLocation = (cityName) => {
      axios.get(`${ apiUrl }/data/2.5/weather?q=${ cityName }&appid=${apiKey}`)
      .then(res => {
        LocationSwitcher(res.data)
      });
    }
 //##

  //## users's search location from zipCode
  const GetUserSearchFromZipCode = ({ zipNumber, countryCode }) => {
    
    axios.get(`${ apiUrl }data/2.5/weather?zip=${zipNumber},${countryCode}&appid=${apiKey}`)
    .then(res => {
      // console.log(res.data)
      LocationSwitcher(res.data)
    });
  }
//##
  
 //## Saving user's locations
  const ToSaveUsersLocations = ({id, cityName}) => {
    setSavedLocations(
      [ 
        ...savedLocationsData, 
        {
          id: id,
          cityName: cityName
        }
      ]
    )
  }
//##

  //## Removing user's saving locations
  const ToRemoveSavedLocations = (newSavedData) => {
    setSavedLocations(newSavedData)
  }
  //##

  const GetWeatherData = () => {
    const city = locationSwitchData.city || 'Warsaw';
    const country = locationSwitchData.country || 'pl';

    // axios.get(`${ apiUrl }data/2.5/weather?q=${ city },${ country }&APPID=${apiKey}`)
    axios.get(`${ apiUrl }data/2.5/weather?q=${ city }&appid=${apiKey}`)
    .then(res => {
      GetLocationWeather(res.data)
    });
  }

  const LocationSwitcher = (newLocation) => {

    setLocationSwitchData(
      {
        city: newLocation.name,
        // country: newLocation.country,
        city_pl: '',
        // city_pl: 'Warszwa',
      }
    )
  }

  const GetLocationWeather = (locationWeather) => {
    console.log(locationWeather)
    setLocationWeather(
      {
        temperature: locationWeather.main.temp,
        pressure: locationWeather.main.pressure,
        windSpeed: locationWeather.wind.speed,
        icon: locationWeather.weather[0].icon
      }
    )
  }

  useEffect(() => {
    GetWeatherData()
  }, [locationSwitchData.city])

  return (
    <LocationContext.Provider value={{ 
      locationSwitchData, 
      LocationSwitcher, 
      locationWeather, 
      GetLocationWeather,
      GetStartLocation, 
      GetWeatherData,
      GetUserSearchLocation,
      GetUserSearchFromZipCode,
      ToSaveUsersLocations,
      savedLocationsData,
      ToRemoveSavedLocations
    }}>
      { props.children }
    </LocationContext.Provider>
  )
}

export default LocationContextProvider;

// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}   city
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key} zip