import { Observable } from 'rxjs';

import { AccountApi } from '@domain/account/ports/account.api';
import { Account } from '@domain/account/entitites/account';

export class RetrieveAccountsUseCase {
  constructor(private readonly accountApi: AccountApi) {}

  execute(): Observable<Account[]> {
    return this.accountApi.getAccounts();
  }
}
