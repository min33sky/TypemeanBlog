import React from 'react';
import { RecoilRoot } from 'recoil';
import './src/styles/global.css';
import './src/styles/site.css';
require('prismjs/themes/prism-tomorrow.css');

export const wrapPageElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};
