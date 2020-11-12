import { Subject, combineLatest, merge, race, interval, Observable } from 'rxjs';
import { filter, distinct, skipUntil, map, first, average, distinctUntilChanged, skip, take, tap, delay, debounceTime, mergeMap } from 'rxjs/operators';

import { Car } from './types/car.type';
import { Truck } from './types/truck.type';

const cars$ = new Subject<Car>();
const trucks$ = new Subject<Truck>();

const colorsSubject = new Subject();
const colors$: Observable<any> = colorsSubject;

cars$.pipe(
  //tap(x => console.log(x)),
  filter(x => x.color === 'black' || x.color === 'red'),
  //tap(x => console.log(x))
  ).subscribe(colorsSubject);

const colorOfTheCars = new Subject<Car>();
const colorOfTheCars$: Observable<Car> = colorOfTheCars;

const noRepeatColors = new Subject<any>();
const noRepeatColors$: Observable<any> = noRepeatColors;



colors$.pipe(
  map(x => x.color),
  //tap(x => console.log(x))
).subscribe(colorOfTheCars);

colorOfTheCars$.pipe(
  tap(x => console.log(x))
).subscribe();

var colorType: string;

colorOfTheCars$.pipe(
  map(x => {
    colorType = x.color,
    if(x.color)
    {
      tap(x => console.log(x))
    }
  })
)

// EXERCISES
// TIP: whenever you start at the next exercise it's recommended to refresh to result browser
// this is to prevent memory leaks

// #1 ---
// step 1: only get cars that have the 'color' black or red
// step 2: only get the 'color' of the car
// step 3: only emit a new value when the value is different from the previous one


// step 1: --c1--c2--c3--c4--c5--c6--c7--c8--c9--c10--c11--c12--c13
// step 2: --c1--c2------c4


// #2 ---
// step 1: skip the first 3 cars from the stream
// step 2: take only the first 5 cars from the stream, ignore all the others



// #3 ---
// step 1: only get the cars with the 'color' blue
// step 2: console log the cars inside the stream
// step 3: delay the emit of the values by 500ms



// #4 ---
// step 1: only get the 'make' of the car
// step 2: only emit a new value when there hasn't been any activity on the stream for at least 500ms



// #5 ---
// step 1: combine all cars with all trucks (don't use the 'merge' operator)



// #6 ---
// step 1: merge all cars with all trucks (don't use the 'combineLatest' operator)



// #7 ---
// step 1: merge all cars with all trucks (don't use the 'combineLatest' operator)
// step 2: make sure that the trucks output before the cars



// #8 ---
// step 1: only get the cars by make Ford and Volvo
// step 2: merge the trucks into the cars stream and make sure only the trucks of the same brand as the cars will be in the stream output (HINT: take a look at mergeMap and switchMap, only the trucks should be returned)



// #9 ---
// step 1: only emit the results of whoever emits first, if cars$ emits first then the trucks$ should be ignored completely



// #10 ---
// step 1: the first value of cars$ should be combined with the first value of trucks$
// cars$ = [1,2,3,4,5]; trucks$ = ['a', 'b', 'c']; result = [ [1,'a'], [2,'b'], [3,'c'] ]



// #11 ---
// step 1: log something every 2000ms (the value can be a static value)



// DO NOT REMOVE
cars$.next({ id: 'c1', make: 'BMW', model: 'M5', color: 'red' });
cars$.next({ id: 'c2', make: 'Mercedes', model: 'E', color: 'black' });
cars$.next({ id: 'c3', make: 'Audi', model: 'RS6', color: 'green' });
cars$.next({ id: 'c4', make: 'Citroen', model: 'C4', color: 'black' });

trucks$.next({ id: 't1', make: 'MAN', model: 'big', color: 'red' });
trucks$.next({ id: 't2', make: 'Mercedes', model: 'bigger', color: 'black' });

cars$.next({ id: 'c5', make: 'Peugeot', model: '308', color: 'red' });
cars$.next({ id: 'c6', make: 'Maserati', model: 'GranTurismo', color: 'black' });
cars$.next({ id: 'c7', make: 'Astin Martin', model: 'DB9', color: 'silver' });
cars$.next({ id: 'c8', make: 'Nissan', model: 'Note', color: 'blue' });
cars$.next({ id: 'c9', make: 'Opel', model: 'Corsa', color: 'blue' });
cars$.next({ id: 'c10', make: 'Ford', model: 'GT', color: 'red' });
cars$.next({ id: 'c11', make: 'Volvo', model: 'S90', color: 'silver' });

trucks$.next({ id: 't3', make: 'Scania', model: 'biggest', color: 'green' });
trucks$.next({ id: 't4', make: 'Renault', model: 'small', color: 'black' });
trucks$.next({ id: 't5', make: 'Ford', model: 'smaller', color: 'red' });
trucks$.next({ id: 't6', make: 'DAF', model: 'smallest', color: 'black' });
trucks$.next({ id: 't7', make: 'Volvo', model: 'swedish', color: 'silver' });

// delayed
setTimeout(() => {
  cars$.next({ id: 'c12', make: 'McLaren', model: 'P1', color: 'blue' });
  cars$.next({ id: 'c13', make: 'Koenigsegg', model: 'One:1', color: 'blue' });
}, 1000)