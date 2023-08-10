import { FC } from 'react';

interface Props {
  orderLink: string;
  orderName: string;
  orderCreatedAt: string;
  orderTotalNetAmount: string | React.ReactNode | React.ReactNode[];
}

const OrderItemInfo: FC<Props> = ({
  orderLink,
  orderName,
  orderCreatedAt,
  orderTotalNetAmount,
}) => {
  return (
    <>
      <th className="cadoi-px-4 cadoi-py-3 cadoi-whitespace-nowrap" scope="row">
        <a
          className="cadoi-font-medium cadoi-text-primary-text cadoi-no-underline"
          href={orderLink}
          aria-label={`Order number ${orderName}`}
          data-label="Invoice"
        >
          {orderName}
        </a>
      </th>
      <td className="cadoi-px-4 cadoi-py-3" role="cell" data-label="Date">
        {orderCreatedAt}
      </td>
      <td className="cadoi-px-4 cadoi-py-3" role="cell" data-label="Total">
        {orderTotalNetAmount}
      </td>
    </>
  );
};

export default OrderItemInfo;
