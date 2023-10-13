import { AnchorHTMLAttributes, FC, ReactNode } from 'react';
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode | ReactNode[] | string;
}
declare const ButtonLink: FC<Props>;
export default ButtonLink;
export type { Props };
