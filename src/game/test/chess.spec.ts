import { chessCreate, chessGetFen, indexToString, INITIAL_FEN, stringToIndex } from "../chess2";

describe("testing chess", () => {
    test("index to string", () => {
        expect(indexToString([0, 0])).toBe('a8');
        expect(indexToString([3, 0])).toBe('d8');
        expect(indexToString([7, 0])).toBe('h8');
        expect(indexToString([0, 3])).toBe('a5');
        expect(indexToString([4, 3])).toBe('e5');
        expect(indexToString([4, 7])).toBe('e1');
        expect(indexToString([7, 7])).toBe('h1');
        expect(indexToString([7, 4])).toBe('h4');
    });
    test("string to index", () => {
        expect(stringToIndex('a8')).toStrictEqual([0, 0]);
        expect(stringToIndex('d8')).toStrictEqual([3, 0]);
        expect(stringToIndex('h8')).toStrictEqual([7, 0]);
        expect(stringToIndex('a5')).toStrictEqual([0, 3]);
        expect(stringToIndex('e5')).toStrictEqual([4, 3]);
        expect(stringToIndex('e1')).toStrictEqual([4, 7]);
        expect(stringToIndex('h1')).toStrictEqual([7, 7]);
        expect(stringToIndex('h4')).toStrictEqual([7, 4]);
    });

    test("initial fen", () => {
        expect(chessGetFen(chessCreate())).toBe(INITIAL_FEN);
        const TEST2_FEN = 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2';
        expect(chessGetFen(chessCreate(TEST2_FEN))).toBe(TEST2_FEN);
        const TEST3_FEN = 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2';
        expect(chessGetFen(chessCreate(TEST3_FEN))).toBe(TEST3_FEN);
    });
});