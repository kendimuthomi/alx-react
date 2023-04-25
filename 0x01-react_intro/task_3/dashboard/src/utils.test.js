import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test("returns correct year", () => {
    expect(getFullYear()).toBe(2023);
});

test("returns the correct string", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns the right notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});