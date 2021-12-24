import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'

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
  position: relative;
  height: 32px;

  .__react_component_tooltip:not(.show) {
    opacity: 0;
    animation: ${fadeIn} 0.25s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  .__react_component_tooltip.show {
    z-index: 9999999;
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

  p > strong > em {
    display: block;
    text-align: center;
    font-size: 20px;
  }

  p {
    line-height: 1.9rem;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-family: 'Merriweather', serif;
    a {
      display: inline;
      justify-content: center;
      color: #1b4d67;
    }
  }

  h1 {
    color: var(--blog-post-header);
    text-align: center;
    border-bottom: 2px solid var(--h1-border-color);
    padding-bottom: 5px;
    margin: 45px 0;
    font-style: italic;
  }

  h2 {
    color: var(--blog-post-header);
    border-bottom: 2px solid var;
    padding-bottom: 5px;
    margin: 45px 0;
  }

  code {
    padding: 2px;
    font-size: 1rem;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    color: rgb(248, 248, 242);
    background-color: rgb(39, 40, 34);
    border-radius: 3px;
    word-break: keep-all;
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
  margin: 40px auto 15px auto;
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
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
  font-style: italic;
`
export const Avatar = styled(Img)`
  display: block !important;
  margin: 0 auto;
  border-radius: 50%;
  border: #fff 1px solid;
  margin-bottom: 80px;
`
