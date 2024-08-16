export const ProjectData = [
  // {
  // title: "",
  // id: 0,
  // mediaList: [
  //   {
  //     type: "image",
  //     url: "",
  //     caption: "",
  //   },
  // ],
  // longDescription: "",
  // link: "",
  // githubLink: "",
  // technologies: [],
  // thumbnail: "",
  // shortDescription: "",
  // },
  {
    title: "Messaging App",
    id: 1,
    mediaList: [
      {
        type: "image",
        url: "/MessagingApp/MessagingAppChatroom.png",
        caption: "The Chatroom for the Messaging App in a Dark theme.",
      },
      {
        type: "image",
        url: "/MessagingApp/MessagingAppDirectMessage.png",
        caption:
          "Direct Messaging to a friend through sending a friend request via the users email.",
      },
      {
        type: "image",
        url: "/MessagingApp/MessagingAppUserProfile.png",
        caption:
          "The User Profile page allowing users to select a custom display name, or reset their password via email.",
      },
    ],
    longDescription:
      "Messaging App made with JavaScript + React, using Firebase Cloud Firestore for User Authentication, and managing the database. Users are able to send friend requests to other users via their email, which will send a real-time notification to the reciever allowing them to accept or ignore the friend request. Global and Direct messaging are supported through configuring the Firebase Cloud Firestore database to store all messages and user information. Incorporated Firebase Auth for account creation, sign-in, and password resetting capabilities through email. Users can choose to sign up with Google or create their own account with an email and password.",
    link: "https://palmercurrie.github.io/Messaging-App/",
    githubLink: "https://github.com/PalmerCurrie/Messaging-App",
    technologies: ["React", "JavaScript", "Firebase"],
    thumbnail: "/MessagingApp/MessagingAppFrontPage.png",
    shortDescription:
      "A messaging app with real-time global and direct messaging, and friend requests",
  },
  {
    title: "Shopping Cart",
    id: 2,
    mediaList: [
      {
        type: "image",
        url: "/ShoppingCart/ShopPage.png",
        caption:
          "The Shopping page, allowing users to select which items they want, and filter based on category.",
      },
      {
        type: "image",
        url: "/ShoppingCart/CheckoutPage.png",
        caption:
          "Checkout Page with a full cart, allowing users to adjust item quantities, remove items from the cart, or complete their purchase",
      },
      {
        type: "image",
        url: "/ShoppingCart/LandingPage.png",
        caption: "Landing page, welcoming users to the store.",
      },
    ],
    longDescription:
      "Made with JavaScript and React, utilizing the Fakestore API for real-time product information, the Shopping Cart app lets users browse through the shop catalog. Users are able to filter items based on categories, add and remove items from the cart, adjust item quanities, and complete their purchase via the checkout page.",
    link: "https://palmercurrie-shopping-cart.netlify.app/",
    githubLink: "https://github.com/PalmerCurrie/Shopping-Cart",
    technologies: ["React", "JavaScript", "Vite"],
    thumbnail: "/ShoppingCart/CheckoutPage.png",
    shortDescription: "A Shopping-Cart made with the Fake Store API",
  },
  {
    title: "NBA Wordle",
    id: 3,
    mediaList: [
      {
        type: "image",
        url: "/NBAWordle/GamePage.png",
        caption:
          "The Game Page of NBA Wordle, users can guess players and recieve responsive feedback based on the guessed players attributes.",
      },
      {
        type: "image",
        url: "/NBAWordle/HomePage.png",
        caption:
          "Home Page of NBA Wordle displaying information about the game, and how to play it.",
      },
      {
        type: "image",
        url: "/NBAWordle/AnswerPage.png",
        caption:
          "Answer Page of NBA Wordle displaying information about the player selected.",
      },
    ],
    longDescription:
      "A fun spinoff of the classic Wordle game featuring NBA Players. Developed using React, JavaScript and utilizing the BALLDONTLIE API, users are able to make predictions as to who they think the mystery player is, while recieving feedback based on the guessed players' attributes. Test your NBA knowledge and guessing skills by playing NBA Wordle! ",
    link: "https://palmercurrie-nba-wordle.netlify.app/",
    githubLink: "https://github.com/PalmerCurrie/NBA-Wordle",
    technologies: ["React", "JavaScript"],
    thumbnail: "/NBAWordle/GamePage.png",
    shortDescription: "NBA Wordle made with the BALLDONTLIE API",
  },
];
