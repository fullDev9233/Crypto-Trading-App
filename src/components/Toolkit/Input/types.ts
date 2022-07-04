import { InputHTMLAttributes } from 'react';

export interface InputCallbackProps {
  name: string;
  value: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  name: string;
  value: string | number;
  placeholder?: string;
  hint?: string;
  isError?: boolean;
  error?: string;
  cbHandler?: (data: InputCallbackProps) => void;
  width?: number;
  height?: number;
  bg?: string;
  radius?: number;
  isIcon?: boolean;
}
