import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import everythingRequest from '../../Requests/everything'
import ArticlePreview from '../../Components/ArticlePreview'
import ArticlePreviewShimmer from '../../Components/ArticlePreview/shimmer'

const HomePageComponent = ({ isLoading, articles, onClickReadMore }) => (
  <div className="homePage">
    {isLoading && (
      <Fragment>
        {[...Array(4).keys()].map((item, key) => (<ArticlePreviewShimmer key={key} />))}
      </Fragment>
    )}

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
    // Fake bad network loading.
    setTimeout(() => {
      this.setState({
        isLoading: false,
        articles
      })
    }, 1000)
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
