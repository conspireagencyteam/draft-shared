import { FC } from 'react';
interface Props {
    orderName: string;
    orderCreatedAt: string;
    orderTotalNetAmount: string | React.ReactNode | React.ReactNode[];
}
declare const OrderItemInfo: FC<Props>;
export default OrderItemInfo;
