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
  occupation: "Software Engineer",
  interests: ["cooking", "70s music", "autonomous cars", "mario kart"],
  skills: [
    "engineering leadership",
    "web development",
    "embedded software",
    "user-focused engineering",
    "data science & ML",
    "git collaboration",
    "rock-solid documentation",
    "mobile development"
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
      company: "MORSE Corp.",
      title: "Software Engineer",
      start_date: "July 2019",
      end_date: "Present"
    },
    {
      company: "EPAM Continuum",
      title: "Computer Engineer Intern",
      start_date: "July 2018",
      end_date: "December 2018"
    },
  ]
};
