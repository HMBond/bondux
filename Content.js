export const content = [
  {
    name: "Intro",
    url: "/",
    page: "home",
    introduction: [
      { id: 1, string: "Hi, I'm Mike Bond..." },
      {
        id: 2,
        string:
          "I'm a Frontend Developer, an Interaction and Experience Designer and musician...",
        link: { url: "/skills", label: ">>> to skills >>>" }
      },
      {
        id: 3,
        string:
          "I love how technology can provoke emotions and make people connect in many different ways...",
        link: { url: "/blog", label: ">>> to blog >>>" }
      },
      {
        id: 4,
        string: "I'm a freelancer and eager to work for you as a developer..."
      },
      {
        id: 5,
        string:
          "...or if you like to learn overtone singing, don't wait to contact me!",
        link: { url: "/contact", label: ">>> to contact >>>" }
      }
    ]
  },
  { name: "Blog", url: "/blog" },
  { name: "Skills", url: "/skills" },
  { name: "Hire Me!", url: "/contact", page: "contact" }
];

export default content;
