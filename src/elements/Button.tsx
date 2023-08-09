import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const { className, ...buttonProps } = { ...props };
  return (
    <button
      {...buttonProps}
      className={`${className} CatraButton CatraButton--primary catra-py-2 catra-px-3 catra-inline-flex catra-justify-center catra-items-center catra-gap-2 catra-rounded-md catra-border catra-border-transparent catra-font-semibold catra-bg-primary-btn-bg catra-text-primary-btn-text hover:catra-bg-primary-btn-bg-hover focus:catra-outline-none focus:catra-ring-2 focus:catra-ring-primary-btn-bg focus:catra-ring-offset-2 catra-transition-all catra-text-sm catra-h-10 hover:catra-text-primary-btn-text-hover disabled:catra-opacity-75 disabled:catra-cursor-not-allowed disabled:catra-bg-primary-btn-bg disabled:catra-text-primary-btn-text`}
    >
      {children}
    </button>
  );
};

export default Button;
