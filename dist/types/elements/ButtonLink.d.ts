import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode | ReactNode[];
}
declare const ButtonLink: FC<Props>;
export default ButtonLink;
