"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const OrderItemInfo = ({ orderLink, orderName, orderCreatedAt, orderTotalNetAmount, }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("th", { className: "cadoi-px-4 cadoi-py-3 cadoi-font-medium cadoi-text-primary-text cadoi-whitespace-nowrap", scope: "row", children: (0, jsx_runtime_1.jsx)("a", { href: orderLink, "aria-label": `Order number ${orderName}`, "data-label": "Invoice", children: orderName }) }), (0, jsx_runtime_1.jsx)("td", { className: "cadoi-px-4 cadoi-py-3", role: "cell", "data-label": "Date", children: orderCreatedAt }), (0, jsx_runtime_1.jsx)("td", { className: "cadoi-px-4 cadoi-py-3", role: "cell", "data-label": "Total", children: orderTotalNetAmount })] }));
};
exports.default = OrderItemInfo;
