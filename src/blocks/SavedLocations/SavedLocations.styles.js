import styled from 'styled-components'
import { SectionContainer } from '../../styles/StyledElements';

const SavedLocationsWrapper = styled(SectionContainer)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow:  inset 0 .7rem 2.8rem .3rem #00e1d4;
  }

  &:last-child {
    margin-bottom: 0;
  }
`
const SavedCity = styled.p``
const Description = styled.p`
  & > span {
    margin-left: .5rem;
    color: ${({theme}) => theme.colors.orange};
  }
`
const RemoveBtn = styled.p`
  position: absolute;
  top: 50%;
  left: 1.2rem;
  color: red;
  opacity: .6;
  transform: translateY(-50%);
  transition: all .15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export { 
  SavedLocationsWrapper, 
  SavedCity, 
  Description,
  RemoveBtn
 }