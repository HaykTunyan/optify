import validators from './validators';
import { THEME } from 'common';
const { numeric, capital, whitespace } = validators;

export const formatBreakpoints = (breakpoints) => {
  const arrayOfValues = Object.values(breakpoints);
  const arrayOfKeys = Object.keys(breakpoints);
  let formattedBps = [];
  arrayOfValues.forEach(({ min, max }, index) => {
    let singleBp = {};
    singleBp.min = min ? Number(min.substring(0, min.length - 2)) : null;
    singleBp.max = max ? Number(max.substring(0, max.length - 2)) : null;
    singleBp.key = arrayOfKeys[index];
    formattedBps.push(singleBp);
  });

  return formattedBps;
};

export const checkPassword = (pass) => {
  const capitalTest = capital.test(pass);
  const numericTest = numeric.test(pass);
  const whitespaceTest = !whitespace.test(pass);

  return {
    isValid: capitalTest && numericTest && whitespaceTest,
    capital: capitalTest,
    numeric: numericTest,
    space: whitespaceTest,
  };
};

export const checkExtension = ({ fileName, validExtensions = ['.xlsx', '.xls', '.csv'] }) => {
  const fileExt = fileName.substring(fileName.lastIndexOf('.'));
  return validExtensions.includes(fileExt);
};

export const getPathByBreakpoint = ({ breakpoint, srcSet }) => {
  switch (breakpoint) {
    case THEME.medias.xs.key:
      return srcSet.xs;
    case THEME.medias.sm.key:
      return srcSet.sm;
    case THEME.medias.md.key:
      return srcSet.md;
    case THEME.medias.lg.key:
      return srcSet.lg;
    case THEME.medias.xl.key:
      return srcSet.xl;
    default:
      return null;
  }
};

const common = {
  formatBreakpoints,
  checkPassword,
  checkExtension,
  getPathByBreakpoint,
};

export default common;
