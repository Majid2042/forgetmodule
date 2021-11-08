
interface RequestOptions {
    headers?: Record<string, string>,
    body?: any
}

interface FetchResponse<T> {
    ok: boolean
    status: number
    body?: T
    errors?: string[]
}

async function makeJSONRequest<T>(url: string, method: string, {
    headers,
    body
}: RequestOptions) {
    return fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: typeof body === "object" ? JSON.stringify(body) : body,
    }).then(res => handleJSONResponse<T>(res));
}

async function getJSON<T>(url: string, options: RequestOptions) {
    return await makeJSONRequest<T>(url, "GET", options);
}

async function postJSON<T>(url: string, options: RequestOptions) {
    return await makeJSONRequest<T>(url, "POST", options);
}

const Fetch = {
    getJSON,
    postJSON
};

export default Fetch;

async function handleJSONResponse<T>(res: Response): Promise<FetchResponse<T>> {
    if (res.status === 400) { // Form fails
        return Promise.reject({
            ok: res.ok,
            status: res.status,
            errors: (await res.json()).message as string[],
        });
    } else if (res.ok) { // Success
        return {
            ok: res.ok,
            status: res.status,
            body: await res.json() as T
        }
    } else {
        return Promise.reject({
            ok: res.ok,
            status: res.status,
        });
    }
}
