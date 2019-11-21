import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const Section = styled.div`
  padding: 10px 20px;
`
export const Header1 = styled.h1``
export const Header2 = styled.h2``
export const Header3 = styled.h3``
export const Header4 = styled.h4``
export const Header5 = styled.h5``

export const Text = styled.span``

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: #ef345e;
  &:hover {
    text-decoration: underline;
  }
`
