import React from 'react'
import Header from './Header'
import Footer from './Footer'

// import Navigation from './Navigation'
import './reset.css'
import './style.scss'
import Feed from './Feed'

let articles = {
  navigationBar: [
    {
      id: 'asfipobmodarnq3o4009sob',
      link: '',
      text: 'ABOUT',
    },
    {
      id: 'moadfbmo599w5syibjsdmfo',
      link: 'https://linearsunrise.bandcamp.com/',
      text: 'SHOP',
    },
    {
      id: 'mdldsbimmw509ynfnobwokl',
      link: 'https://soundcloud.com/linearsunrise',
      text: 'SOUNDCLOUD',
    },
  ],
  header: {
    name: 'linear sunrise',
    info: 'I am Ilya Mordvinkin. I make music and code.',
    linkedAccounts: [
      {
        link: 'https://soundcloud.com/linearsunrise',
        text: 'soundcloud',
        img: '',
      },
      {
        link: 'https://linearsunrise.bandcamp.com/',
        text: 'bandcamp',
        img: '',
      },
      {
        link: 'https://vk.com/linearsunrise',
        text: 'vk',
        img: '',
      },
    ],
  },
  feed: [
    {
      subject: 'Test article',
      article: [
        {
          head: 'Points',
          paragraph: 'That which has no part',
          img: 'card_img points',
          link: 'https://en.wikipedia.org/wiki/Point_(geometry)',
        },
        {
          head: 'Lines',
          paragraph: 'Breadthless length',
          img: 'card_img lines',
          link: 'https://en.wikipedia.org/wiki/Line_(geometry)',
        },
        {
          head: 'Circles',
          paragraph:
            'A circle is a plane figure contained by one line such that all the straight lines falling upon it from one point among those lying within the figure equal one another.',
          img: 'card_img circles',
          link: 'https://en.wikipedia.org/wiki/Circle',
        },
        {
          head: 'Grid',
          paragraph:
            'Design theory and practice that subdivides a system into smaller parts called modules',
          img: 'card_img grid',
          link: 'https://en.wikipedia.org/wiki/Modular_design',
        },
      ],
    },
    {
      subject: 'Canvas JS projects',
      article: [
        {
          head: 'Colorful circle',
          paragraph:
            'This is a lissajous circle shape with colorful dots/circles on it',
          img: 'card_img colorful_circle',
          link: 'https://circle-colorful.glitch.me/',
        },
        {
          head: 'Sierpinsky attractor',
          paragraph:
            "After watching one of the Numberfile's video about games of chaos, I decided to make my implementation of the algorithm on JS",
          img: 'card_img attractor',
          link: 'https://chaos-attractor.glitch.me/',
        },
        // {
        //     "head": "Snail",
        //     "paragraph": "text",
        //     "img": "card_img snail",
        //     "link": ""
        // },
        {
          head: 'Liquid crates',
          paragraph:
            "Interesting lissajous shape I've once created during the night in graphing calculator",
          img: 'card_img star',
          link: 'https://liquid-crates.glitch.me/',
        },
      ],
    },
    {
      subject: 'Music',
      article: [
        {
          head: 'Alternate Source EP',
          paragraph: 'My first ever EP about power electronics',
          img: 'card_img alternate_sourceep',
          link: 'https://soundcloud.com/linearsunrise/sets/alternate_sourceep',
        },
        {
          head: 'Midnight Wandering',
          paragraph: 'A little journey in the night',
          img: 'card_img midnight_wandering',
          link: 'https://soundcloud.com/linearsunrise/sets/midnight-wandering',
        },
      ],
    },
  ],
}

function App() {
  return (
    <div className="application">
      <Header props={articles.header} />
      {/* <Navigation tab={articles.navigationBar} /> */}
      {articles.feed.map((e) => (
        <Feed article={e} />
      ))}
      <Footer />
    </div>
  )
}

export default App
