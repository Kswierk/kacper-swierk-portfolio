import React from "react"
import obliczmakro from "../../assets/images/obliczmakro.jpg"

export const outSideSvg = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    // xmlns="http://www.w3.org/1999/xlink"
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
    title: "Daily Calories Intake Calculator",
    description:
      "Provide some of your body parameters to calculate your daily calories intake. BMR calc also counts your macronutrients depending on your goals. Also it shows your BMI and ideal body weight based on most efficient formulas",
    technologies: ["JavaScript", "SCSS", "RWD"],
    githubLink: "https://github.com/Kswierk/BMR-calc",
    outsideLink: "https://kswierk.github.io/BMR-calc/",
    src: obliczmakro,
    left: false,
  },
  {
    title: "projekt drugi",
    description:
      " facilisizzle izzle, crunk izzle, ass. Vestibulum rizzle ipsum primizzle in break it down orci luctizzle et ultrices fo shizzle my nizzle shiznit Curae",
    technologies: ["gatsby.js", "css", "html"],
    githubLink: "#",
    outsideLink: "#",
    left: true,
  },
]
