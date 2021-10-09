import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'

import BlogCard from '../components/BlogCard/BlogCard'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const { allMdx } = data

  return (
    <Layout>
      <LayoutInnerContainer>
        {allMdx &&
          allMdx?.nodes?.map((node, idx) => (
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
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          title
          description
          date(formatString: "DD MMMM, YYYY")
          tags
        }
        fields {
          slug
        }
      }
    }
  }
`

export default IndexPage

const BlogCardContainer = styled.div`
  margin-bottom: 30px;
  & + & {
    border-top: 5px double var(--card-border);
  }
`

const LayoutInnerContainer = styled.div`
  text-align: center;
`
