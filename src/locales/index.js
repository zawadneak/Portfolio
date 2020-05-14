/* eslint-disable global-require */
import intl from 'react-intl-universal';

const locales = {
  'pt-BR': require('./pt-BR.json'),
  'en-US': require('./en-US.json'),
};

const Translation = () => {
  console.log(`Your language: ${navigator.language}`);
  const currentLocale = navigator.language === 'pt-BR' ? 'pt-BR' : 'en-US';

  return intl.init({
    currentLocale,
    locales,
  });
};

export default Translation;
