export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const setToken = (token) => {
    // localStorage.setItem("token_session", `"${token}"`);
    localStorage.setItem("token_session", JSON.stringify(token));
}

export const getItem = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const getToken = ({data}) => {
    const token = localStorage.getItem('token_session');
    if (!token) {
        return null;
    }
    if(data) return JSON.parse(token);
    else return JSON.parse(token).token;
}

export const removeItem = (key) => {
    localStorage.removeItem(key);
};

export const clearStorage = () => {
    localStorage.clear();
};
