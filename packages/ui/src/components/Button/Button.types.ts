export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  round?: boolean;
  plain?: boolean;
  text?: boolean;
  bg?: boolean;
  link?: boolean;
  loading?: boolean;
  loadingIcon?: string;
  icon?: string;
  circle?: boolean;
  autoInsertSpace?: boolean;
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void;
}
