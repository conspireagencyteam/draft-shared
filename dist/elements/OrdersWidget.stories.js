"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const OrdersWidget_1 = __importDefault(require("./OrdersWidget"));
const _1 = require(".");
const meta = {
    title: 'Elements/OrdersWidget',
    component: OrdersWidget_1.default,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'padded',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};
exports.default = meta;
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
const Template = args => (0, jsx_runtime_1.jsx)(OrdersWidget_1.default, { ...args });
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.Default = Template.bind({});
exports.Default.args = {
    children: ((0, jsx_runtime_1.jsxs)(_1.OrdersTable, { blockDistribution: "center", blockWidth: 9, children: [(0, jsx_runtime_1.jsx)(_1.OrdersTableHead, { headingCol1: "Invoice", headingCol2: "Date", headingCol3: "Amount", headingCol4: "Pay Now" }), (0, jsx_runtime_1.jsx)("tbody", { children: mockOrders === null || mockOrders === void 0 ? void 0 : mockOrders.map(order => ((0, jsx_runtime_1.jsxs)(_1.OrderItem, { children: [(0, jsx_runtime_1.jsx)(_1.OrderItemInfo, { orderName: order.name, orderCreatedAt: order.createdAt, orderTotalNetAmount: order.totalNetAmount, headingCol1: "Invoice", headingCol2: "Date", headingCol3: "Amount" }), (0, jsx_runtime_1.jsx)(_1.OrderItemActions, { children: (0, jsx_runtime_1.jsx)(_1.ButtonLink, { href: "#", children: "Pay Now" }) })] }, order.id))) })] })),
};
