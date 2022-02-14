import styled from 'styled-components';
import { FlexContainer, ImageContainer, Button } from '../../styles/StyledElements';

const WeatherCardWrapper = styled(FlexContainer)`
  justify-content: left;
  padding-top: 2.5rem;
  width: 100%;
  max-width: 63rem;
`
const WeatherIcon = styled(ImageContainer)`
  margin-right: 3rem;
  width: 100%;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(31,92,255,0.3368697820925245) 34%, rgba(0,131,255,1) 92%);
  box-shadow: inset 0 0 4.4rem .7rem #ffffffc4;
`
const WeatherInfoWrapper = styled.div`
  font-size: 3.6rem;
  font-weight: 400;
`
const TempInfo = styled.p`
  margin-bottom: 1rem;

  & > span {
    font-weight: 700;
    color: ${props => props.tempIndication ? 
          ({theme}) => theme.colors.orange : 
          ({theme}) => theme.colors.silver};
  }
`
const PressureInfo = styled.p`
  margin-bottom: 1rem;

  & > span {
    font-weight: 700;
    color: ${({theme}) => theme.colors.silver};
  }
`
const WindSpeedInfo = styled.p``

const ToggleBtn = styled(Button)`
  max-width: 16rem;
  height: 4rem;
`

export {
  WeatherCardWrapper,
  WeatherIcon,
  WeatherInfoWrapper,
  TempInfo,
  PressureInfo,
  WindSpeedInfo,
  ToggleBtn
}