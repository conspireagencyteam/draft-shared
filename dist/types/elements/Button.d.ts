import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode | ReactNode[] | string;
}
declare const Button: FC<Props>;
export default Button;
export type { Props };
