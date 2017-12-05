export const fetchJson = (url, method = "GET", body = false) => {
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: method,
        body: body ? JSON.stringify(body): null
    })
        .then((r) => {
            if (r.status !== 200) {
                return Promise.reject(r);
            }
            return r;
        })
        .catch(error => {
            if (error instanceof Response) {
                return error.json().then((errors) => {
                    let items = [];
                    for (const i in errors) {
                        items.push( errors[i] );
                        console.log(items);

                    }
                    return Promise.reject(items);
                });
            }
            else {
                return Promise.reject(error);
            }
        })
        .then((r) => r.json())
}