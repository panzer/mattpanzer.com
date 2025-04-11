import projects from "./projects";

export default {
  name: "Matthew Panzer",
  nickname: "Matt",
  dob: {
    string: "May 28, 1998",
    day: 28,
    month: 5,
    year: 1998,
  },
  height: "5' 11\"",
  hometown: "Hewlett, NY",
  location: "Boston, MA",
  occupation: "Software Engineer",
  interests: ["cooking", "kickball", "🍕emoji🥳", "video games"],
  skills: [
    "full-stack web development",
    "engineering leadership",
    "user-focused engineering",
    "embedded software",
    "data science & ML",
    "git collaboration",
    "rock-solid documentation",
    "mobile development",
  ],
  links: [
    {
      title: "linkedin",
      url: "https://www.linkedin.com/in/panzermatthew/",
    },
    {
      title: "github",
      url: "https://github.com/panzer",
    },
  ],
  blurb: "",
  education: [
    {
      level: "high school",
      name: "George W. Hewlett High School",
      location: "Hewlett, NY",
    },
    {
      level: "college",
      name: "Northeastern University",
      location: "Boston, MA",
      major: "Computer Engineering & Computer Science",
    },
  ],
  projects: projects,
  work: [
    {
      company: "EPAM Continuum",
      title: "Computer Engineer Intern",
      start_date: "July 2018",
      end_date: "December 2018",
    },
    {
      company: "MORSE Corp.",
      title: "Software Engineer",
      start_date: "July 2019",
      end_date: "November 2022",
    },
    {
      company: "Capital One",
      title: "Senior Software Engineer",
      start_date: "November 2022",
      end_date: "Present",
    },
  ],
};
