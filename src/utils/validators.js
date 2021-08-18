import emojiRegex from 'emoji-regex';

export const validators = {
  //eslint-disable-next-line
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  alphabetical: /^[A-Za-z]+$/,
  name: /^[a-z ,.'-]+$/i,
  //eslint-disable-next-line
  url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  capital: /[A-Z]/,
  numeric: /[0-9]/,
  whitespace: /\s/,
  emoji: emojiRegex(),
};

export default validators;
