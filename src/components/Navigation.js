import React, { PureComponent } from 'react'

class Navigation extends PureComponent {
    render() {
        const { tab } = this.props
        return (
            <div className="navigation">
                <div className="logo"></div>
                <div className="navigation-list">
                    {tab.map(e => <a href={e.link}>
                        <div class="dark element">
                            <p>{e.text}</p>
                        </div>
                    </a>)}
                </div>
            </div>
        )
    }
}

export default Navigation