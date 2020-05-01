import styled from 'styled-components'

export const LinkContainer = styled.div`
  display: flex;
  padding: 35px 10px 10px 10px;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 100;
  border: 2px solid transparent;

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    font-style: italic;
  }

  @media (max-width: 740px) {
    font-size: 14px;
  }
`

export const IconImage = styled.img`
  position: relative;
  top: 2px;
  width: 25px;
  height: 28px;
  transform: ${props => (props.left ? `rotate(180deg)` : 'none')};
  left: ${props => (props.left ? -4 : 4)}px;

  @media (max-width: 740px) {
    top: 4px;
  }
`

export const BlogContainer = styled.div`
  min-height: 50vh;
  max-width: 750px;
  margin: 0 auto;
  color: #000;
  p {
    line-height: 25px;
    font-size: 17px;
    margin-bottom: 30px;
    font-family: 'Merriweather', serif;
    a {
      display: inline;
      justify-content: center;
      color: #1b4d67;
    }
  }

  h1 {
    text-align: center;
    color: #1f2325;
  }

  h2 {
    color: #1f2325;
  }

  hr {
    border-color: rgb(38, 50, 56);
  }
`
export const Header = styled.h1`
  font-size: 34px;
  font-style: italic;
  font-weight: 100;
  text-align: center;
  font-family: Merriweather, serif;
  letter-spacing: 2px;
  padding: 0;
  text-transform: capitalize;
  margin: 40px auto 75px auto;
  max-width: 750px;
  font-weight: bold;
  border-bottom: 4px dashed goldenrod;
  @media (max-width: 760px) {
    font-size: 32px;
    border-bottom: 3px dashed goldenrod;
  }
`

export const Attribution = styled.div`
  position: relative;
  top: -55px;
  text-align: center;
  max-width: 750px;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.9);
  font-style: italic;
`
export const AvatarContainer = styled.div`
  display: block;
  position: relative;
  top: -45px;
  height: 65px;
  width: 65px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: #c4c7cc 0px 0px 2px;
`
