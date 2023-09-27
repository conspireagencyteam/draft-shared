import { FC } from 'react';

interface Props {
  orderName: string;
  orderCreatedAt: string;
  orderTotalNetAmount: string | React.ReactNode | React.ReactNode[];
}

const OrderItemInfo: FC<Props> = ({
  orderName,
  orderCreatedAt,
  orderTotalNetAmount,
}) => {
  return (
    <>
      <th
        className="CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-whitespace-nowrap cadoi-font-medium cadoi-text-primary-text cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left"
        scope="row"
        data-label="Invoice"
      >
        {orderName}
      </th>
      <td
        className="CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left"
        role="cell"
        data-label="Date"
      >
        {orderCreatedAt}
      </td>
      <td
        className="CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left"
        role="cell"
        data-label="Total"
      >
        {orderTotalNetAmount}
      </td>
    </>
  );
};

export default OrderItemInfo;
