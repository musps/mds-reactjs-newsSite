import React, { Component } from 'react'
import { withRouter } from 'react-router'
import everythingRequest from './../../utils/requests/everything'
import ArticlePreview from './../../Components/ArticlePreview'

const HomePageComponent = ({ articles, onClickReadMore }) => (
  <div className='homePage'>
    {articles.map((article, key) =>
      <ArticlePreview
        key={key}
        title={article.title}
        content={article.content}
        source={article.source.name}
        onClickReadMore={() => (onClickReadMore(article))}
      />
    )}
  </div>
)

class HomePage extends Component {
  state = {
    articles: []
  }
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.initializeData()
  }

  onClickReadMore = (article) => {
    this.props.history.push({
      pathname: '/article',
      state: {
        article
      }
    })
  }

  async initializeData() {
    const articles = await everythingRequest()
    this.setState({
      articles: articles
    })
    console.log('articles', articles)
  }

  render() {
    const { articles } = this.state

    return (
      <HomePageComponent articles={articles} onClickReadMore={this.onClickReadMore} />
    )
  }
}

export default withRouter(HomePage)
