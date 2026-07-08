import React, { PureComponent } from 'react'
import Card from './Card'

class Feed extends PureComponent {
    render() {
        const { article } = this.props
        return (
            <div className="feed">
                <h1>{article.subject}</h1>
                <div class="flexbox-container">
                    {article.article.map(e => <Card card={e} />)}
                </div>
            </div>
        )
    }
}

export default Feed