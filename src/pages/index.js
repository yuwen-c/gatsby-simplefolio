import React from 'react';
import { Helmet } from 'react-helmet';
import metaImgUrl from '../components/Image/metaImgUrl';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, metaImg } = headData;
  const imageUrl = `https://yuwen-portfolio.netlify.app${metaImgUrl(metaImg)}`;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <App />
    </>
  );
};
