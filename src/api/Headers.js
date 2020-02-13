export const loginHeaders = {
    'Content-Type': 'application/json',
};

export const authHeaders = {
    authorization: `Bearer ${localStorage.getItem('access_token')}`,
    'Content-Type': 'application/json',
};
