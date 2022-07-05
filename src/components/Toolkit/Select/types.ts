export interface OptionProps {
  value: string | number;
  label: string | number;
}

export interface SelectProps {
  id?: string;
  label?: string;
  value: string | number;
  options: OptionProps[];
  hint?: string;
  isError?: boolean;
  isDivider?: boolean;
  error?: string;
  hoverColor?: string;
  disabled?: boolean;
  cbHandler: (id: number) => void;
  width?: number;
  height?: number;
  scrollHeight?: number;
  bg?: string;
  radius?: number;
}
