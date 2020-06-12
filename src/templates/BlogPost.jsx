import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ReactTooltip from 'react-tooltip'

import {
  LinkContainer,
  IconImage,
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
          <Link to={leftLink}>
            <a data-tip data-for="leftIcon">
              <IconImage
                left
                src="/angle-double-right-solid.svg"
                alt="navigate to previous article"
              />
            </a>
            <ReactTooltip effect="solid" id="leftIcon">
              {leftLinkTitle}
            </ReactTooltip>
          </Link>
        ) : (
          <div />
        )}
        {rightLink ? (
          <Link to={rightLink}>
            <a data-tip data-for="rightIcon">
              <IconImage
                left={false}
                src="/angle-double-right-solid.svg"
                alt="navigate to next article"
              />
            </a>
            <ReactTooltip effect="solid" id="rightIcon">
              {rightLinkTitle}
            </ReactTooltip>
          </Link>
        ) : (
          <div />
        )}
      </LinkContainer>

      <div>
        <Header>{title}</Header>
        <Attribution>
          <strong>By: </strong>
          {author}
        </Attribution>
        <AvatarContainer>
          <Img fixed={props.data.file.childImageSharp.fixed} />
        </AvatarContainer>
        <BlogContainer dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <LinkContainer>
        {leftLink ? (
          <Link to={leftLink}>
            <a data-tip data-for="leftBottomLink">
              <IconImage left src="/angle-double-right-solid.svg" alt="" />
            </a>
            <ReactTooltip effect="solid" id="leftBottomLink">
              {leftLinkTitle}
            </ReactTooltip>
          </Link>
        ) : (
          <div />
        )}
        {rightLink ? (
          <Link
            style={{ textDecoration: 'none', float: 'right' }}
            to={rightLink}
          >
            <a data-tip data-for="rightBottomLink">
              <IconImage
                left={false}
                src="/angle-double-right-solid.svg"
                alt=""
              />
            </a>
            <ReactTooltip id="rightBottomLink" effect="solid">
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
