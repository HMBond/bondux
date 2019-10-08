export const content = [
  {
    name: "Intro",
    url: "/",
    page: "home",
    introduction: [
      { id: 1, text: "Hi, I'm Mike Bond!" },
      {
        id: 2,
        text: "I'm a ",
        link: { url: "/skills", label: "Frontend Developer,.." }
      },
      {
        id: 3,
        text: "...an Interaction and ",
        link: { url: "/skills", label: "Experience Designer..." }
      },
      {
        id: 4,
        text: "...and ",
        link: { url: "/skills", label: "musician." }
      },
      {
        id: 5,
        text: "I love how technology can ",
        link: { url: "/blog", label: "provoke emotions..." }
      },
      {
        id: 6,
        text: "...and connects people ",
        link: { url: "/blog", label: "socially." }
      },
      {
        id: 7,
        text: "I'm a freelancer and ",
        link: { url: "/contact", label: "eager to work for you!" }
      },
      {
        id: 8,
        text: "...or if you like to learn ",
        link: { url: "/blog", label: "overtone singing,.." }
      },
      {
        id: 9,
        text: "...please ",
        link: { url: "/contact", label: "contact me!" }
      }
    ]
  },
  { name: "Blog", url: "/blog" },
  { name: "Skills", url: "/skills" },
  { name: "Hire Me!", url: "/contact", page: "contact" }
];

export default content;
