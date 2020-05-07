import { Injectable } from '@angular/core';
import { Promotion } from '../shared/Promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  
  getPromotions(): Observable<Promotion[]> {
    // Simulate server latency with 2 second delay
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromotion(id: string): Observable<Promotion> {
    // Simulate server latency with 2 second delay
    return of(PROMOTIONS.filter((Promotion) => (Promotion.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    // Simulate server latency with 2 second delay
    return of(PROMOTIONS.filter((Promotion) => Promotion.featured)[0]).pipe(delay(2000));
  }  

  constructor() { }
}
