import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import {
  LinkContainer,
  IconImage,
  Header,
  Attribution,
  AvatarContainer,
  BlogContainer,
} from './Styles.jsx'

export default class BlogPost extends React.Component {
  render() {
    const {
      rightLink,
      leftLink,
      leftLinkTitle,
      rightLinkTitle,
    } = this.props.pageContext

    const post = this.props.data.markdownRemark
    const {
      html,
      frontmatter: { title, author },
    } = post

    return (
      <Layout>
        <LinkContainer>
          {leftLink ? (
            <Link to={leftLink}>
              <IconImage
                left
                src="/angle-double-right-solid.svg"
                alt="navigate to previous article"
              />
              {leftLinkTitle}
            </Link>
          ) : (
            <div />
          )}
          {rightLink ? (
            <Link to={rightLink}>
              {rightLinkTitle}
              <IconImage
                left={false}
                src="/angle-double-right-solid.svg"
                alt="navigate to next article"
              />
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
            <Img fixed={this.props.data.file.childImageSharp.fixed} />
          </AvatarContainer>
          <BlogContainer dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <LinkContainer>
          {leftLink ? (
            <Link to={leftLink}>
              <IconImage left src="/angle-double-right-solid.svg" alt="" />
              {leftLinkTitle}
            </Link>
          ) : (
            <div />
          )}
          {rightLink ? (
            <Link
              style={{ textDecoration: 'none', float: 'right' }}
              to={rightLink}
            >
              {rightLinkTitle}
              <IconImage
                left={false}
                src="/angle-double-right-solid.svg"
                alt=""
              />
            </Link>
          ) : (
            <div />
          )}
        </LinkContainer>
      </Layout>
    )
  }
}

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
