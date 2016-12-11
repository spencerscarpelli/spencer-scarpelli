import { Project } from './Project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'In Other Words',
    description: 'This is a front-end web app that takes text and transforms it by replacing a portion of it with synonyms. The page has two text boxes, one for the source text and one for results. The results can be loaded back into the input box to reiterate the transformation. The logic takes the source text and breaks it into an array of strings, to be channeled into API requests. It then checks each API response for synonyms in the noun, adjective, verb, and adverb categories, in that order based on estimations of frequency in English academic prose. It then picks one of the resulting synonyms at random and places it into a new array of strings, to be joined and appended to the results box on the page.',
    technologies: 'HTML, CSS, Javascript, jQuery, AJAX, JSON, and Big Huge Labs Thesaurus API',
    screenshots: [
      '/assets/images/in-other-words.png'
    ],
    gitHubUrl: 'https://github.com/spencerscarpelli/in-other-words'
  },
  {
    id: 2,
    name: 'Project TWO',
    description: 'Blah 2 description description 2 blah blah 2 description description',
    technologies: 'Project # 2 Technology A, technology B, and technology C',
    screenshots: [
      '/assets/images/in-other-words.png'
    ],
    gitHubUrl: 'https://github.com/spencerscarpelli/Twitter_Sentiment_Analysis'
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
