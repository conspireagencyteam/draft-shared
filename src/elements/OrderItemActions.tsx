import React, { FC } from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const OrderItemActions: FC<Props> = ({ children }) => (
  <td
    className="cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-justify-end"
    role="cell"
  >
    {children}
  </td>
);

export default OrderItemActions;
