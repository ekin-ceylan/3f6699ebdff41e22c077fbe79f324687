import isBusy from './isBusy';

export default async function service(url: string, options?: RequestInit) {
    isBusy.addRequest();

    const response = await fetch(url, options);
    isBusy.removeRequest();

    if (response.ok) {
        return response.json();
    }

    const err = await response.text();
    return Promise.reject(new Error(err));
}
