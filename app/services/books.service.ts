import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';


const searchBaseURL: string = 'https://www.googleapis.com/books/v1/volumes?q='

@Injectable()
export class BooksService {
    constructor(private http: Http) {

    }
    searchForBooks(searchTerm: string) {
        return this.http.get(searchBaseURL + searchTerm)
                .map((res) => {
                    let body = res.json();
                    console.log('Received response', body);
                    return body;
                })
    }
}
