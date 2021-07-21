const express = require("express");
const server = express();

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Coding Courses",
    category: "Learning",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque nam, tempore perspiciatis.",
    url: "https://github.com/fernandademery",
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditation Workshop",
    category: "Mental Health",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque nam, tempore perspiciatis.",
    url: "https://github.com/fernandademery",
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Stay Fit",
    category: "Fitness & Wellness",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque nam, tempore perspiciatis.",
    url: "https://github.com/fernandademery",
  },
  {
    img: "https://image.flaticon.com/icons/svg/1941/1941126.svg",
    title: "Karaoke",
    category: "Fun with family",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque nam, tempore perspiciatis.",
    url: "https://github.com/fernandademery",
  },
  {
    img: "https://image.flaticon.com/icons/svg/2893/2893003.svg",
    title: "Gardening",
    category: "Nature",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque nam, tempore perspiciatis.",
    url: "https://github.com/fernandademery",
  },
  {
    img: "https://image.flaticon.com/icons/png/512/603/603541.png",
    title: "Painting course",
    category: "Arts & Creativity",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque nam, tempore perspiciatis.",
    url: "https://github.com/fernandademery",
  },
];

// Configure static files
server.use(express.static("public"));

// Configuring nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  express: server,
  noCache: true,
});

server.get("/", function (req, res) {
  const reversedIdeas = [...ideas].reverse();
  let lastIdeas = [];
  for (let idea of reversedIdeas) {
    if (lastIdeas.length < 2) {
      lastIdeas.push(idea);
    }
  }

  return res.render("index.html", { ideas: lastIdeas });
});

server.get("/ideas", function (req, res) {
  const reversedIdeas = [...ideas].reverse();
  return res.render("ideas.html", { ideas: reversedIdeas });
});

server.listen(3000);
