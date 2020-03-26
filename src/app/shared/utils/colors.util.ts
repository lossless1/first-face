export const colors: string[] = [
    "#FFBC00",
    "#A80756",
    "#43788F",
    "#13002E",
    "#13002e",
    "#43788f",
    "#a80756",
    "#1a5e56",
    "#1a1644",
    "#611644",
    "#2296ff",
    "#840026",
    "#420026",
    "#423226"
];

export class ColorUtilClass {
    constructor() {}

    public static cmykToRGB(c, m, y, k) {
        let cyan = (c * 100 * 255 * (1 - k)) << 16;
        let magenta = (m * 100 * 255 * (1 - k)) << 8;
        let yellow = (y * 100 * 255 * (1 - k)) >> 0;

        let black = 255 * (1 - k);
        let white = black | (black << 8) | (black << 16);

        let color = white - (cyan | magenta | yellow);
        let colorToString = color.toString(16);

        return "#" + "000000".substr(colorToString.length) + colorToString;
    }

    public static hexToCMYK(hex) {
        let computedC = 0;
        let computedM = 0;
        let computedY = 0;
        let computedK = 0;

        hex = hex.charAt(0) == "#" ? hex.substring(1, 7) : hex;

        if (hex.length != 6) {
            return;
        }
        if (/[0-9a-f]{6}/i.test(hex) != true) {
            return;
        }

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        // BLACK
        if (r == 0 && g == 0 && b == 0) {
            return [0, 0, 0, 1];
        }

        computedC = 1 - r / 255;
        computedM = 1 - g / 255;
        computedY = 1 - b / 255;

        let minCMY = Math.min(computedC, Math.min(computedM, computedY));

        computedC = (computedC - minCMY) / (1 - minCMY);
        computedM = (computedM - minCMY) / (1 - minCMY);
        computedY = (computedY - minCMY) / (1 - minCMY);
        computedK = minCMY;

        return [computedC, computedM, computedY, computedK];
    }

    public static getRandomColor() {
        return colors[Math.round(Math.random() * colors.length)];
    }
}
