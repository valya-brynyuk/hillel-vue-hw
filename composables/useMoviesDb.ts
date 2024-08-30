export const useMoviesDb = () => {
    const BASE_URL = 'https://www.omdbapi.com/';
    const API_KEY = '5beaec03'; // @fixme: must be moved to the .env file

    const createSearchParams = (params: Record<string, string>) => new URLSearchParams({
        apikey: API_KEY,
        ...params,
    });

    const request = async (params: Record<string, string>) => {
        const data = await useFetch(`${BASE_URL}?${createSearchParams(params).toString()}`);

        if(data.data?.value?.Response === 'False') {
            throw createError({
                statusCode: 404,
                statusMessage: data.data.value.Error,
                fatal: true
            })
        } else if(data.error?.value) {
            throw createError({
                statusCode: data.error.value.statusCode,
                statusMessage: data.error.value.statusMessage,
                fatal: true
            })
        }

        return data.data;
    }

    return {
        searchMovies: (query: string) => {
            return request({
                s: query,
            });
        },
        getSingleMovie: async (id: string) => {
            return request({
                i: id,
            });
        }
    }
}