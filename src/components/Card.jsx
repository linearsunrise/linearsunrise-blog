import React, { PureComponent } from 'react'

class Card extends PureComponent {
    render() {
        const { card } = this.props
        return (
            <div className="card shadow_box">
                <div className={card.img}></div>
                <div className="card_text">
                    <h2>
                        <a href={card.link}>
                            {card.head}
                        </a>
                    </h2>
                    <p>{card.paragraph}</p>
                </div>
            </div>
        )
    }
}

export default Card