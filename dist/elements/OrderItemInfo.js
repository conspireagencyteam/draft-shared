"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const OrderItemInfo = ({ orderName, orderCreatedAt, orderTotalNetAmount, headingCol1, headingCol2, headingCol3, }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("td", { className: "CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-whitespace-nowrap cadoi-font-medium cadoi-text-primary-text cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left", role: "cell", "data-label": headingCol1, children: orderName }), (0, jsx_runtime_1.jsx)("td", { className: "CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left", role: "cell", "data-label": headingCol2, children: orderCreatedAt }), (0, jsx_runtime_1.jsx)("td", { className: "CadoiOrdersTable__Column cadoi-px-4 cadoi-py-3 cadoi-flex cadoi-items-center cadoi-text-right md:cadoi-table-cell md:cadoi-text-left", role: "cell", "data-label": headingCol3, children: orderTotalNetAmount })] }));
};
exports.default = OrderItemInfo;
