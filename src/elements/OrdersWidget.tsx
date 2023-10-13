import React, { FC } from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const OrdersWidget: FC<Props> = ({ children }) => (
  <section className="cadoi-py-16">{children}</section>
);

export default OrdersWidget;
export type { Props };
