import { FC, TableHTMLAttributes } from 'react';
import { JustifyContent, BlockWidth } from 'src/types';
import cn from 'classnames';

const blockWidths = {
  9: 'cadoi-w-full md:cadoi-w-9/12',
  10: 'cadoi-w-full md:cadoi-w-10/12',
  11: 'cadoi-w-full md:cadoi-w-11/12',
  12: 'cadoi-w-full',
};

const justifyContent = {
  start: 'cadoi-justify-start',
  end: 'cadoi-justify-end',
  center: 'cadoi-justify-center',
  'space-between': 'cadoi-justify-between',
  'space-evenly': 'cadoi-justify-evenly',
};
interface Props extends TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode | React.ReactNode[];
  blockDistribution: JustifyContent;
  blockWidth: BlockWidth;
}

const OrdersTable: FC<Props> = ({ children, blockDistribution, blockWidth, ...attrs }) => {
  return (
    <div
      className={cn(
        'cadoi-flex cadoi-flex-wrap cadoi-my-10 cadoi-bg-primary-bg',
        justifyContent[blockDistribution]
      )}
    >
      <table
        {...attrs}
        className={cn(
          'CadoiOrdersTable cadoi-border-collapse cadoi-indent-0 cadoi-border-inherit cadoi-table-auto cadoi-text-sm cadoi-text-left cadoi-text-secondary-text',
          blockWidths[blockWidth]
        )}
      >
        <caption className="cadoi-sr-only">Your Orders</caption>
        {children}
      </table>
    </div>
  );
};

export default OrdersTable;
