import React from 'react'
import {
  Segment,
  Container
} from 'semantic-ui-react'

import './shimmer.styles.scss'

const ArticlePreviewShimmer = () => (
  <Segment style={{ padding: '20px 0px' }} vertical>
    <Container text>
      <div className="articlepreviewShimmer">
        <div className="shimmer" data-target="title" />
        <div className="shimmer" data-target="content" />
        <div className="shimmer" data-target="content" />
        <div className="shimmer" data-target="content" />
        <div className="buttons">
          <div className="shimmer" data-target="btn-source" />
          <div className="shimmer" data-target="btn-read-more" />
        </div>
      </div>
    </Container>
  </Segment>
)

export default ArticlePreviewShimmer
