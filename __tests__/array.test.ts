import '../src/base/extensions/Array';

describe('collect TESTS', () => {
    it('accumulates the values of the field into an array', () => {
        const array = [
            { id: 5, b: 6, c: 7 },
            { id: 6, b: 6, c: 7 },
            { id: 1, b: 6, c: 7 },
            { id: 9, b: 6, c: 7 },
            { id: 2, b: 6, c: 7 },
        ];

        const rv = array.collect('id');

        expect(rv).toEqual([5, 6, 1, 9, 2]);
    });

    it('the exception values do not appear in the accumulation array', () => {
        const array = [
            { id: 5, b: 6, c: 7 },
            { id: 6, b: 6, c: 7 },
            { id: 1, b: 6, c: 7 },
            { id: 9, b: 6, c: 7 },
            { id: 2, b: 6, c: 7 },
        ];

        const rv = array.collect('id', [1, 2]);

        expect(rv).toEqual([5, 6, 9]);
    });
});

describe('removeDuplicates TESTS', () => {
    it('deletes duplicate values from array', () => {
        const array = [1, 2, 2, 3, 4, 4, 4, 5];
        const arrayControl = [1, 2, 3, 4, 5];

        const rv = array.removeDuplicates();

        expect(rv).toEqual(arrayControl);
    });
});

describe('select TESTS', () => {
    const selectTestArray = [
        { id: 1, text: 'Mary', age: 18 },
        { id: 2, text: 'Nancy', age: 19 },
        { id: 3, text: 'Paul', age: 25 },
        { id: 4, text: 'Cheryl', age: 18 },
        { id: 5, text: 'Frances', age: 12 },
    ];

    it('accumulates the return value of the predicate in an array', () => {
        const rv = selectTestArray.select(x => ({ text: x.age.toString(), value: x.id }));

        const controlArray = [
            { text: '18', value: 1 },
            { text: '19', value: 2 },
            { text: '25', value: 3 },
            { text: '18', value: 4 },
            { text: '12', value: 5 },
        ];

        expect(rv).toEqual(controlArray);
    });

    it('loop steps that do not return values, do not appear in the accumulation array', () => {
        const rv = selectTestArray.select(x => {
            if (x.age !== 18) {
                return { text: x.age.toString(), value: x.id };
            }
        });

        const controlArray = [
            { text: '19', value: 2 },
            { text: '25', value: 3 },
            { text: '12', value: 5 },
        ];

        expect(rv).toEqual(controlArray);
    });
});
