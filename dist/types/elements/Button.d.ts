import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | ReactNode[];
}
declare const Button: FC<ButtonProps>;
export default Button;
