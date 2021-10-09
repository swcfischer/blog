import React from 'react'
import ReactTooltip from 'react-tooltip'

import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import {
  LinkContainer,
  LeftIconImage,
  RightIconImage,
  Header,
  Attribution,
  Avatar,
  BlogContainer,
} from './Styles.jsx'

const BlogPostMdx = props => {
  const { pageContext } = props
  const {
    body,
    frontmatter: { title, author },
  } = props.data.mdx

  return (
    <Layout>
      <LinkRow {...pageContext} />
      <Header>{title}</Header>
      <Attribution>By {author}</Attribution>
      <Avatar fixed={props.data.file.childImageSharp.fixed} />
      <BlogContainer>
        <MDXRenderer>{body}</MDXRenderer>
      </BlogContainer>
      <LinkRow {...pageContext} />
    </Layout>
  )
}

export default BlogPostMdx

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        author
      }
    }

    file(relativePath: { eq: "images/headshot.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 65, height: 65) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const LinkRow = props => {
  const { leftLink, leftLinkTitle, rightLink, rightLinkTitle } = props

  return (
    <LinkContainer>
      {leftLink && (
        <Link to={leftLink} className="left-link">
          <a data-tip data-for="leftBottomLink">
            <LeftIconImage src="/angle-double-right-solid.svg" alt="" />
          </a>
          <ReactTooltip className="tooltip" effect="solid" id="leftBottomLink">
            {leftLinkTitle}
          </ReactTooltip>
        </Link>
      )}

      {rightLink && (
        <Link to={rightLink} className="right-link">
          <a data-tip data-for="rightBottomLink">
            <RightIconImage src="/angle-double-right-solid.svg" alt="" />
          </a>
          <ReactTooltip className="tooltip" id="rightBottomLink" effect="solid">
            {rightLinkTitle}
          </ReactTooltip>
        </Link>
      )}
    </LinkContainer>
  )
}
