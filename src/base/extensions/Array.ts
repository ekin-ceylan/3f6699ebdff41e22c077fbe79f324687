/* eslint-disable */
declare global {
    interface Array<T> {
        collect(fieldName: string, exceptionValues?: any[]): any[];
        removeDuplicates(): T[];
        select(predicate: (value: T, index: number, obj: T[]) => unknown): any[];
    }
}

Array.prototype.collect = function (fieldName: string, exceptionValues: any[] = []) {
    return this.reduce((collection: any[], item) => {
        if (!exceptionValues.includes(item[fieldName])) {
            collection.push(item[fieldName]);
        }

        return collection;
    }, []);
};

Array.prototype.removeDuplicates = function () {
    return this.filter((item, index) => this.indexOf(item) === index);
};

Array.prototype.select = function (predicate) {
    return this.reduce((acc, item, index, array) => {
        const result = predicate(item, index, array);
        return result !== undefined ? [...acc, result] : acc;
    }, []);
};

export {};
