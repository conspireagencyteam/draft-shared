import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode | ReactNode[];
}
declare const Button: FC<ButtonProps>;
export default Button;
