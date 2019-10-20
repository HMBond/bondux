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
  {
    name: "Blog",
    url: "/blog",
    blogPosts: [
      {
        id: 1,
        category: "example",
        title: "Blogpost",
        summary:
          "Hello, this is the introduction of a blogpost. The text goes here like a summary. Lets talk about the subject, but not yet in dept. So the reader gets interested!",
        paragraphs: [
          {
            id: 1,
            text:
              "In mathematics, two quantities are in the silver ratio (also silver mean or silver constant) if the ratio of the sum of the smaller and twice the larger of those quantities, to the larger quantity, is the same as the ratio of the larger one to the smaller one (see below). This defines the silver ratio as an irrational mathematical constant, whose value of one plus the square root of 2 is approximately 2.4142135623. Its name is an allusion to the golden ratio; analogously to the way the golden ratio is the limiting ratio of consecutive Fibonacci numbers, the silver ratio is the limiting ratio of consecutive Pell numbers. The silver ratio is denoted by δS.",
            imgUrl: "../static/image2.jpg"
          },
          {
            id: 2,
            text:
              "Los matemáticos han estudiado la proporción de plata desde el tiempo de los griegos (aunque tal vez sin darle un nombre especial hasta hace poco) debido a sus conexiones con la raíz cuadrada de 2, sus convergentes, los números cuadrados triangulares y otros números similares.",
            imgUrl: "../static/image3.jpg"
          }
        ],
        topImgUrl: "../static/image4.jpg",
        topImgRoundness: "50%",
        imgUrls: ["../static/image2.jpg", "../static/image3.jpg"]
      }
    ]
  },
  { name: "Skills", url: "/skills" },
  { name: "Hire Me!", url: "/contact", page: "contact" }
];

export default content;
