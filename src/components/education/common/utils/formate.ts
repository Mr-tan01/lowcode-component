
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

const w = 10000;

/**
 * 
 * @param num 
 * @param decimal 
 * @returns 
 */
export function bigNumber(num: number, decimal: number = 0) {
    const resultObj: {
        value: number,
        decimal: null | number,
        result: number,
        unit: string
    } = {
        value: num,
        decimal: null,
        result: num,
        unit: ''
    }
    let _num = num;
    if (typeof _num !== 'number') {
        _num = +num;
    }
    if (Number.isNaN(_num)) {
        return resultObj;
    }
    if (_num < w) {
        resultObj.value = _num;
        return resultObj;
    }
    resultObj.unit = '万';
    const result = _num / w;
    const [a, b] = `${result}`.split('.');
    const intValue = Number(a);
    const decimalValue = b ? Number(b.substring(0, decimal)) : null;
    resultObj.value = intValue;
    resultObj.decimal = decimalValue;
    if (!decimalValue) {
        resultObj.result = Number(intValue);
 
    } else {
        resultObj.result = Number(`${intValue}.${decimalValue}`);
    }
    return resultObj;
}