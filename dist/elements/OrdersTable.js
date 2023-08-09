"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const blockWidths = {
    9: 'cadoi-w-full md:cadoi-w-9/12',
    10: 'cadoi-w-full md:cadoi-w-10/12',
    11: 'cadoi-w-full md:cadoi-w-11/12',
    12: 'cadoi-w-full',
};
const justifyContent = {
    'start': 'cadoi-justify-start',
    'end': 'cadoi-justify-end',
    'center': 'cadoi-justify-center',
    'space-between': 'cadoi-justify-between',
    'space-evenly': 'cadoi-justify-evenly',
};
const OrdersTable = ({ children, blockDistribution, blockWidth, ...attrs }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)('cadoi-container cadoi-flex cadoi-flex-wrap cadoi-my-10 -cadoi-mx-2.5', justifyContent[blockDistribution]), children: (0, jsx_runtime_1.jsxs)("table", { ...attrs, className: (0, classnames_1.default)('CadoiOrdersTable cadoi-table-auto cadoi-text-sm cadoi-text-left cadoi-text-secondary-text', blockWidths[blockWidth]), children: [(0, jsx_runtime_1.jsx)("caption", { className: "cadoi-sr-only", children: "Your Orders" }), children] }) }));
};
exports.default = OrdersTable;
