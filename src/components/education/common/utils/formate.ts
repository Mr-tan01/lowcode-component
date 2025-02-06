
/**
 * 
 * @param text 
 * @param maxLength 
 * @returns 
 */
export function overflowStr(text: string, maxLength: number) {
    let tempText = text ?? '-';
    return tempText.length > maxLength ? tempText.substring(0, maxLength) + '...' : tempText;
}