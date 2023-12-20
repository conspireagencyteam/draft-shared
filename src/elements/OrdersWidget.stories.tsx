import { Meta, StoryFn } from '@storybook/react';
import OrdersWidget, { Props } from './OrdersWidget';
import {
  ButtonLink,
  OrderItem,
  OrderItemActions,
  OrderItemInfo,
  OrdersTable,
  OrdersTableHead,
} from '.';

const meta = {
  title: 'Elements/OrdersWidget',
  component: OrdersWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof OrdersWidget>;

export default meta;

const mockOrders = [
  {
    id: 'fe02d1d03b47f81ed7cce69eacr2b6eb20',
    name: '#1001',
    createdAt: 'August 7, 2022',
    totalNetAmount: '$250.45',
  },
  {
    id: 'ge02d1d03b47f81ed7cce69ea2b6eb20',
    name: '#1002',
    createdAt: 'September 7, 2022',
    totalNetAmount: '$50.40',
  },
  {
    id: 'he02d1d03b47f81ed7cce69ea2b6eb20',
    name: '#1003',
    createdAt: 'January 7, 2023',
    totalNetAmount: '$45.25',
  },
];

// Define the Template that will be used for all stories
const Template: StoryFn<Props> = args => <OrdersWidget {...args} />;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});
Default.args = {
  children: (
    <OrdersTable blockDistribution="center" blockWidth={9}>
      <OrdersTableHead
        headingCol1="Invoice"
        headingCol2="Date"
        headingCol3="Amount"
        headingCol4="Pay Now"
      />
      <tbody>
        {mockOrders?.map(order => (
          <OrderItem key={order.id}>
            <OrderItemInfo
              orderName={order.name}
              orderCreatedAt={order.createdAt}
              orderTotalNetAmount={order.totalNetAmount}
              headingCol1="Invoice"
              headingCol2="Date"
              headingCol3="Amount"
            />
            <OrderItemActions headingCol4="Pay Now">
              <ButtonLink href="#">Pay Now</ButtonLink>
            </OrderItemActions>
          </OrderItem>
        ))}
      </tbody>
    </OrdersTable>
  ),
};
