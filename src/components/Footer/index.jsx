import React, { PureComponent } from 'react'
import './index.scss'

const programmingLinks = [
  {
    link: 'https://github.com/linearsunrise',
    text: 'github',
    id: 'b0b731fce107169cc482e16cceec19e3',
  },
  {
    link: 'https://linearsunrise.github.io',
    text: 'blog',
    id: '73de6f0b4b49752ad4baec699d0dd707',
  },
]

class Footer extends PureComponent {
  render() {
    const { props } = this.props
    return (
      <div className="footer">
        <div className="footer__info">
          <div className="footer__container">
            <div className="footer__logo">
              <svg
                width="97"
                height="97"
                viewBox="0 0 97 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.4838 44.6464L64.4677 35.3018L56.8778 49.9349L44.6537 43.5945L39.5039 53.5232L31.2098 49.2212L21.203 68.514H4.90549M6.95624 72.4824H72.8843M48.5 0.5C75.0097 0.500018 96.5 21.9903 96.5 48.5C96.5 75.0097 75.0097 96.5 48.5 96.5C30.7076 96.5 15.1763 86.8193 6.88579 72.4379H6.9572C15.2415 86.7838 30.7432 96.4382 48.5 96.4382C74.9756 96.4382 96.4382 74.9756 96.4382 48.5C96.4382 22.0245 74.9755 0.561779 48.5 0.56176C22.0244 0.56177 0.56177 22.0244 0.56176 48.5C0.56176 55.6328 2.11949 62.4018 4.91344 68.4852H4.84565C2.0555 62.4006 0.5 55.632 0.5 48.5C0.50001 21.9903 21.9903 0.50001 48.5 0.5Z"
                  stroke="currentColor"
                  strokeWidth="1px"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="footer__info">
          <b className="footer__text footer__text--bold">Music</b>
          <ul className="footer__list">
            {props.linkedAccounts.map((e) => (
              <li key={e.link} className="footer__text">
                <a
                  href={e.link}
                  target="_blank"
                  key={e.id}
                  className="header__link"
                >
                  {e.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__info">
          <b className="footer__text footer__text--bold">Programming</b>
          <ul className="footer__list">
            {programmingLinks.map((e) => (
              <li key={e.link} className="footer__text">
                <a
                  href={e.link}
                  target="_blank"
                  key={e.id}
                  className="header__link"
                >
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

export default Footer
