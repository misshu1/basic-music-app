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

export interface ArtistResponse {
    external_urls: any;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface AlbumsResponse {
    limit: number;
    next: number | null;
    offset: number | null;
    previous: number | null;
    total: number;
    items: Album[];
}

export interface Album {
    album_group: string;
    album_type: number;
    artists: ArtistResponse[];
    available_markets: string[];
    external_urls: any;
    href: string;
    id: string;
    images: {
        height: number;
        width: number;
        url: string;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    uri: string;
    type: string;
}

export interface AlbumSongsResponse {
    limit: number;
    next: number | null;
    offset: number | null;
    previous: number | null;
    total: number;
    items: Song[];
}

export interface Song {
    artists: ArtistResponse[];
    available_markets: string[];
    disc_number: number;
    explicit: number;
    duration_ms: number;
    external_urls: any;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
}

export interface SongDetails {
    album: Album[];
    artists: ArtistResponse[];
    available_markets: string[];
    disc_number: number;
    explicit: number;
    duration_ms: number;
    external_urls: any;
    external_ids: any;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
}
