import { FC } from 'react';

interface Props {
  headingCol1: string;
  headingCol2: string;
  headingCol3: string;
  headingCol4: string;
}

const OrdersTableHead: FC<Props> = ({ headingCol1, headingCol2, headingCol3, headingCol4 }) => {
  return (
    <thead className="cadoi-text-xs cadoi-text-primary-text cadoi-uppercase cadoi-bg-secondary-bg cadoi-hidden md:cadoi-table-header-group">
      <tr>
        <th scope="col" className="cadoi-px-4 cadoi-py-3">
          {headingCol1}
        </th>
        <th scope="col" className="cadoi-px-4 cadoi-py-3">
          {headingCol2}
        </th>
        <th scope="col" className="cadoi-px-4 cadoi-py-3">
          {headingCol3}
        </th>
        <th scope="col" className="cadoi-px-4 cadoi-py-3 cadoi-text-right">
          {headingCol4}
        </th>
      </tr>
    </thead>
  );
};

export default OrdersTableHead;
