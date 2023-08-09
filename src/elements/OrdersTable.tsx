import { FC, TableHTMLAttributes } from 'react';
import { JustifyContent, BlockWidth } from 'src/types';
import cn from 'classnames';

const blockWidths = {
  9: 'catra-w-full md:catra-w-9/12',
  10: 'catra-w-full md:catra-w-10/12',
  11: 'catra-w-full md:catra-w-11/12',
  12: 'catra-w-full',
};

const justifyContent = {
  'start': 'catra-justify-start',
  'end': 'catra-justify-end',
  'center': 'catra-justify-center',
  'space-between': 'catra-justify-between',
  'space-evenly': 'catra-justify-evenly',
};
interface Props extends TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode | React.ReactNode[];
  blockDistribution: JustifyContent;
  blockWidth: BlockWidth;
}

const OrdersTable: FC<Props> = ({
  children,
  blockDistribution,
  blockWidth,
  ...attrs
}) => {
  return (
    <div
      className={cn(
        'cadoi-container cadoi-flex cadoi-flex-wrap cadoi-my-10 -cadoi-mx-2.5',
        justifyContent[blockDistribution]
      )}
    >
      <table
        {...attrs}
        className={cn(
          'CadoiOrdersTable cadoi-table-auto cadoi-text-sm cadoi-text-left cadoi-text-secondary-text',
          blockWidths[blockWidth]
        )}
      >
        <caption className="cadio-sr-only">Your Orders</caption>
        {children}
      </table>
    </div>
  );
};

export default OrdersTable;
