export const getLocale = (locale) => {
  if (locale.includes('-')) {
    return locale.substring(0, locale.indexOf('-'));
  } else return locale;
}