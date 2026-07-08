import React, { PureComponent } from 'react'
import './index.scss'

class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="footer__info">
          <div className="footer__container">
            <div className="footer__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 181.42 181.42"
              >
                <title>linear_sunrise-logo</title>
                <g id="logo-sunrise" data-name="logo-sunrise">
                  <path
                    className="icon-logo footer__logo-path"
                    d="M131.05,135.81H23.81a80.56,80.56,0,1,0-5.62-9.73H40.38L63.89,89.23l13.88,9L90,78.73,111,92l18.25-29,31.27,19.69"
                  />
                </g>
              </svg>
            </div>
            <p className="footer__text">linear_sunrise</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
