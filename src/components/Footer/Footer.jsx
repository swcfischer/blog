import React from 'react'

import { FooterContainer } from './Styles'

export default function Footer() {
  return (
    <FooterContainer>
      <ul>
        <li>
          Made with{' '}
          <a
            href="https://www.gatsbyjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gatsby.js
          </a>
        </li>
        <li className="separator">|</li>
        <li>
          Hosted on{' '}
          <a href="https://surge.sh/" rel="noopener noreferrer" target="_blank">
            Surge
          </a>
        </li>
        <li className="separator">|</li>
        <li>
          Created by{' '}
          <a
            href="https://stevefischer.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Steve Fischer
          </a>
        </li>
      </ul>
    </FooterContainer>
  )
}
