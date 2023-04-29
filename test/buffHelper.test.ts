import test, {describe, it} from "node:test";
import {buffHelper} from "../src/buffHelper";

describe('add', () => {
    it('bcdBuff2Str', () => {
        const buffer = Buffer.from([0x12, 0x34, 0x56]);
        const bcd = buffHelper.bcdBuff2Str(buffer); // "123456"
        const expValue = '123456'
        expect(bcd).toEqual(expValue)
    });
});
