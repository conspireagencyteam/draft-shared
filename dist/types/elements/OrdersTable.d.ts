import { FC, TableHTMLAttributes } from 'react';
import { JustifyContent, BlockWidth } from 'src/types';
interface Props extends TableHTMLAttributes<HTMLTableElement> {
    children: React.ReactNode | React.ReactNode[];
    blockDistribution: JustifyContent;
    blockWidth: BlockWidth;
}
declare const OrdersTable: FC<Props>;
export default OrdersTable;
