import styled, { keyframes } from 'styled-components'
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'

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
    margin-left: 25px;
    float: left;
  }

  .right-link {
    margin-right: 25px;
    float: right;
  }

  .__react_component_tooltip:not(.show) {
    opacity: 0;
    animation: ${fadeIn} 0.25s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  a {
    color: var(--misc-black);
    text-decoration: none;
    font-weight: bold;
    font-style: italic;
  }

  @media (max-width: 740px) {
    font-size: 14px;
  }
`

export const RightIconImage = styled(FaAngleDoubleRight)`
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
export const LeftIconImage = styled(FaAngleDoubleLeft)`
  position: relative;
  top: 2px;
  width: 25px;
  height: 28px;
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
      color: var(--drop-cap);
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
    color: var(--blog-post-header);
    text-align: center;
    border-bottom: 2px solid var(--h1-border-color);
    padding-bottom: 5px;
    margin: 45px 0;
  }

  h2 {
    color: var(--blog-post-header);
    border-bottom: 2px solid var;
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
  text-transform: capitalize;
  margin: 40px auto 75px auto;
  max-width: 750px;
  font-weight: bold;
  padding: 0px 0px 5px 0px;
  border-bottom: 4px dashed var(--card-h1-color);
  @media (max-width: 760px) {
    font-size: 32px;
    border-bottom: 3px dashed var(--card-h1-color);
  }
`

export const Attribution = styled.div`
  position: relative;
  top: -55px;
  text-align: center;
  max-width: 750px;
  margin: 0 auto;
  color: rgba(0, 0, 0, 0.75);
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
