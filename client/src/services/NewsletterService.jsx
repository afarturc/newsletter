const API_URL = "http://127.0.0.1:3000/";

async function createSubscriber(formData) {
    return fetch(API_URL + "subscribers", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

async function createMenu(formData) {
    return fetch(API_URL + "menus", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

export { 
    createSubscriber,
    createMenu
}