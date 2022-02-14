import styled from 'styled-components';
import { FlexContainer, Button } from '../../styles/StyledElements';

const ChooseCityWrapper = styled.div`
  padding-top: 5.5rem;
  width: 100%;
  max-width: 63rem;
`

const SearchWrapper = styled(FlexContainer)`
  justify-content: space-around;
  margin-bottom: 4.5rem;
`

const InputBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 35rem;

  &:before {
    content: '${ props => props.text_example }';
    position: absolute;
    top: -3rem;
    left: 1rem;
    color: ${({theme}) => theme.colors.white};
    text-shadow: .1rem .3rem .4rem ${({theme}) => theme.colors.black};
    opacity: .5;
  }
`

const Input = styled.input`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: #fdfdfd6b;
  box-shadow: inset 0 0 .8rem .3rem ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.white};
  text-shadow: .1rem .2rem .6rem ${({theme}) => theme.colors.black};

  &::placeholder {
    text-shadow: none;
  }
`
const SearchBtn = styled(Button)`
  max-width: 16rem;
  height: 5rem;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .2rem;

  &:hover {
    font-size: 2.05rem;
  }
`
const SaveBtnContainer = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 2.9rem;
  width: 100%;
`
const SaveBtn = styled(SearchBtn)`
  ${props => props.isOnSaveOption ?
            'opacity: 1; box-shadow: inset 0 0 .8rem .3rem #00ff3b;' :
            'opacity: .4; box-shadow: inset 0 0 .8rem .3rem #ff0000;'
  }

  &:hover {
    ${props => props.isOnSaveOption ?
            'box-shadow: inset 0 0 1.7rem .3rem #00ff3b;' :
            'box-shadow: inset 0 0 1.7rem .3rem #ff0000;'
    }
  }
`

const SavedLocationWrapper = styled.div``
const SavedLocationTitle = styled.p`
  margin-left: .6rem;
`

export {
  ChooseCityWrapper,
  SearchWrapper,
  InputBox,
  Input,
  SearchBtn,
  SaveBtnContainer,
  SaveBtn,
  SavedLocationWrapper,
  SavedLocationTitle,
}