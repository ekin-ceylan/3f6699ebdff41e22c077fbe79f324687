const isBusy = {
    get value(): boolean {
        return this.requests > 0;
    },
    addRequest() {
        this.requests++;
    },

    removeRequest() {
        this.requests--;
        this.requests = Math.max(0, this.requests);
    },

    requests: 0,
};

async function service(url: string, options?: RequestInit) {
    isBusy.addRequest();

    const response = await fetch(url, options);
    isBusy.removeRequest();

    if (response.ok) {
        return response.json();
    }

    const err = await response.text();
    return Promise.reject(new Error(err));
}

export default isBusy;
export { service };
