import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'yuwen | web developer', // e.g: 'Name | Developer'
  lang: 'zh', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
  metaImg: 'portfolio_cover.png',
};

// HERO DATA
export const heroData = {
  title: '嗨，我是',
  name: '邱郁文',
  secondName: 'yuwen-c',
  subtitle: '——網頁工程師',
  cta: '了解更多',
};

// ABOUT DATA
export const aboutData = {
  img: '2529_1.jpg',
  paragraphOne:
    '對新事物好奇，喜歡從做中學習，行動力強。喜歡從不同角度看問題，追求不斷成長的人生。',
  paragraphTwo: '自學程式的前端工程師，有十年專利背景。希望能夠加入不斷成長的團隊，一起進步。',
  paragraphThree:
    '專長是利用react框架，搭配express server、postgreSQL，打造包含前後端及資料庫的完整single page web app。',
  resume: 'https://yuwen-files.netlify.app/Resume_YuWen.pdf', // if no resume, the button will not show up
}; //* *** change url after deployment */

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smart-computer_screenshot.png',
    title: 'smartcomputer - AI人臉偵測系統',
    info: '輸入.jpg結尾的圖片網址，系統會偵測人臉並將範圍框出。多人也適用。',
    info2:
      '使用React.js框架，搭配Express Server，利用RestfulAPI完成前後端相連。後端串接Clarifai API 達到AI偵測人臉功能，API key儲存於環境變數，不上傳github。使用者密碼利用bcrypt加密，儲存於PostgreSQL資料庫，以knex與server相接。',
    url: 'https://yuwen-smartcomputer.netlify.app/',
    repo: 'https://github.com/yuwen-c/smartcomputer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Dieta_nutrition.png',
    title: 'Dieta - 減重熱量規劃系統',
    info: '輸入資料，計算所需熱量，並透過本週減重結果來決定下週如何調整。',
    info2:
      '使用React.js框架設計出符合RWD的前端網站，利用RestfulAPI連接到Express Server。使用者密碼以bcrypt加密，儲存於PostgreSQL資料庫，利用knex與server相接。利用React-i18next達到多國語系功能。前端部署到Netlify，後端Server及資料庫部署到Heroku。',
    url: 'https://yuwen-dieta.netlify.app/',
    repo: 'https://github.com/yuwen-c/dieta', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'worldtime-luxon_screenshot.png',
    title: 'worldtime - 世界時間查詢',
    info:
      '輸入城市名稱，下拉選單會出現自動完成選項。可一次顯示多時區，並利用拖曳、或直接點選來排序，手機操作更直覺。',
    info2:
      '使用React.js框架搭配tachyons設計出符合RWD的網站。利用Luxon即時抓取不同時區時間。網站部署到Netlify。',
    url: 'https://yuwen-worldtime-luxon.netlify.app/',
    repo: 'https://github.com/yuwen-c/worldtime-luxon', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I am looking for an opportunity!',
  btn: "Let's talk",
  email: 'yuwen.azulejos@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yu-wen-chiu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yuwen-c',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
