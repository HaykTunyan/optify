import React from 'react';
import { Img } from 'react-image';
const { REACT_APP_API_ROOT } = process.env;
const makeUrl = (sources) => sources.map((src) => (!!src ? `${REACT_APP_API_ROOT}/${src}` : null));

// use Dynamic component to handle urls provided by back-end
const Dynamic = ({ src, fb1, fb2, alt = '', ...props }) => (
  <Img src={makeUrl([src + fb1, fb2])} alt={alt} {...props} />
);

// use ImageStatic to handle image urls local/absolute ...
const Static = ({ src, alt = '', ...props }) => {
  return src && <Img src={src} alt={alt} {...props} />;
};

const Image = { Static, Dynamic };
export default Image;
