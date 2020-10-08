import React from 'react'
import { graphql } from 'gatsby'
import BlogCard from '../components/BlogCard/BlogCard'
import Layout from '../components/layout'

import styled from 'styled-components'

const BlogCardContainer = styled.div`
  margin-bottom: 30px;
  & + & {
    border-top: 5px double #305161;
  }
`

const LayoutInnerContainer = styled.div`
  text-align: center;
`

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <LayoutInnerContainer>
        {allMarkdownRemark &&
          allMarkdownRemark.edges.map((node, idx) => (
            <BlogCardContainer key={idx}>
              <BlogCard idx={idx} node={node} />
            </BlogCardContainer>
          ))}
      </LayoutInnerContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
