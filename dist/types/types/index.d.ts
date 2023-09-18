export type ActionStatus = 'DISABLED' | 'IDLE' | 'HANDLING' | 'SUCCESS' | 'ERROR';
export type JustifyContent = 'start' | 'end' | 'center' | 'space-between' | 'space-evenly';
export interface RGBColor {
    red: number;
    green: number;
    blue: number;
}
export type BlockWidth = 9 | 10 | 11 | 12;
export type SegmentWidth = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type MoveBlockSegmentDirection = 'up' | 'down';
export interface OrdersStyle {
    general: {
        primaryTextColor: {
            rgb: RGBColor;
        };
        secondaryTextColor: {
            rgb: RGBColor;
        };
        primaryBgColor: {
            rgb: RGBColor;
        };
        secondaryBgColor: {
            rgb: RGBColor;
        };
        primaryBorderColor: {
            rgb: RGBColor;
        };
        primaryBtnBgColor: {
            rgb: RGBColor;
        };
        primaryBtnTextColor: {
            rgb: RGBColor;
        };
        primaryBtnBgHoverColor: {
            rgb: RGBColor;
        };
        primaryBtnTextHoverColor: {
            rgb: RGBColor;
        };
    };
}
export type OrdersBlockType = 'orders-table';
export type OrdersSegmentKey = keyof OrdersTableBlock['segments'];
export type OrdersSegmentType = never;
export interface OrdersTableBlock {
    type: 'orders-table';
    name: 'Orders table';
    settings: {
        mandatory: true;
        width: BlockWidth;
        headingCol1: string;
        headingCol2: string;
        headingCol3: string;
        headingCol4: string;
        payButtonText: string;
    };
    segments: {};
    segmentOrder: OrdersSegmentKey[];
}
export interface OrdersComposition {
    settings: {
        blockDistribution: JustifyContent;
    };
    blocks: {
        'orders-table': OrdersTableBlock;
        [key: string]: OrdersTableBlock | undefined;
    };
    blockOrder: (keyof OrdersComposition['blocks'])[];
}
export interface OrdersSettings {
    titleText: string;
    widget_settings: {
        style: OrdersStyle;
        composition: OrdersComposition;
    };
}
export type OrdersBlockKey = keyof OrdersComposition['blocks'];
export type OrdersStyleColorKey = 'general.primaryTextColor.rgb' | 'general.secondaryTextColor.rgb' | 'general.primaryBgColor.rgb' | 'general.secondaryBgColor.rgb' | 'general.primaryBorderColor.rgb' | 'general.primaryBtnBgColor.rgb' | 'general.primaryBtnTextColor.rgb' | 'general.primaryBtnBgHoverColor.rgb' | 'general.primaryBtnTextHoverColor.rgb';
export type OrdersStyleKey = OrdersStyleColorKey;
export type OrdersBlockEditableSettingsKey = 'headingCol1' | 'headingCol2' | 'headingCol3' | 'headingCol4' | 'payButtonText';
export type EmailReminders = boolean;
export type EmailPeriod = '7' | '14' | '30';
export type InstallSetting = boolean;
export interface DashboardSettings {
    email: EmailReminders;
    email_period: EmailPeriod;
    installSetting: InstallSetting;
}
export interface Dashboard {
    draftsCount: number;
    last30: number;
    lastSync: string;
    settings: DashboardSettings;
}
