import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

export class Hero {
    id: number;
    name: string;
};

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

@Injectable()
export class HeroService {
    constructor(private http: Http) {

    }

    getHeroes() : Observable<Response> {
        return this.http.get('app/allheroes')
                        .map((res:Response) => {
                            let body = res.json();
                            return body.data || {};
                        })

    }
}
