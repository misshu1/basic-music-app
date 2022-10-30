export enum Status {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export enum NotificationType {
    INFO = 'INFO',
    WARNING = 'WARNING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export class ErrorResponse {
    constructor(public status_message: string, public status_code: number) {
        this.status_code = status_code;
        this.status_message = status_message;
    }
}

export interface TokenResponse {
    access_token: string;
    expires_in: number;
    token_type: string;
}
