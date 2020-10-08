import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const LinkContainer = styled.div`
  padding: 35px 10px 10px 10px;
  font-size: 20px;
  font-weight: 100;
  border: 2px solid transparent;
  width: 100%;

  .left-link {
    float: left;
  }

  .right-link {
    float: right;
  }

  .__react_component_tooltip:not(.show) {
    opacity: 0;
    animation: ${fadeIn} 0.25s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

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

export const RightIconImage = styled.img`
  position: relative;
  top: 2px;
  width: 25px;
  height: 28px;
  transform: none;
  left: 4px;

  @media (max-width: 740px) {
    top: 4px;
  }
`
export const LeftIconImage = styled.img`
  position: relative;
  top: 2px;
  width: 25px;
  height: 28px;
  transform: rotate(180deg);
  left: -4px;

  @media (max-width: 740px) {
    top: 4px;
  }
`

export const BlogContainer = styled.div`
  min-height: 50vh;
  max-width: 750px;
  margin: 0 auto;
  color: #000;
  p:first-of-type {
    .dropcap {
      color: #263238;
      float: left;
      font-size: 4.5rem;
      line-height: 3rem;
      margin: 0;
      padding: 0.5rem;
    }
  }

  p > strong > em {
    display: block;
    text-align: center;
    font-size: 20px;
  }

  p {
    line-height: 32px;
    font-size: 18px;
    margin-bottom: 30px;
    font-family: 'Merriweather', serif;
    a {
      display: inline;
      justify-content: center;
      color: #1b4d67;
    }

    .invisible {
      display: none;
      clip: rect(1px, 1px, 1px, 1px);
      height: 1px;
      overflow: hidden;
      position: absolute;
      top: auto;
      white-space: nowrap;
      width: 1px;
    }
  }

  h1 {
    color: #1f2325;
    text-align: center;
    border-bottom: 2px solid rgb(38, 50, 56);
    padding-bottom: 5px;
    margin: 45px 0;
  }

  h2 {
    color: #1f2325;
    border-bottom: 2px solid rgb(38, 50, 56);
    padding-bottom: 5px;
    margin: 45px 0;
  }

  hr {
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
