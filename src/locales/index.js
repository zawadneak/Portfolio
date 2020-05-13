/* eslint-disable global-require */
import intl from 'react-intl-universal';

const locales = {
  'pt-BR': require('./pt-BR.json'),
  'en-US': require('./en-US.json'),
};

const Translation = () => {
  const currentLocale = locales[navigator.language]
    ? navigator.language
    : 'pt-BR';

  return intl.init({
    currentLocale,
    locales,
  });
};

export default Translation;
