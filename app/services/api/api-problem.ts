import { ApiResponse } from "apisauce";

export type GeneralApiProblem =
    | { kind: "timeout" }
    | { kind: "cannot-connect" }
    | { kind: "server" } // Any 5xx error
    | { kind: "unauthorized" } // 401
    | { kind: "forbidden" } // 403
    | { kind: "not-found" } // 404
    | { kind: "rejected" } // Any 4xx error
    | { kind: "unknown" }
    | { kind: "bad-data" }

export function getGeneralApiProblem(response: ApiResponse<any>): GeneralApiProblem | void | null {
    switch (response.problem) {
        case "CONNECTION_ERROR":
            return { kind: "cannot-connect" }
        case "NETWORK_ERROR":
            return { kind: "cannot-connect" }
        case "TIMEOUT_ERROR":
            return { kind: "timeout" }
        case "SERVER_ERROR":
            return { kind: "server" }
        case "UNKNOWN_ERROR":
            return { kind: "unknown" }
        case "CLIENT_ERROR":
            switch (response.status) {
                case 401:
                    return { kind: "unauthorized" }
                case 403:
                    return { kind: "forbidden" }
                case 404:
                    return { kind: "not-found" }
                default:
                    return { kind: "rejected" }
            }
        case "CANCEL_ERROR":
            return null
    }

    return null
}
