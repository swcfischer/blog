import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Nav from './Nav/Nav'
import Footer from './Footer/Footer'

const LayoutParent = styled.div`
  margin: 0;
  padding: 0;
  outline: none;
`

const BodyParent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  padding-bottom: 100px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutParent>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'Tech Blog',
              content:
                'A tech blog document my continual learning as a front end dev',
            },
            { name: 'keywords', content: 'Tech, Front End' },
          ]}
        />
        <Nav />
        <BodyParent>{children}</BodyParent>
        <Footer />
      </LayoutParent>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
