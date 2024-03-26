export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const setToken = (token) => {
    console.log(token);
    localStorage.setItem("token", `"${token}"`);
}

export const getItem = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const getToken = () => {
    return localStorage.getItem("token");
}

export const removeItem = (key) => {
    localStorage.removeItem(key);
};

export const clearStorage = () => {
    localStorage.clear();
};
