
import apisauce, { ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api-types"

const create = (config: ApiConfig = DEFAULT_API_CONFIG) => {
    const api = apisauce.create({
        baseURL: config.url,
        timeout: config.timeout,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    /**
     * Just for demo the request is hardcoded, in real project the apiKey should be saved to env file
     * and pageSize/page should be arguments for a pagination feature
     */
    const getNews = async (searchTerm: string = ''): Promise<Types.GetNewsResult> => {
        const response: ApiResponse<any> = await api.get(`top-headlines?q=${searchTerm}m&pageSize=100&country=us&apiKey=4293e2b4b1324400b9a037289b1c858a`);
        if (!response.ok) {
            const problem = getGeneralApiProblem(response)
            if (problem) return problem
        }

        try {
            const resultArticles: Types.Article[] = response?.data?.articles;
            return { kind: "ok", articles: resultArticles }
        } catch {
            return { kind: "bad-data" }
        }
    }

    return {
        getNews
    };
};

export const API = create();
