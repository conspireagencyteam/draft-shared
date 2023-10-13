"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ButtonLink_1 = __importDefault(require("./ButtonLink"));
const meta = {
    title: 'Elements/ButtonLink',
    component: ButtonLink_1.default,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};
exports.default = meta;
// Define the Template that will be used for all stories
const Template = args => (0, jsx_runtime_1.jsx)(ButtonLink_1.default, { ...args });
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary = Template.bind({});
exports.Primary.args = {
    children: 'Primary',
};
