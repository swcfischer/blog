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
  const {
    frontmatter: { tags, date, description, title },
    fields: { slug },
  } = node

  return (
    <Link to={slug} style={{ textDecoration: 'none' }}>
      <CardContainer key={idx} idx={idx}>
        <TagsContainer>
          {tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagsContainer>
        <HeaderContainer>{title}</HeaderContainer>
        <DateContainer>{date}</DateContainer>
        <DescriptionContainer>{description}</DescriptionContainer>
      </CardContainer>
    </Link>
  )
}
