import { useContext } from 'react';
import { LocationContext } from '../../context/locationService';

import styled from 'styled-components';
import { SectionContainer, SectionTitle } from '../../styles/StyledElements';

const HeaderSection = styled(SectionContainer)`
  display: flex;
  align-items: center;
`
const HeaderTitle = styled(SectionTitle)`
  margin-bottom: 0;
`

const Header = () => {

  const { locationSwitchData } = useContext(LocationContext);
  const { city } = locationSwitchData;

  return(
    <HeaderSection>
      <HeaderTitle>
        City: { city || '--' }
      </HeaderTitle>
    </HeaderSection>
  )
}

export default Header;