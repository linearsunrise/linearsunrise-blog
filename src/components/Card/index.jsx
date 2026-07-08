import React, { PureComponent } from 'react'
import './index.scss'

class Card extends PureComponent {
  render() {
    const { card } = this.props
    return (
      <div className="card">
        <a href={card.link} target="_blank">
          <div className={`card__image card__image--${card.img}`}></div>
          <div className="card__text">
            <h2 className="card__title">{card.head}</h2>
            <p className="card__description">{card.paragraph}</p>
          </div>
        </a>
      </div>
    )
  }
}

export default Card
