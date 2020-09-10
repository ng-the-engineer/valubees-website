import React from 'react';
import logo from './logo.svg';
import './App.css';
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <div>
      <button onClick={() => changeLanguage('zhHK')}>中文</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <h1>{t('Welcome to React')}</h1>
    </div>
  )
}

export default withNamespaces()(App);
