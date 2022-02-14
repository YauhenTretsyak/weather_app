import styled from 'styled-components';
import { SectionContainer } from '../../styles/StyledElements';

const FooterSection = styled(SectionContainer)``

const Copyrights = styled.p``

const AuthorLink = styled.a`
  padding-left: .9rem;
  text-decoration: none;
  font-family: 'Indie Flower', sans-serif;
  color: ${({theme}) => theme.colors.silver};
`

const Footer = () => {
  return(
    <FooterSection>
      <Copyrights>
        Designed & Developed by
        <AuthorLink 
          href='https://yauhentretsyak.github.io/portfolio/'
          target='_blank'
        >
          Yauhen Tretsyak
        </AuthorLink>
      </Copyrights>
    </FooterSection>
  )
}

export default Footer