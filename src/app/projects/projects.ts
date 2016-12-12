import { Project } from './Project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'In Other Words',
    description: 'A front-end web application that takes text and transforms it by replacing a portion of it with synonyms. The page has two text boxes, one for the source text and one for results. The results can be loaded back into the input box to reiterate the transformation. The logic takes the source text and breaks it into an array of strings, to be channeled into API requests. It then checks each API response for synonyms in the noun, adjective, verb, and adverb categories, in that order based on estimations of frequency in English academic prose. It then picks one of the resulting synonyms at random and places it into a new array of strings, to be joined and appended to the results box on the page.',
    technologies: 'HTML, CSS, Javascript, jQuery, AJAX, JSON, Big Huge Labs Thesaurus API',
    screenshots: [
      '/assets/images/in-other-words.png'
    ],
    gitHubUrl: 'https://github.com/spencerscarpelli/in-other-words',
    deploymentUrl: 'https://spencerscarpelli-inotherwords.surge.sh'
  },
  {
    id: 2,
    name: 'Twitter Sentiment Analysis',
    description: 'A web application that pulls tweets based on a user\'s hashtag search query. The tweets are given a score based on a sentiment analysis algorithm, and are visualized in charts. The user can hover over each node in the chart to read the tweet. The user can then save that search in a board to revisit later. The user can register in the application or with GitHub OAuth.',
    technologies: 'Node.js, Express.js, Python, d3.js, PostgreSQL, Knex, Twitter API, Jade/Pug',
    screenshots: [
      '/assets/images/twitter-sa-1.png',
      '/assets/images/twitter-sa-2.png',
      '/assets/images/twitter-sa-3.png',
      '/assets/images/twitter-sa-4.png'
    ],
    gitHubUrl: 'https://github.com/spencerscarpelli/Twitter_Sentiment_Analysis',
    deploymentUrl: 'https://shrouded-refuge-87693.herokuapp.com/'
  }
]

/*

In Other Words
Twitter Sentiment Analysis
Angular Shopping Cart
SommBuddy
Filings Crawler
Spencer Scarpelli

*/
