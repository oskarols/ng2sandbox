export interface BookSearchResultItem {
    etag: string;
    id: string;
    kind: string;
    saleInfo: any;
    selfLink: string;
    volumeInfo: any;
}

export interface BookSearchResultListing {
    items: BookSearchResultItem[];
    kind: string;
    totalItems: number;
}
