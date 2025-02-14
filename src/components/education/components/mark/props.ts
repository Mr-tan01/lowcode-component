

export type EducationMarkProps = {
    value: number | string;
    unit?: string;
    model?: 'hover' | 'focus' | 'default';
    meta?: Record<string, any>;
    size?: 'small' | 'medium';
    iconName?: string;
    iconSrc?: string;
    label?: string;
    show?: boolean;
}