"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const OrdersTableHead = ({ headingCol1, headingCol2, headingCol3, headingCol4, }) => {
    return ((0, jsx_runtime_1.jsx)("thead", { className: "cadoi-text-xs cadoi-text-primary-text cadoi-uppercase cadoi-bg-secondary-bg", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { scope: "col", className: "cadoi-px-4 cadoi-py-3", children: headingCol1 }), (0, jsx_runtime_1.jsx)("th", { scope: "col", className: "cadoi-px-4 cadoi-py-3", children: headingCol2 }), (0, jsx_runtime_1.jsx)("th", { scope: "col", className: "cadoi-px-4 cadoi-py-3", children: headingCol3 }), (0, jsx_runtime_1.jsx)("th", { scope: "col", className: "cadoi-px-4 cadoi-py-3", children: headingCol4 })] }) }));
};
exports.default = OrdersTableHead;
