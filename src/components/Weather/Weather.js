import { useContext, useEffect } from 'react';
import { LocationContext } from '../../context/locationService';
import { WeatherCard, ChooseCity } from '../../blocks';
import styled from 'styled-components'
import { SectionContainer } from '../../styles/StyledElements/'

const WeatherSection = styled(SectionContainer)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 7.8rem;
`
const WheaterInfoWrapper = styled.div``

const CityName = styled.p``

const Weather = () => {
  const { locationSwitchData, GetStartLocation,  GetWeatherData } = useContext(LocationContext);
  const { city, country } = locationSwitchData;

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
        {/* <p>{ country || '--' }</p> */}
        <WeatherCard />

      </WheaterInfoWrapper>
      <ChooseCity />
    </WeatherSection>
  )
}

export default Weather;