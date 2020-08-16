import { useLocation } from 'react-router-dom';
import { API_URL } from './constants';

export const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export const getUpdatedUrlInfo = ({ key, value, history, query }) => {
    const pathname = history.location.pathname;
    const search = history.location.search;

    if (search === '') {
        return {
            url: `${pathname}?${key}=${value}`,
            replace: false
        };
    } else {
        if (query.get(key) !== null) {
            query.set(key, value);
            return {
                url: `${pathname}?${query.toString()}`,
                replace: true
            };
        } else {
            return {
                url: `${pathname}${search}&${key}=${value}`,
                replace: false
            };
        }
    }
};

export const getAPIUrl = (searchParams) => {
    if (!searchParams) return;
    const params = searchParams.replace('?', '');
    return `${API_URL}&${params}`;
};