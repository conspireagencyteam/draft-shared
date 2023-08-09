import React, { FC } from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const OrderItem: FC<Props> = ({ children }) => (
  <tr className="cadoi-border-b cadoi-border-primary-border">{children}</tr>
);

export default OrderItem;
