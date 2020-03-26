export class UniqUtil {
    public static generateUniqid() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + String(new Date().getTime());
    }

    public static generateUniqid2(pr: string = '', en: boolean = false) {
        let result, us;
        const seed = (s, w) => {
            s = parseInt(s, 10).toString(16);
            return w < s.length ? s.slice(s.length - w) :
                (w > s.length) ? new Array(1 + (w - s.length)).join('0') + s : s;
        };
        result = pr + seed(parseInt(String(new Date().getTime() / 1000), 10), 8)
            + seed(Math.floor(Math.random() * 0x75bcd15) + 1, 5);

        if (en) result += (Math.random() * 10).toFixed(8).toString();

        return result;
    };
}
