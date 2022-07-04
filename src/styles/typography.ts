import { BaseFonts } from './types';

const h1Bold = {
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '40px',
  letterSpacing: '-0.5px',
};

const h1Medium = {
  ...h1Bold,
  fontWeight: 500,
};

const h1Regular = {
  ...h1Bold,
  fontWeight: 400,
};

const h2Bold = {
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: '-0.25px',
};

const h2Medium = {
  ...h2Bold,
  fontWeight: 500,
};

const h2Regular = {
  ...h2Bold,
  fontWeight: 400,
};

const h3Bold = {
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '26px',
  letterSpacing: '-0.25px',
};

const h3Medium = {
  ...h3Bold,
  fontWeight: 500,
};

const h3Regular = {
  ...h3Bold,
  fontWeight: 400,
};

const body1Bold = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '24px',
};

const body1Medium = {
  ...body1Bold,
  fontWeight: 500,
};

const body1Regular = {
  ...body1Bold,
  fontWeight: 400,
};

const body2Bold = {
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '20px',
};

const body2Medium = {
  ...body2Bold,
  fontWeight: 500,
};

const body2Regular = {
  ...body2Bold,
  fontWeight: 400,
};

const body3Bold = {
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '18px',
};

const body3Medium = {
  ...body3Bold,
  fontWeight: 500,
};

const body3Regular = {
  ...body3Bold,
  fontWeight: 400,
};

let typography: {
  [key: string]: BaseFonts;
} = {};

typography = {
  h1Bold,
  h1Medium,
  h1Regular,
  h2Bold,
  h2Medium,
  h2Regular,
  h3Bold,
  h3Medium,
  h3Regular,
  body1Bold,
  body1Medium,
  body1Regular,
  body2Bold,
  body2Medium,
  body2Regular,
  body3Bold,
  body3Medium,
  body3Regular,
};

export default typography;
