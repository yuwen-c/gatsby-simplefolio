import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
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
  img: 'IMG_9973.jpeg',
  paragraphOne:
    '在專利界打滾10年，後來因為具備西班牙語能力改行從事國貿和採購，之後把目標從人類的法律、商業語言轉向電腦語言，挑戰工程師的世界。動機其實就在一念之間：我想試試看——看看自己有沒有辦法了解這個外星文字。',
  paragraphTwo:
    '電腦語言的世界浩瀚無比，一開始有什麼學什麼，但摸不著頭緒，後來經過多方搜尋後，發現前端工程師對轉行自學者最為友善，於是立定目標，從這邊開始一步步成長。',
  paragraphThree:
    '對我來說，把一開始的發想，從零開始，建造出完整作品，將想法實現，是身為前端工程師的一大成就感。',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Dieta - 你最好的減脂幫手',
    info: '使用者輸入資料，計算出所需熱量，並透過本週減重結果來決定下週如何調整。',
    info2:
      '利用React.js框架設計的適合手機/ 桌機的前端網站，搭配Express Server，利用RestfulAPI完成前後端相連。使用者資料如姓名、加密的密碼、體重，都儲存在PostgreSQL資料庫。前端網站部署到Netlify，後端Server及資料庫部署到Heroku。使用react-i18next使網站可切換中/英文。',
    url: 'https://yuwen-c.github.io/dieta/',
    repo: 'https://github.com/yuwen-c/dieta', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
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
    img: 'project.jpg',
    title: 'smartcomputer - 人臉辨識網',
    info: 'google新垣結衣的照片，取得圖片網址後輸入，App會把人臉框出。多張人臉也適用。',
    info2:
      '前端網站使用React.js框架，後端則是利用Express.js，利用RestfulAPI串接。串接Clarifai API 完成人臉辨識功能。使用者姓名、加密密碼儲存在PostgreSQL，透過knex連接到server。前端網站部署到Netlify，後端server及資料庫部署到Heroku。',
    url: '',
    repo: 'https://github.com/yuwen-c/smartcomputer', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
