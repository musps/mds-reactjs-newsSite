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
        <div className="shimmer" data-target="title">
        </div>
        <div className="shimmer" data-target="content">
        </div>
        <div className="shimmer" data-target="content">
        </div>
        <div className="shimmer" data-target="content">
        </div>
        <div className="buttons">
          <div className="shimmer" data-target="btn-source">
          </div>
          <div className="shimmer" data-target="btn-read-more">
          </div>
        </div>
      </div>
    </Container>
  </Segment>
)

export default ArticlePreviewShimmer
