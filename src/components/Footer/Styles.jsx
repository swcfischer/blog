import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  border: 2px solid #000;
  border-left: none;
  border-bottom: none;
  border-right: none;
  font-weight: 100;
  height: 65px;
  background: #263238;

  ul {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0;
    font-style: italic;
    margin: 0 auto;
    li {
      font-family: serif;
      list-style: none;
      font-size: 20px;
      color: #c2d4cc;
      padding-left: 10px;
      font-weight: 100;
      display: inline-block;
      a {
        color: #c2d4cc;
        font-weight: bold;
      }
    }
    li + li {
      margin-right: 10px;
      padding-top: 1.5px;
      margin-top: 1.5px;
    }
    .separator {
      color: #111;
    }
    @media (max-width: 740px) {
      li {
        font-size: 14px;
      }
    }
  }
`
