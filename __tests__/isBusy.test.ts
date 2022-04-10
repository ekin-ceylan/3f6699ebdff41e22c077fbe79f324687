import isBusy from '../src/base/isBusy';

describe('addRequest TESTS', () => {
    it('increases requests by one', () => {
        const initialCount = isBusy.requests;
        isBusy.addRequest();
        const finalCount = isBusy.requests;

        expect(finalCount - initialCount).toEqual(1);
    });
});

describe('removeRequest TESTS', () => {
    it('decreases requests by one', () => {
        isBusy.addRequest();
        const initialCount = isBusy.requests;
        isBusy.removeRequest();
        const finalCount = isBusy.requests;

        expect(initialCount - finalCount).toEqual(1);
    });

    it('requests cannot be less than zero', () => {
        const initialCount = isBusy.requests;
        const loop = initialCount + 3;

        for (let i = 0; i < loop; i++) {
            isBusy.removeRequest();
        }

        const finalCount = isBusy.requests;

        expect(finalCount).toEqual(0);
    });
});

describe('value TESTS', () => {
    it('if requests is greater than zero, returns true', () => {
        while (isBusy.requests <= 0) {
            isBusy.addRequest();
        }

        const finalCount = isBusy.requests;
        const rv = isBusy.value;

        expect(finalCount).toBeGreaterThan(0);
        expect(rv).toEqual(true);
    });

    it('if requests is zero returns false', () => {
        while (isBusy.requests > 0) {
            isBusy.removeRequest();
        }

        const finalCount = isBusy.requests;
        const rv = isBusy.value;

        expect(finalCount).toEqual(0);
        expect(rv).toEqual(false);
    });
});
