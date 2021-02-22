import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'yuwen | developer', // e.g: 'Name | Developer'
  lang: 'zh', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '嗨，我是',
  name: '邱郁文',
  secondName: 'yuwen-c',
  subtitle: '——前端網頁工程師',
  cta: '了解更多',
};

// ABOUT DATA
export const aboutData = {
  img: '2529.jpg',
  paragraphOne:
    '雖然曾在幾個不同領域間轉換人生跑道，但始終離不開語言－在專利事務所工作10年，也曾在貿易公司擔任採購、國貿 <法律語言→銀行語言>，還因為嗜好學了西班牙語<英文→西班牙文>，之後開始對寫程式感到有興趣，便從人類語言一頭栽進電腦語言的世界。',
  paragraphTwo:
    '專長是利用react框架，搭配express server、postgreSQL，打造包含前後端及資料庫的完整web app。',
  paragraphThree:
    '對我來說，把一開始的發想，從零開始，建造出完整作品，將想法實現，是身為前端工程師的一大成就感。',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Dieta_nutrition.png',
    title: 'Dieta - 你最好的減脂幫手',
    info: '使用者輸入資料，計算出所需熱量，並透過本週減重結果來決定下週如何調整。',
    info2:
      '利用React.js框架設計的適合手機/ 桌機的前端網站，搭配Express Server，利用RestfulAPI完成前後端相連。使用者資料如姓名、加密的密碼、體重，都儲存在PostgreSQL資料庫。前端網站部署到Netlify，後端Server及資料庫部署到Heroku。使用react-i18next使網站可切換中/英文。',
    url: 'https://yuwen-dieta.netlify.app/',
    repo: 'https://github.com/yuwen-c/dieta', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'worldtime-luxon_screenshot.png',
    title: 'worldtime - 世界時間查詢系統',
    info:
      '開啟網頁時，頁面會自動偵測使用者城市及時間顯示在畫面上，當使用者輸入城市名稱，下拉選單會出現自動完成選項，點選送出後，該時區時間即會顯示於畫面。可藉由拖曳、或直接點選來排序不同時區。',
    info2:
      '利用React.js框架及tachyons library設計出適合手機/ 桌機的前端網站，加入drag-and-drop拖曳功能，手機操作更直覺。使用Luxon達到即時抓取不同時區時間的功能。網站部署到Netlify。',
    url: 'https://yuwen-worldtime-luxon.netlify.app/',
    repo: 'https://github.com/yuwen-c/worldtime-luxon', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-computer_screenshot.png',
    title: 'smartcomputer - 偵測人臉',
    info: 'google新垣結衣的照片，取得圖片網址後輸入，App會把人臉框出。多張人臉也適用。',
    info2:
      '前端網站使用React.js框架，後端則是利用Express.js，利用RestfulAPI串接。串接Clarifai API 完成人臉辨識功能。使用者姓名、加密密碼儲存在PostgreSQL，透過knex連接到server。前端網站部署到Netlify，後端server及資料庫部署到Heroku。',
    url: 'https://yuwen-smartcomputer.netlify.app/',
    repo: 'https://github.com/yuwen-c/smartcomputer', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I am looking for an potential opportunity!',
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
