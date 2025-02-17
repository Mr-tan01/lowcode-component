
export type TabListRaw = {
    label: string;
    value?: string | number;
} & Record<string, any>;

export type ChangeEvent = { index: number, label: TabListRaw['label'], value: TabListRaw['value'], data: TabListRaw };
