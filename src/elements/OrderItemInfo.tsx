import { FC } from 'react';

interface Props {
  orderName: string;
  orderCreatedAt: string;
  orderTotalNetAmount: string | React.ReactNode | React.ReactNode[];
  headingCol1?: string;
  headingCol2?: string;
  headingCol3?: string;
}

const OrderItemInfo: FC<Props> = ({
  orderName,
  orderCreatedAt,
  orderTotalNetAmount,
  headingCol1,
  headingCol2,
  headingCol3,
}) => {
  return (
    <>
      <td
        className="CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-whitespace-nowrap cadoi-font-medium cadoi-text-primary-text cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left"
        role="cell"
        data-label={headingCol1}
      >
        {orderName}
      </td>
      <td
        className="CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left"
        role="cell"
        data-label={headingCol2}
      >
        {orderCreatedAt}
      </td>
      <td
        className="CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left"
        role="cell"
        data-label={headingCol3}
      >
        {orderTotalNetAmount}
      </td>
    </>
  );
};

export default OrderItemInfo;
