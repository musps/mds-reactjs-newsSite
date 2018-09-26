import React from 'react'
import {
  Segment,
  Container,
  Header,
  Button,
  Icon
} from 'semantic-ui-react'

const sliceContent = content => content === null ? '' : content.slice(0, 85) + '...'

const ArticlePreview = ({title, content, source = '', onClickReadMore}) => (
  <Segment style={{ padding: '20px 0px' }} vertical>
    <Container text>
      <Header as='h3' style={{ fontSize: '2em' }}>
        {title}
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        {sliceContent(content)}
      </p>

      <Button icon size='large' labelPosition='left'>
        <Icon name='world' />
        {source}
      </Button>

      <Button as='a' size='large' onClick={onClickReadMore}>
        Read More
      </Button>
    </Container>
  </Segment>
)

export default ArticlePreview
