import { LocationContext } from '../../context/locationService';
import { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SavedLocations } from '..';

import {
  ChooseCityWrapper,
  SearchWrapper,
  InputBox,
  Input,
  SearchBtn,
  SaveBtnContainer,
  SaveBtn,
  SavedLocationWrapper,
  SavedLocationTitle,
} from './ChooseCity.styles';


const ChooseCity = () => {
  const { 
    GetUserSearchLocation, 
    GetUserSearchFromZipCode, 
    ToSaveUsersLocations, 
    locationSwitchData, 
    savedLocationsData 
  } = useContext(LocationContext);

  const [cityName, setCityName] = useState('')
  const [zipData, setZipData] = useState('')
  const [isOnSaveOption, setIsOnSaveOption] = useState(true);

  const setSaveBtnActive = () => {
    setIsOnSaveOption(true)
  }

  const getCityName = (e) => {
    const city = e.target.value;
    setCityName(city)
  }

  const getZipData = (e) => {
    const zipDataValue = e.target.value;
    e.target.value = zipData;
    setZipData(zipDataValue);
  }

  const ToSearchCityName = () => {
    GetUserSearchLocation(cityName);
    setCityName('') 
    setSaveBtnActive()
  }
  
  const ToSearchZipCode = () => {
    if(zipData !== '') {
      const zipArr = zipData.split(',');
      const zipNumber = +zipArr[0].trim();
      const countryCode = zipArr[1].trim();
      
      const zipObj = {
        zipNumber: zipNumber,
        countryCode: countryCode 
      }

      GetUserSearchFromZipCode(zipObj)
      setZipData('')
      setSaveBtnActive()
    } else {
      return
    }
  }

  const ToSaveSearch = () => {
    ToSaveUsersLocations({
      id: uuidv4(),
      cityName: locationSwitchData.city
    })

    setIsOnSaveOption(false)
  }



  const usersLocationsList = <SavedLocationWrapper>
          <SavedLocationTitle>Saved locations:</SavedLocationTitle>
          {
            savedLocationsData.map(item => {
              return(
                <SavedLocations 
                  key={ item.id }
                  id={ item.id }
                  cityName={ item.cityName }
                  setSaveBtnActive={ setSaveBtnActive }
                />
              )
            })
          }
        </SavedLocationWrapper>


  return(
    <ChooseCityWrapper>
      <SearchWrapper>
        <InputBox 
          text_example='ex: Warsaw'
        >
          <Input 
            onChange={ getCityName }
            value={ cityName } 
            placeholder='City name'
          />
        </InputBox>
        <SearchBtn
          onClick={ ToSearchCityName }
        >
          Search
        </SearchBtn>
      </SearchWrapper>
      <SearchWrapper>
        <InputBox 
          text_example='ex.: 94040,us'>
          <Input 
            onChange={ getZipData }
            value={ zipData }
            placeholder="City's zip-code"
          />
        </InputBox>
        <SearchBtn
          onClick={ ToSearchZipCode }
        >
          Search
        </SearchBtn>
      </SearchWrapper>
      <SaveBtnContainer>
        <SaveBtn 
          isOnSaveOption={ isOnSaveOption }
          onClick={ isOnSaveOption ? ToSaveSearch : null }
        >
          Save city
        </SaveBtn>
      </SaveBtnContainer>
      { savedLocationsData.length > 0 ? usersLocationsList : null }
    </ChooseCityWrapper>
  )
}

export default ChooseCity