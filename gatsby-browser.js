import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from 'styled-components'
import theme from 'prism-react-renderer/themes/okaidia'

import './src/styles/global.css'

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 1.5rem;
  border-radius: 3px;
  overflow: scroll;
  font-size: 1rem;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

const component = {
  pre: props => {
    const className = props.children.props.className || ''
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={props.children.props.children}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    )
  },
}

export const wrapPageElement = ({ element }) => {
  return <MDXProvider components={component}>{element}</MDXProvider>
}
