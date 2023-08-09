import { FC } from 'react';
interface Props {
    orderLink: string;
    orderName: string;
    orderCreatedAt: string;
    orderTotalNetAmount: string;
}
declare const OrderItemInfo: FC<Props>;
export default OrderItemInfo;
