import React from 'react'
import { Link } from 'gatsby'

import {
  CardContainer,
  TagsContainer,
  HeaderContainer,
  DateContainer,
  DescriptionContainer,
  Tag,
} from './Styles'

export default function BlogCard({ node, idx }) {
  const { frontmatter, fields } = node.node
  return (
    <Link to={`/${fields.slug}`} style={{ textDecoration: 'none' }}>
      <CardContainer key={idx} idx={idx}>
        <TagsContainer>
          {frontmatter.tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagsContainer>
        <HeaderContainer>{frontmatter.title}</HeaderContainer>
        <DateContainer>{frontmatter.date}</DateContainer>
        <DescriptionContainer>{frontmatter.description}</DescriptionContainer>
      </CardContainer>
    </Link>
  )
}
