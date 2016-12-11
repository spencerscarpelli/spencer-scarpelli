import { Project } from './Project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Project ONE",
    description: "Trouble with img src path: the root is the directory with the index.html file in it. See http://blog.thoughtram.io/angular/2016/06/08/component-relative-paths-in-angular-2.html",
    technologies: "Project # 1 Technology A, technology B, and technology C",
    screenshots: [
      "/assets/images/mean-tea.png",
      "/assets/images/in-other-words.png"
    ]
  },
  {
    id: 2,
    name: "Project TWO",
    description: "Blah 2 description description 2 blah blah 2 description description",
    technologies: "Project # 2 Technology A, technology B, and technology C",
    screenshots: [
      "/assets/images/in-other-words.png",
      "/assets/images/mean-tea.png"
    ]
  }
]
