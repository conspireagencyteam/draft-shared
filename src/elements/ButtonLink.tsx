import { AnchorHTMLAttributes, FC, ReactNode } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode | ReactNode[];
}

const ButtonLink: FC<Props> = ({ children, ...props }) => {
  const { className, ...anchorProps } = { ...props };
  return (
    <a
      {...anchorProps}
      className={`${className} CadoiButton CadoiButton--primary cadoi-py-2 cadoi-px-3 cadoi-inline-flex cadoi-justify-center cadoi-items-center cadoi-gap-2 cadoi-rounded-md cadoi-border cadoi-border-transparent cadoi-font-semibold cadoi-bg-primary-btn-bg cadoi-text-primary-btn-text cadoi-no-underline hover:cadoi-bg-primary-btn-bg-hover focus:cadoi-outline-none focus:cadoi-ring-2 focus:cadoi-ring-primary-btn-bg focus:cadoi-ring-offset-2 cadoi-transition-all cadoi-text-sm cadoi-h-9 hover:cadoi-text-primary-btn-text-hover disabled:cadoi-opacity-75 disabled:cadoi-cursor-not-allowed disabled:cadoi-bg-primary-btn-bg disabled:cadoi-text-primary-btn-text`}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
