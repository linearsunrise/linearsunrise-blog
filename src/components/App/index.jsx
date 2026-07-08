import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Feed from '../Feed'
import '../../styles/reset.css'
import '../../styles/global.scss'
import './index.scss'

let articles = {
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
          img: 'points',
          link: 'https://en.wikipedia.org/wiki/Point_(geometry)',
        },
        {
          head: 'Lines',
          paragraph: 'Breadthless length',
          img: 'lines',
          link: 'https://en.wikipedia.org/wiki/Line_(geometry)',
        },
        {
          head: 'Circles',
          paragraph:
            'A circle is a plane figure contained by one line such that all the straight lines falling upon it from one point among those lying within the figure equal one another.',
          img: 'circles',
          link: 'https://en.wikipedia.org/wiki/Circle',
        },
        {
          head: 'Grid',
          paragraph:
            'Design theory and practice that subdivides a system into smaller parts called modules',
          img: 'grid',
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
          img: 'colorful_circle',
          link: 'https://circle-colorful.glitch.me/',
        },
        {
          head: 'Sierpinsky attractor',
          paragraph:
            "After watching one of the Numberfile's video about games of chaos, I decided to make my implementation of the algorithm on JS",
          img: 'attractor',
          link: 'https://chaos-attractor.glitch.me/',
        },
        {
          head: 'Liquid crates',
          paragraph:
            "Interesting lissajous shape I've once created during the night in graphing calculator",
          img: 'star',
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
          img: 'alternate_sourceep',
          link: 'https://soundcloud.com/linearsunrise/sets/alternate_sourceep',
        },
        {
          head: 'Midnight Wandering',
          paragraph: 'A little journey in the night',
          img: 'midnight_wandering',
          link: 'https://soundcloud.com/linearsunrise/sets/midnight-wandering',
        },
      ],
    },
  ],
}

function App() {
  return (
    <div className="app">
      <Header props={articles.header} />
      {articles.feed.map((e) => (
        <Feed article={e} key={e.subject} />
      ))}
      <Footer />
    </div>
  )
}

export default App
