/**
 *
 * @param text
 * @param maxLength
 * @returns
 */
export declare function overflowStr(text: string, maxLength: number): string;
/**
 *
 * @param num
 * @param decimal
 * @returns
 */
export declare function bigNumber(num: number, decimal?: number): {
    value: number;
    decimal: null | number;
    result: number;
    unit: string;
};
