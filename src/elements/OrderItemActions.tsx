import React, { FC } from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
  headingCol4?: string;
}

const OrderItemActions: FC<Props> = ({ children, headingCol4 }) => (
  <td
    className="CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-justify-end"
    role="cell"
    data-label={headingCol4}
  >
    {children}
  </td>
);

export default OrderItemActions;
