import React, { FC } from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const OrdersWidget: FC<Props> = ({ children }) => (
  <section className="catra-py-16">{children}</section>
);

export default OrdersWidget;
