const getSearchParam = ({ search, key }) => {
  try {
    const urlParams = new URLSearchParams(search);
    const keyValue = urlParams.get(key);
    return keyValue;
  } catch (err) {
    return null;
  }
};

const setSearchParam = ({ search, key, value }) => {
  try {
    const urlParams = new URLSearchParams(search);
    urlParams.set(key, value);
    return urlParams.toString();
  } catch (err) {
    return null;
  }
};

const setSearchParams = ({ search, params }) => {
  try {
    const urlParams = new URLSearchParams(search);
    params.forEach((pm) => urlParams.set(pm.key, pm.value));
    return urlParams.toString();
  } catch (err) {
    return null;
  }
};

const appendSearchParam = ({ search, key, value }) => {
  try {
    const urlParams = new URLSearchParams(search);
    urlParams.append(key, value);
    return urlParams.toString();
  } catch (err) {
    return null;
  }
};

const deleteSearchParam = ({ search, key }) => {
  try {
    const urlParams = new URLSearchParams(search);
    urlParams.delete(key);
    return urlParams.toString();
  } catch (err) {
    return null;
  }
};
const extractHostname = (url) => {
  let hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }

  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
};

const url = {
  getSearchParam,
  setSearchParam,
  setSearchParams,
  appendSearchParam,
  deleteSearchParam,
  extractHostname,
};

export default url;
