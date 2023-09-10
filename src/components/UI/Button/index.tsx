import clsx from 'clsx';

import styles from './styles.module.scss';

interface IButtonProps {
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  children
}: IButtonProps) => (
  <button
    className={clsx(styles.button, className, {
      [styles.disabled]: disabled
    })}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
