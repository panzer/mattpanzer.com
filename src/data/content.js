import projects from "./projects";

export default {
  name: "Matthew Panzer",
  nickname: "Matt",
  dob: {
    string: "May 28, 1998",
    day: 28,
    month: 5,
    year: 1998
  },
  height: "5' 11\"",
  hometown: "Hewlett, NY",
  location: "Boston, MA",
  occupation: "Computer Engineering Student",
  interests: ["70s music", "autonomous cars", "mario kart", "Alpha Epsilon Pi"],
  skills: [
    "embedded software",
    "web development",
    "user-focused design",
    "machine learning",
    "git collaboration",
    "documentation",
    "iOS development"
  ],
  links: [
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/panzermatthew/"
    },
    {
      title: "github",
      url: "https://github.com/panzer"
    }
  ],
  blurb: "",
  education: [
    {
      level: "high school",
      name: "George W. Hewlett High School",
      location: "Hewlett, NY"
    },
    {
      level: "college",
      name: "Northeastern University",
      location: "Boston, MA",
      major: "Computer Engineering & Computer Science"
    }
  ],
  projects: projects,
  work: [
    {
      company: "EPAM Continuum",
      title: "Computer Engineer Intern",
      start_date: "July 2018",
      end_date: "December 2018"
    },
    {
      company: "Lawrence Woodmere Academy Summer Day",
      title: "Computer Specialist",
      start_date: "June 2017",
      end_date: "August 2017"
    }
  ]
};
