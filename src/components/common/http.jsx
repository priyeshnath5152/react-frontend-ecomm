export const apiUrl = 'http://127.0.0.1:8000/api'

export const adminToken = () => {
    const data = localStorage.getItem('adminInfo');

    if (!data) {
        return null;
    }

    return JSON.parse(data)?.token || null;
};


export const userToken = () => {
    const data = localStorage.getItem('userInfo');

    if (!data) {
        return null;
    }

    return JSON.parse(data)?.token || null;
};




export const STRIPE_PUBLIC_KEY = 'pk_test_51Sn1FlRwIKcgf30ZZovemQGrCO3oM3hrkbK4lVszxKkVt5niJQ5fC0Rdi3agKI8j5Ezb6lEORVlYdq6rn6pj4HKS0071qCYB0N';
