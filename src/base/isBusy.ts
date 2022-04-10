const isBusy = {
    get value(): boolean {
        return requests > 0;
    },
    get requests() {
        return requests;
    },
    addRequest() {
        requests++;
    },

    removeRequest() {
        requests--;
        requests = Math.max(0, requests);
    },
};

let requests = 0;

export default isBusy;
