import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MerchantEffects } from './merchant.effects';

describe('MerchantService', () => {
  let actions$: Observable<any>;
  let effects: MerchantEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MerchantEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(MerchantEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
