import React, { PureComponent } from 'react'

class Header extends PureComponent {
  render() {
    const { props } = this.props
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181.42 181.42">
              <title>linear_sunrise-logo</title>
              <g id="logo-sunrise" data-name="logo-sunrise">
                <path
                  class="cls-1"
                  d="M131.05,135.81H23.81a80.56,80.56,0,1,0-5.62-9.73H40.38L63.89,89.23l13.88,9L90,78.73,111,92l18.25-29,31.27,19.69"
                />
              </g>
            </svg>
          </div>
          <div className="generalInfo">
            <h1>{props.name}</h1>
            <p>{props.info}</p>
          </div>
        </div>
        <div className="linkedAccounts">
          <ul>
            {props.linkedAccounts.map((e) => (
              <li>
                <a href={e.link} target="_blank">
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
