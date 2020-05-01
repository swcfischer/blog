import styled from 'styled-components'

export const ParentContainer = styled.div`
  display: flex;
  align-items: center;
  transition: 0.3s;
  height: ${props => (props.isAtTop ? '63px' : '40px')};
  @media (max-width: 740px) {
    justify-content: space-between;
  }
  overflow: visible;
`

export const NavLinkContainer = styled.ul`
  margin: 0;
  transition: 0.3s;
  padding-left: ${props => (props.isAtTop ? '150px' : '100px')};
  li {
    display: inline-block;
    border-left: 2px dashed #000;
  }

  li:last-of-type {
    border-right: 2px dashed #000;
  }
  li > a {
    color: #fff;
    font-size: ${props => (props.isAtTop ? '20px' : '17px')};
    display: inline-block;
    margin: 0;
    padding: ${props => (props.isAtTop ? '20px' : '10px')};
    font-weight: 100;
    font-style: italic;
    text-decoration: none;
    transition: 0.3s all ease;
    &:hover {
      background: rgba(207, 216, 220, 0.75);
      color: #000;
      text-decoration: underline;
    }
  }
  @media (max-width: 1200px) {
    padding-left: 20px;
  }
  @media (max-width: 740px) {
    display: none;
  }
`

export const ShrunkenMenu = styled.ul`
  border-left: 3px solid #111;
  background: linear-gradient(to bottom, #263238 0%, #607d8b 100%);
  transform: ${props =>
    props.isClicked ? 'translate(0,0)' : 'translate(150vw, 0)'};
  position: fixed;
  top: -15px;
  right: 0;
  z-index: 100;
  width: 200px;
  height: 100vh;
  list-style: none;
  /* display: flex; */
  padding: 50px 0 0 0;
  /* flex-direction: column;
  align-items: center; */
  transition: 0.3s all ease;
`

export const InnerContainerShrunkenMenu = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`

export const ShrunkenMenuLink = styled.li`
  margin: 15px;
  font-size: 22px;
  border: none;
  color: #000;
  font-weight: 100;
  transform: ${props =>
    props.isClicked ? 'translateX(0px)' : 'translateX(600px)'};
  transition: 0.5s all ease;
  transition-delay: ${props => props.order * 0.05}s;
  a {
    font-family: serif;
    font-style: italic;
    padding: 10px;
    transition: 0.4s all ease;
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    padding-left: 20px;
    border-left: 5px solid #000;
  }
`

export const CloseButton = styled.span`
  position: fixed;
  color: #fff;
  padding: 5px;
  top: 0px;
  right: 140px;
  font-size: 36px;
  font-weight: 100;
  transform: scale(1, 0.7);
  cursor: pointer;
`

export const MenuIcon = styled.img`
  transition: 0.3s;
  cursor: pointer;
  display: none;
  padding-right: 40px;
  @media (max-width: 740px) {
    display: block;
  }
`

export const LogoFont = styled.span`
  transition: 0.3s;
  font-weight: 100;
  font-style: italic;
  font-size: ${props => (props.isAtTop ? '40px' : '30px')};
  color: #fff;
  padding-left: 40px;
  font-family: 'Allerta Stencil', sans-serif;
  span {
    color: #000;
  }

  @media (max-width: 740px) {
    font-size: ${props => (props.isAtTop ? '24px' : '18px')};
  }
`

export const NavBar = styled.nav`
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 10;
  transition: 0.3s;
  background-image: linear-gradient(15deg, #263238 0%, #607d8b 100%);
  border-top: 3px solid #000;
  border-bottom: 3px solid #000;
  -webkit-box-shadow: 0px 10px 4px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 4px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 4px -9px rgba(0, 0, 0, 0.75);
`

export const NameContainer = styled.div`
  padding-right: 10px;
  background: linear-gradient(to right, #263238 0%, #607d8b 100%);
  transition: 0.3s;
  font-size: ${props => (props.isAtTop ? '50px' : '35px')};
  font-weight: 100;
  font-style: italic;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  border-bottom: 3px solid #000;

  a {
    position: relative;
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`
export const Triangle = styled.div`
  transition: 0.3s;
  position: absolute;
  border: 12px solid transparent;
  border-right: 12px solid #263238;
  position: absolute;
  top: ${props => (props.isAtTop ? '19px' : '8px')};
  left: ${props => (props.isAtTop ? '-47px' : '-35px')};
  transform: ${props => (props.isAtTop ? 'scale(3.25)' : 'scale(2.25)')};
  @media (max-width: 1100px) {
    display: none;
  }
`

export const Overlay = styled.div`
  position: fixed;
  display: ${props => (props.isClicked ? 'block' : 'none')};
  z-index: 20;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const Parent = styled.div`
  height: 90px;
`
