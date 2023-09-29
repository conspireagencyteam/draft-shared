import { OrdersSettings } from "src/types";

const ORDERS_DEFAULT_SETTINGS: OrdersSettings = {
  widget_settings: {
    style: {
      general: {
        primaryTextColor: {
          rgb: {
            red: 30,
            green: 30,
            blue: 30,
          },
        },
        secondaryTextColor: {
          rgb: {
            red: 90,
            green: 90,
            blue: 90,
          },
        },
        primaryBgColor: {
          rgb: {
            red: 255,
            green: 255,
            blue: 255,
          },
        },
        secondaryBgColor: {
          rgb: {
            red: 249,
            green: 249,
            blue: 249,
          },
        },
        primaryBorderColor: {
          rgb: {
            red: 231,
            green: 231,
            blue: 231,
          },
        },
        primaryBtnBgColor: {
          rgb: {
            red: 59,
            green: 130,
            blue: 246,
          },
        },
        primaryBtnTextColor: {
          rgb: {
            red: 255,
            green: 255,
            blue: 255,
          },
        },
        primaryBtnBgHoverColor: {
          rgb: {
            red: 37,
            green: 99,
            blue: 235,
          },
        },
        primaryBtnTextHoverColor: {
          rgb: {
            red: 255,
            green: 255,
            blue: 255,
          },
        },
      },
    },
    composition: {
      settings: {
        blockDistribution: "center",
      },
      blocks: {
        "orders-table": {
          type: "orders-table",
          name: "Orders table",
          settings: {
            mandatory: true,
            width: 12,
            headingCol1: "Invoice",
            headingCol2: "Date",
            headingCol3: "Amount",
            headingCol4: "",
            payButtonText: "Pay Now",
          },
          segments: {},
          segmentOrder: [],
        },
      },
      blockOrder: ["orders-table"],
    },
  },
};

export default ORDERS_DEFAULT_SETTINGS;
