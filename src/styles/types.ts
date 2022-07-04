export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
};

export type Colors = {
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  overlay: string;
  red: string;
  green: string;
};

export type Shadows = {
  shadow00: string;
  shadow01: string;
  shadow02: string;
  shadow03: string;
  shadow04: string;
  shadow06: string;
  shadow08: string;
  shadow09: string;
  shadow12: string;
  shadow16: string;
  shadow24: string;
};

export type BaseFonts = {
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontStyle?: string;
  textDecoration?: string;
  textTransform?: string;
};
