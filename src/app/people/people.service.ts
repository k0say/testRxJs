import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable, take, toArray } from 'rxjs';
import { Person } from './person';

@Injectable()
export class PeopleService {
  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getPeople$(numberOfPeople = 3): Observable<Person[]> {
    return this.http.get<Person[]>(this.url).pipe(
      mergeMap((x) => {
        return x;
      }),
      take(numberOfPeople),
      toArray()
    );
  }
}
