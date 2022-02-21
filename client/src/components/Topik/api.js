const infos = [
    {
      name: "Work",
      id: "work",
      clas: "toprow1 work",
      resources: [
        {
          name: "Radisson Blu Hotel",
          id: "radisson",
          description:"It was the first job I've had, as a room service guy.",
          link: 'https://www.radissonhotels.com/en-us/hotels/radisson-collection-old-mill-belgrade',
          clas: "Pictures/404.jpeg"
        },
        {
          name: "Mama Shelter",
          id: "mama",
          description:
            "Started out as washing dishes, got to be a chef. First promotion ever!",
          link: 'https://mamashelter.com/'
        },
        {
          name: "Old London Pub",
          id: "london",
          description:
            "I've perfected grilling in this pub. Some call me the patty whisperer.",
          link: "http://www.oldlondonpub.rs/",
        },
        {
          name: "NCR",
          id: "ncr",
          description:
            "I was working on project for Dunkin Doughnuts. We were organising their hardware, software and finances trough Oracle programms and Crunchtime. Also I learned the wonders of working form home.",
          link: 'https://www.ncr.com/'
          
        },
        {
          name: "Otp Bank",
          id: "otp",
          description:
            "Worked in their contact center, now I've got the nerves of STEEL.",
          link: 'https://www.otpbanka.rs/'
        }
      ]
    },
    {
      name: "About",
      id: "about",
      clas: "toprow1 about",
      resources: [
        {
          name: "Why programming",
          id: "programming",
          description:
            "While in Civil engineering college, I had a python course. Realised writing code is more fun and more suited for me."
        },
        {
          name: "Why Javascript",
          id: "javascript",
          description:
            "Because I've realised that its the most fun language, I can be nerdy and artsy at the same time."
        },
        {
          name: "How did I start",
          id: "start",
          description:
            "I bought udemy course to become a full stack web developer by Angela Yu. I owe her bigtime, wonderfull course.",
          link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/'
        },
        {
          name: "How long am I studying",
          id: "journey",
          description:
            "From June 2021 and ongoing, I'm really into this."
        },
        {
          name: "Other interests",
          id: "interests",
          description:
            "Well I'm not a robot, I think, no promises. I practise boxing and Korean language."
        }
      ]
    },
    {
      name: "Skills",
      id: "skills",
      clas: "toprow1 skills",
      resources: [
        {
          name: "SQL",
          id: "data",
          description:
            "I can create my own database and save data someone leaves on my site using MongoDB, and secure it aswell. And if needed, mongoosejs, is not out of the picture at all."
        },
        {
          name: "Node.js",
          id: "nodejs",
          description:
            "Experienced in using Nodejs and Express to create a backend for my site."
        },
        {
          name: "Git",
          id: "git",
          description:
            "I am comfortable with Git features and am a stalker on Github, so take shelter."
        },
        {
          name: "React.js",
          id: "react",
          description:
            "I am very comfortable with working in React."
        },
        {
          name: "RESTfull Api's",
          id: "restfull",
          description:
            "I can implement api's with ease."
        },
        {
          name: "JSON",
          id: "json",
          description:
            "I can structure code withing JSON structuring rules."
        },
        {
          name: "Javascript",
          id: "javascript",
          description:
            "Well, one thing's for sure, this site has more functions than my social life."
        },
        {
          name: "JQuery",
          id: "jquery",
          description:
            "It's too good not to use. A lifesaving library"
        },
        {
          name: "Bootstrap",
          id: "bootstrap",
          description:
            "I'ts easy to impliment, but sometimes I prefer bulding something from scratch, just to be in full controll."
        },
        {
          name: "Responsiveness",
          id: "responsiveness",
          description:
            "It's 2022, every site should be responcive for every screen size."
        }
      ]
    }
  ];
  
  export function getResource({ resourceId, infoId }) {
    return infos
      .find(({ id }) => id === infoId)
      .resources.find(({ id }) => id === resourceId);
  }
  
  export function getInfo(infoId) {
    return infos.find(({ id }) => id === infoId);
  }
  
  export function getInfos() {
    return infos;
  }
  