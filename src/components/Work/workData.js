import React from "react"
import obliczmakro from "../../images/obliczmakro.jpg"
import bodyfix from "../../images/bodyfix.png"
import pomodorro from "../../images/pomodorro.png"

export const outSideSvg = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    fontWeight="bold"
    viewBox="0 0 16 16"
  >
    <path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"></path>
    <path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"></path>
  </svg>
)

export const githubSvg = (
  <svg
    id="Bold"
    enableBackground="new 0 0 24 24"
    height="23"
    viewBox="0 0 24 24"
    width="23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
  </svg>
)

export const projects = [
  {
    title: "Bodyfix",
    description:
      "It helps to improve the comfort and quality of your work through education and selection of appropriate exercises for people working most of the day on the computer",
    technologies: ["Typescript", "React", "Redux"],
    githubLink: "https://github.com/Kswierk/bodyfix",
    outsideLink: "https://adoring-euclid-a00646.netlify.app/",
    src: bodyfix,

    left: false,
  },
  {
    title: "BMR Calculator",
    description:
      "An application for calculating the caloric demand based on the entered data. It also allows you to know many other statistics about your body.",
    technologies: ["Typescript", "SCSS", "RWD"],
    githubLink: "https://github.com/Kswierk/BMR-calc",
    outsideLink: "https://kswierk.github.io/BMR-calc/",
    src: obliczmakro,
    left: true,
  },
  {
    title: "Pomodorro",
    description:
      "Pomodorro is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding.",
    technologies: ["React", "Redux", "Firebase", "Styled Components"],
    githubLink: "https://github.com/Kswierk/pomodoro-app-react",
    outsideLink: "https://compassionate-torvalds-ca51e1.netlify.app/",
    src: pomodorro,

    left: false,
  },
]
