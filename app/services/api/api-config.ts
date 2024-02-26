export interface ApiConfig {
  url: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url:"https://newsapi.org/v2/",
  timeout: 10000,
}