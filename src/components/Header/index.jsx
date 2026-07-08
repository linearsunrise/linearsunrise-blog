import React, { PureComponent } from 'react'
import './index.scss'

class Header extends PureComponent {
  render() {
    const { props } = this.props
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.42 181.42">
              <title>linear_sunrise-logo</title>
              <g id="logo-sunrise" data-name="logo-sunrise">
                <path
                  className="icon-logo header__logo-path"
                  d="M131.05,135.81H23.81a80.56,80.56,0,1,0-5.62-9.73H40.38L63.89,89.23l13.88,9L90,78.73,111,92l18.25-29,31.27,19.69"
                />
              </g>
            </svg>
          </div>
          <div className="header__general-info">
            <h1>{props.name}</h1>
            <p>{props.info}</p>
          </div>
        </div>
        <div className="header__linked-accounts">
          <ul>
            {props.linkedAccounts.map((e) => (
              <li key={e.link}>
                <a href={e.link} target="_blank" key={e.id} className='header__link'>
                  {e.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
