import { BlogPost } from './BlogPost';

export const BLOGPOSTS: BlogPost[] = [
  {
    id: 1,
    date: new Date(),
    category: 'Coding',
    title: 'Building scarp.io',
    content: 'Building this website has been great. Back at Galvanize I learned AngularJS 1, and even though it had a steep learning curve I got used to it. So far Angular 2 is much better. Compared to 1, it uses more intuitive conceptual links between the view and the controller, tightens up some of the dependency injection and routing stuff, and makes data binding more flexible. The greatest discovery for me, however, was the Angular command line interface (CLI). If you\'re building a project from scratch, the CLI is a must in my opinion. Some may have reservations about a prescribed file structure, but I\'d say it\'s definitely worth getting over. It prepares your project for scaling up in the future, and saves you the time and tedium of populating a bunch of directories with files, and files with boilerplate code. Another first for me was SVG, used for the GitHub and LinkedIn icons. I\'d been hearing about SVG taking over from icon fonts because of scalability and positioning, among other reasons. The only catch seems to be compatability with older versions of browsers. For an in-depth comparison, as always css-tricks.com comes through (https://css-tricks.com/icon-fonts-vs-svg/).'
  },
  {
    id: 2,
    date: new Date(),
    category: 'Reads',
    title: 'My Second Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]
