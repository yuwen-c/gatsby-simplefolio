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
  paragraphOne: '對新事物好奇，喜歡學習，擅長收集、整理資訊，行動力強。',
  paragraphTwo:
    '熟悉JavaScript ES6及React框架，了解Hooks、Redux，也有使用Node.js、Express.js的開發經驗，並熟悉git指令。',
  paragraphThree:
    '樂於和人合作、重視團隊氣氛，總是會站在不同角度看問題、試著理解對方的想法。欣賞規律、欣賞時間的累積，追求不斷成長的人生。',
  resume: 'https://yuwen-files.netlify.app/Resume_YuWen.pdf', // if no resume, the button will not show up
}; //* *** change url after deployment */

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'demoda-screenshot.png',
    title: 'demoda - 時尚購物網',
    info: '使用者可登入、瀏覽商品，並將商品加入購物車。',
    info2:
      '使用React.js框架及React Hooks，邏輯拆分更清楚，增加可讀性。以Redux作狀態管理，及Redux-Thunk處理非同步邏輯，也利用Reselect來避免觸發多餘 render，並使用Firebase authentication做到第三方登入，提升使用者體驗。',
    url: 'https://yuwen-demoda.netlify.app/',
    repo: 'https://github.com/yuwen-c/demoda/blob/master/README.md', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-computer_screenshot.png',
    title: 'smartcomputer - AI人臉偵測系統',
    info: '輸入.jpg結尾的圖片網址，系統會偵測人臉並將範圍框出。多人也適用。',
    info2:
      '串接Clarifai API 做到 AI 偵測人臉功能，並將API key儲存於環境變數，不上傳github，優化安全性。使用React.js框架，搭配Express Server，利用RestfulAPI完成前後端相連。使用PostgreSQL構建資料庫，儲存bcrypt加密密碼，並以knex與後端相接。前端部署到Netlify，後端及PostgreSQL資料庫部署到Heroku。',
    url: 'https://yuwen-smartcomputer.netlify.app/',
    repo: 'https://github.com/yuwen-c/smartcomputer/blob/master/README_Mandarin.md', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Dieta_nutrition.png',
    title: 'Dieta - 減重熱量規劃系統',
    info: '從自身減重經驗發想，解決重複計算所需熱量的不便。使用者輸入資料，計算所需熱量，並透過本週減重結果來決定下週如何調整。',
    info2:
      '實際上線一個月內達到使用人數31人。使用者每週回訪計算時，可從資料庫叫出上週資料，再加以編輯，提升體驗。表格也做成RWD響應式，方便使用者在手機查閱。使用React-i18next做出中英雙語系功能。',
    url: 'https://yuwen-dieta.netlify.app/',
    repo: 'https://github.com/yuwen-c/dieta/blob/master/README_Mandarin.md', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'worldtime-luxon_screenshot.png',
    title: 'worldtime - 世界時間查詢',
    info: '輸入城市名稱，下拉選單會出現自動完成選項。可一次顯示多時區，並利用拖曳、或直接點選來排序，手機操作更直覺。',
    info2:
      '使用React.js框架搭配tachyons設計出符合RWD的網站。利用Luxon即時抓取不同時區時間。網站部署到Netlify。',
    url: 'https://yuwen-worldtime-luxon.netlify.app/',
    repo: 'https://github.com/yuwen-c/worldtime-luxon/blob/master/README_Mandarin.md', // if no repo, the button will not show up
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
