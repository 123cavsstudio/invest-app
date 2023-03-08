import { Observable } from 'rxjs';

import { Account } from '@domain/account/entitites/account';

export interface AccountApi {
  getAccounts(): Observable<Account[]>;
}
