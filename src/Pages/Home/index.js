import React, { Component } from 'react'
import { withRouter } from 'react-router'
import everythingRequest from '../../Requests/everything'
import ArticlePreview from '../../Components/ArticlePreview'

const HomePageComponent = ({ isLoading, articles, onClickReadMore }) => (
  <div className="homePage">
    {articles.map((article, key) => (
      <ArticlePreview
        key={key}
        title={article.title}
        content={article.content}
        source={article.source.name}
        onClickReadMore={() => (onClickReadMore(article))}
      />
    ))}
  </div>
)

class HomePage extends Component {
  state = {
    articles: [],
    isLoading: false
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
    this.setState({ isLoading: true })
    const articles = await everythingRequest()
    this.setState({
      isLoading: false,
      articles
    })
  }

  render() {
    const { articles, isLoading } = this.state

    return (
      <HomePageComponent
        isLoading={isLoading}
        articles={articles}
        onClickReadMore={this.onClickReadMore}
      />
    )
  }
}

export default withRouter(HomePage)
