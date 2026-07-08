import React, { PureComponent } from 'react'

class Card extends PureComponent {
    render() {
        const { card } = this.props
        return (
            <div className="card">
                <a href={card.link} target="_blank">
                    <div className={card.img}></div>
                    <div className="card_text">
                        <h2>
                            {card.head}
                        </h2>
                        <p>{card.paragraph}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Card