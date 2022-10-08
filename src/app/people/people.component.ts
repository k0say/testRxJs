import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  imports: [CommonModule, FormsModule],
  providers: [PeopleService],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleComponent implements OnInit, OnChanges {
  // people$: Observable<Person[]>;
  public numberOfPeople$ = new BehaviorSubject<number>(5);
  n$ = new BehaviorSubject<number>(5); // = this.numberOfPeople$.value;
  num: number = 5;

  constructor(private peopleService: PeopleService) {}

  people$ = this.peopleService.getPeople$(this.num);

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    this.n$.subscribe(val => {
      console.log(val)
      this.people$ = this.peopleService.getPeople$(val);
    });
  }
}
