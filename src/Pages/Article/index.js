import React, { Component } from 'react'
import { withRouter } from 'react-router'

import ArticleFull from '../../Components/ArticleFull'

const defaultImageHeader = '/media/imgs/placeholder.png'

class ArticlePage extends Component {
  state = {
    imageHeader: null,
    title: '',
    content: '',
    source: ''
  }

  componentWillMount() {
    try {
      const { article } = this.props.location.state
      let imageHeader = article.urlToImage
      imageHeader = (imageHeader !== null ? imageHeader : defaultImageHeader)

      this.setState({
        imageHeader,
        title: article.title,
        content: article.content,
        source: article.source.name
      })
    } catch (e) {
      this.props.history.push('/')
    }
  }

  render() {
    const {
      imageHeader, title, content, source
    } = this.state

    return (
      <div className="articlePage">
        <ArticleFull
          imageHeader={imageHeader}
          title={title}
          content={content}
          source={source}
        />
      </div>
    )
  }
}

export default withRouter(ArticlePage)
