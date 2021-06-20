import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

export default class MyComponent extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={theme === 'dark'}
            onChange={isToggled => {
              toggleTheme(isToggled ? 'dark' : 'light')
            }}
            size={30}
          />
        )}
      </ThemeToggler>
    )
  }
}
