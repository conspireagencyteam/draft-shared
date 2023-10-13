import { FC } from 'react';
interface Props {
    orderName: string;
    orderCreatedAt: string;
    orderTotalNetAmount: string | React.ReactNode | React.ReactNode[];
    headingCol1?: string;
    headingCol2?: string;
    headingCol3?: string;
}
declare const OrderItemInfo: FC<Props>;
export default OrderItemInfo;
