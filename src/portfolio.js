/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bakshi Vaishvik",
  title: "Hey everyone, I'm VAISHVIK",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18QgQ4vKNB0IeiAvmGkY7MCUnd-qDTknB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bakshivaishvik",
  linkedin: "https://www.linkedin.com/in/bakshi-vaishvik-b4b061327/",
  gmail: "bakshivaishvik@gmail.com",
  gitlab: "https://gitlab.com/bakshivaishvik",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  // Programming Languages
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "Dart",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "C/C++",
    fontAwesomeClassname: "fas fa-cogs"
  },

  // Mobile Development
  {
    skillName: "Flutter",
    fontAwesomeClassname: "fas fa-mobile-alt"
  },
  {
    skillName: "Apache Cordova",
    fontAwesomeClassname: "fas fa-plug"
  },

  // Web Development
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "Flask",
    fontAwesomeClassname: "fas fa-flask"
  },

  // Cloud & Databases
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-leaf" // Not official, but often used
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },

  // AI/ML
  {
    skillName: "TensorFlow",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "Computer Vision",
    fontAwesomeClassname: "fas fa-eye"
  },
  {
    skillName: "Natural Language Processing",
    fontAwesomeClassname: "fas fa-language"
  },

  // Tools
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "GitHub",
    fontAwesomeClassname: "fab fa-github"
  },
  {
    skillName: "VS Code",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Android Studio",
    fontAwesomeClassname: "fas fa-android"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vasavi College of Engineering",
      logo: require("./assets/images/vlogo.gif"),
      subHeader: "Bachelor of technology in Computer Science and Engineering",
      duration: "september 2023 - may 2027",
      desc: "I’m currently pursuing my undergraduate studies at vasavi college of engineering, a reputed institution located in Hyderabad,Telangana, known for its strong academic culture and emphasis on innovation. The college offers a dynamic learning environment with a focus on practical application, research, and interdisciplinary collaboration. It has provided me with opportunities to participate in national-level hackathons, coding competitions, and real-world project development, shaping me into a well-rounded and industry-ready professional.",
      descBullets: [
        "Participated in various hackathons and coding competitions",
        "Engaged in real-world project development",
        "Emphasis on practical application and research"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true ,// Set false to hide this section, defaults to true
  githubConvertedToken: 'WU9VUiBHSVRIVUIgVE9LRU4=',
  githubUserName: "bakshivaishvik", // Replace with your GitHub username
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME projects that I've worked on",
  projects: [
    {
      image: require("./assets/images/EDUSPHERE_DP.png"),
      projectName: "EDU-SPHERE",
      projectDesc: "EduSphere: AI-Powered Learning & Roadmap Generation, educational content generation , an interactive 3D tutor for deeper learning	and an concentration analysis tool using eye-tracking.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/bakshivaishvik/EDU-SPHERE"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/geopic.jpg"),
      projectName: "GeoTracker",
      projectDesc: "GeoAttend: Geolocation-Based Attendance Tracking with Face Recognition",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/bakshivaishvik/MYsihproj"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Runner up at INNOVASIA 2k24",
      subtitle:
        "was adjudged as the Runner up at INNOVASIA 2k24 in the smart automation track, a National Level Hackathon organized by Vasavi College of Engineering.",
      image: require("./assets/images/innovasia_pic.jpeg"),
      imageAlt: "pic",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Z6JgZmXCdPXMDywD71YhxJzVJWLNSMg0/view?usp=drive_link"
        },
        {
          name: "image",
          url: "https://drive.google.com/file/d/1TbCyKiMhmuGXwWR5chp9bqTmLTl4bZXf/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Finalist at TechXcelerate 2025",
      subtitle:
        "was selected as a finalist at TechXcelerate 2025, a National Level Hackathon organized by BITS Pilani, Hyderabad Campus.",
      image: require("./assets/images/cert_bits.png"),
      imageAlt: "letter of appriciation",
      footerLink: [
        {
          name: "certification",
          url: "https://drive.google.com/file/d/1bLFZV15vHMUhWmfmZu0v8y9kf8mPBIXd/view?usp=drive_link"
        }
      ]
    },

    {
      title: "top 5% NPTEL Learner in Introduction to database systems",
      subtitle: "Completed Certifcation from IIT-M for IDBMS",
      image: require("./assets/images/nptel.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1Tzfasi4ughb58b2FbzrCMkH5U3ntxXd8/view?usp=drive_link"},

      ]
    },
    {
      title: "Flutter Developer Bootcamp",
      subtitle: "Completed Flutter Developer Bootcamp from Udemy",
      
      image: require("./assets/images/udemy.png"),
      imageAlt: "udemy",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1sffUpapO9v2U8OYH46O1Xb13YpamyE9f/view?usp=drive_link"},

      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",


  // Please Provide with Your Podcast embeded Link
  display: false// Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9848295758",
  email_address: "bakshivaishvik@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
