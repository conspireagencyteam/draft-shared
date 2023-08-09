"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = ({ children, ...props }) => {
    const { className, ...buttonProps } = { ...props };
    return ((0, jsx_runtime_1.jsx)("button", { ...buttonProps, className: `${className} CadoiButton CadoiButton--primary cadoi-py-2 cadoi-px-3 cadoi-inline-flex cadoi-justify-center cadoi-items-center cadoi-gap-2 cadoi-rounded-md cadoi-border cadoi-border-transparent cadoi-font-semibold cadoi-bg-primary-btn-bg cadoi-text-primary-btn-text hover:cadoi-bg-primary-btn-bg-hover focus:cadoi-outline-none focus:cadoi-ring-2 focus:cadoi-ring-primary-btn-bg focus:cadoi-ring-offset-2 cadoi-transition-all cadoi-text-sm cadoi-h-10 hover:cadoi-text-primary-btn-text-hover disabled:cadoi-opacity-75 disabled:cadoi-cursor-not-allowed disabled:cadoi-bg-primary-btn-bg disabled:cadoi-text-primary-btn-text`, children: children }));
};
exports.default = Button;
