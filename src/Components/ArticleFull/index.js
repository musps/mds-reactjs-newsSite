import React from 'react'
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
  Image
} from 'semantic-ui-react'

const ArticleFull = ({
  imageHeader, title, content, source
}) => (
  <Segment style={{ padding: '20px 0px' }} vertical>
    <Container text>
      <Image src={imageHeader} fluid style={{ height: 'auto', 'max-height': '30vh' }} />
      <Header as="h3" style={{ fontSize: '2em' }}>
        {title}
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        {content}
      </p>

      <Button icon size="large" labelPosition="left">
        <Icon name="world" />
        {source}
      </Button>
    </Container>
  </Segment>
)

export default ArticleFull
