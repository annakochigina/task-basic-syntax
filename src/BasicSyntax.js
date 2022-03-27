export function romanToInteger(str) {
    let result = 0;
    let roman_to_arab = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < str.length; i += 1) {
        if (
            i + 1 < str.length &&
            roman_to_arab[str[i]] < roman_to_arab[str[i + 1]]
        ) {
            result -= roman_to_arab[str[i]];
        } else {
            result += roman_to_arab[str[i]];
        }
    }

    return result;
}
