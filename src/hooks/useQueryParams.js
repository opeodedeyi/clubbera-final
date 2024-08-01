import { useSearchParams } from 'next/navigation';

export function useQueryParams() {
    const searchParams = useSearchParams();

    const createMultipleQueryString = (newParams) => {
        const params = new URLSearchParams(searchParams);
        Object.entries(newParams).forEach(([name, value]) => {
            params.set(name, value);
        });
        return params.toString();
    };

    const createQueryString = (name, value) => {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        return params.toString();
    };

    const removeQueryParam = (name) => {
        const params = new URLSearchParams(searchParams);
        params.delete(name);
        return params.toString();
    };

    return { createMultipleQueryString, createQueryString, removeQueryParam };
}