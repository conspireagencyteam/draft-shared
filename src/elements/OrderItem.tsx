import React, { FC } from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const OrderItem: FC<Props> = ({ children }) => (
  <tr className="cadoi-border-b cadoi-border-primary-border cadoi-flex cadoi-flex-col cadoi-justify-start cadoi-w-full md:cadoi-table-row">
    {children}
  </tr>
);

export default OrderItem;
