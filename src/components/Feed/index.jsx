import React, { PureComponent } from 'react'
import Card from '../Card'
import './index.scss'

class Feed extends PureComponent {
  render() {
    const { article } = this.props
    return (
      <div className="feed">
        <h1 className="feed__title">{article.subject}</h1>
        <div className="feed__list">
          {article.article.map((e) => (
            <Card card={e} key={e.head} />
          ))}
        </div>
      </div>
    )
  }
}

export default Feed
