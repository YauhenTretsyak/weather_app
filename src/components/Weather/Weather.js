import { useContext, useEffect } from 'react';
import { LocationContext } from '../../context/locationService';
import { WeatherCard, ChooseCity } from '../../blocks';

import { WeatherSection, WheaterInfoWrapper, CityName } from './Weather.styles';

const Weather = () => {
  const { locationSwitchData, GetStartLocation,  GetWeatherData } = useContext(LocationContext);
  const { city } = locationSwitchData;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        if(latitude && longitude) {
          GetStartLocation(latitude, longitude);
        }
      },

      function(error) {
        console.log(error)
      }
    )
    
    GetWeatherData()
  }, [])

  return (
    <WeatherSection>
      <WheaterInfoWrapper>
        <CityName>{ city || '--' }</CityName>
        <WeatherCard />
      </WheaterInfoWrapper>
      <ChooseCity />
    </WeatherSection>
  )
}

export default Weather;