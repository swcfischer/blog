import React, { Component } from 'react'
import { Link } from 'gatsby'

import {
  Parent,
  Overlay,
  ShrunkenMenu,
  InnerContainerShrunkenMenu,
  CloseButton,
  ShrunkenMenuLink,
  NavBar,
  ParentContainer,
  LogoFont,
  MenuIcon,
  NavLinkContainer,
  NameContainer,
  Triangle,
} from './Styles'

const activeStyleObj = { fontWeight: 'bold' }

export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAtTop: true,
      isClicked: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = event => {
    const isAtTop = window.scrollY < 100
    if (isAtTop !== this.state.isAtTop) {
      this.setState({
        isAtTop,
      })
    }
  }

  handleClick = e => {
    this.setState({
      isClicked: !this.state.isClicked,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <Parent>
        <Overlay isClicked={this.state.isClicked} />
        <ShrunkenMenu isClicked={this.state.isClicked}>
          <InnerContainerShrunkenMenu>
            {this.state.isClicked && (
              <CloseButton onClick={this.handleClick}>X</CloseButton>
            )}
            <ShrunkenMenuLink isClicked={this.state.isClicked} order={1}>
              <Link onClick={this.handleClick} to="/">
                Home
              </Link>
            </ShrunkenMenuLink>
            <ShrunkenMenuLink isClicked={this.state.isClicked} order={2}>
              <a href="https://stevefischer.dev/">Portfolio</a>
            </ShrunkenMenuLink>
            <ShrunkenMenuLink isClicked={this.state.isClicked} order={3}>
              <a
                href="https://github.com/swcfischer"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </ShrunkenMenuLink>
          </InnerContainerShrunkenMenu>
        </ShrunkenMenu>
        <NavBar>
          <ParentContainer isAtTop={this.state.isAtTop}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <LogoFont isAtTop={this.state.isAtTop}>
                <span>{'<'}</span>
                Tech Blog
                <span>{'/>'}</span>
              </LogoFont>
            </Link>
            <MenuIcon onClick={this.handleClick} />
            <NavLinkContainer isAtTop={this.state.isAtTop}>
              <li>
                <Link activeStyle={activeStyleObj} to="/">
                  Home
                </Link>
              </li>
              <li>
                <a href="https://stevefischer.dev/">Portfolio</a>
              </li>
              <li>
                <a
                  href="https://github.com/swcfischer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </NavLinkContainer>
            <NameContainer isAtTop={this.state.isAtTop}>
              <Triangle isAtTop={this.state.isAtTop} />
              <a href="https://stevefischer.dev">Steve Fischer</a>
            </NameContainer>
          </ParentContainer>
        </NavBar>
      </Parent>
    )
  }
}
