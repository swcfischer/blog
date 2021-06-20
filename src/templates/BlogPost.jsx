import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ReactTooltip from 'react-tooltip'

import {
  LinkContainer,
  LeftIconImage,
  RightIconImage,
  Header,
  Attribution,
  AvatarContainer,
  BlogContainer,
} from './Styles.jsx'

const BlogPost = props => {
  const {
    rightLink,
    leftLink,
    leftLinkTitle,
    rightLinkTitle,
  } = props.pageContext

  const post = props.data.markdownRemark

  const {
    html,
    frontmatter: { title, author },
  } = post

  return (
    <Layout>
      <LinkContainer>
        {leftLink ? (
          <Link className="left-link" to={leftLink} style={{ float: 'left' }}>
            <a data-tip data-for="leftIcon">
              <LeftIconImage
                src="/angle-double-right-solid.svg"
                alt="navigate to previous article"
              />
            </a>
            <ReactTooltip className="tooltip" effect="solid" id="leftIcon">
              {leftLinkTitle}
            </ReactTooltip>
          </Link>
        ) : (
          <div />
        )}
        <div></div>
        {rightLink ? (
          <Link
            className="right-link"
            style={{ float: 'right' }}
            to={rightLink}
          >
            <a data-tip data-for="rightIcon">
              <RightIconImage
                src="/angle-double-right-solid.svg"
                alt="navigate to next article"
              />
            </a>
            <ReactTooltip className="tooltip" effect="solid" id="rightIcon">
              {rightLinkTitle}
            </ReactTooltip>
          </Link>
        ) : (
          <div />
        )}
      </LinkContainer>

      <div>
        <Header>{title}</Header>
        <Attribution>By {author}</Attribution>
        <AvatarContainer>
          <Img fixed={props.data.file.childImageSharp.fixed} />
        </AvatarContainer>
        <BlogContainer dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <LinkContainer>
        {leftLink ? (
          <Link to={leftLink} style={{ float: 'left' }} className="left-link">
            <a data-tip data-for="leftBottomLink">
              <LeftIconImage src="/angle-double-right-solid.svg" alt="" />
            </a>
            <ReactTooltip
              className="tooltip"
              effect="solid"
              id="leftBottomLink"
            >
              {leftLinkTitle}
            </ReactTooltip>
          </Link>
        ) : (
          <div />
        )}
        <div></div>
        {rightLink ? (
          <Link
            to={rightLink}
            className="right-link"
            style={{ float: 'right' }}
          >
            <a data-tip data-for="rightBottomLink">
              <RightIconImage src="/angle-double-right-solid.svg" alt="" />
            </a>
            <ReactTooltip
              className="tooltip"
              id="rightBottomLink"
              effect="solid"
            >
              {rightLinkTitle}
            </ReactTooltip>
          </Link>
        ) : (
          <div />
        )}
      </LinkContainer>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }

    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
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
