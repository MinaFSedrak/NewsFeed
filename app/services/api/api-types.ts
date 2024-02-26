import { GeneralApiProblem } from "./api-problem"

export interface Source {
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type GetNewsResult = { kind: "ok"; articles: Article[] } | GeneralApiProblem
