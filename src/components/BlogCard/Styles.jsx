import styled, { keyframes } from 'styled-components'

const arrivalTransition = keyframes`
  from { 
    transform: translate3d(-200%, 0, 0) scale3d(1.5, .5, 0); 
    opacity: 0;
  }
  to { 
    transform: translate3d(0px, 0, 0) scale3d(1,1, 0)
    opacity: 1;
  }
`

export const CardContainer = styled.article`
  position: relative;
  flex-direction: column;
  background: var(--background);
  color: var(--black-text);
  max-width: 600px;
  margin: 30px auto;
  border: 3px solid var(--card-border);
  border-radius: 3px;
  min-height: 200px;
  font-family: Merriweather, serif;
  -webkit-box-shadow: 0px 10px 18px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 18px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 18px -9px rgba(0, 0, 0, 0.75);
  transition-duration: 0.5s;
  animation: ${arrivalTransition} ${props => 1.3 + 0.2 * props.idx}s
    cubic-bezier(0.41, -0.4, 0.12, 2);
  &:hover {
    bottom: 1px;
    -webkit-box-shadow: 0px 10px 18px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 18px 3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 18px 3px rgba(0, 0, 0, 0.75);
  }
  @media (max-width: 520px) {
    min-height: 250px;
  }
  span {
    align-self: flex-end;
    bottom: 5px;
    font-size: 18px;
    font-weight: 100;
    position: absolute;
    right: 10px;
    border: 2px solid var(--misc-black);
    background: var(--card-tag);
    color: var(--text);
    padding: 10px 0px;
    width: 80px;
    transition: 0.3s all ease;
    transform: rotate(-3deg);
  }

  &:hover span {
    transform: rotate(0deg);
  }

  span:hover {
    transform: scale(1.05);
  }
  @media (max-width: 740px) {
    animation: none;
  }
`

export const HeaderContainer = styled.h1`
  /* font-family: 'Aref Ruqaa', serif; */
  font-family: 'Allerta Stencil', sans-serif;
  font-style: italic;
  margin: 0;
  margin-top: 10px;
  padding: 5px;
  align-self: center;
  font-size: 36px;
  font-style: italic;
  color: var(--card-h1-color);
  @media (max-width: 520px) {
    margin-top: 30px;
    font-size: 30px;
  }
`

export const DateContainer = styled.div`
  padding: 10px 0 0 25px;
  align-self: flex-start;
  color: var(--card-date-color);
  text-align: left;
  font-weight: bold;
  font-size: 12px;
`

export const DescriptionContainer = styled.div`
  padding: 10px 25px 10px 25px;
  align-self: flex-start;
  color: var(--black-text);
  text-align: left;
`
export const TagsContainer = styled.div`
  display: flex;
`

export const Tag = styled.div`
  border-radius: 5px;
  padding: 5px;
  margin: 5px 0px 5px 5px;
  display: inline-block;
  align-self: flex-start;
  background: var(--card-tag-bg);
  color: var(--text);
  font-weight: 100;
`
