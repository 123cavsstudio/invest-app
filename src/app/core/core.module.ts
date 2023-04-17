import { AccountInMemoryApi } from '@adapters/account/in-memory/account.in-memory.api';
import { InjectionToken, NgModule } from '@angular/core';
import { AccountApi } from '@domain/account/ports/account.api';
import { RetrieveAccountsUseCase } from '@domain/account/usecases/retrieve-accounts/retrieve-accounts.usecase';

const IAccountApi = new InjectionToken<AccountApi>('AccountApi')

@NgModule({
  providers: [
    {
      provide: IAccountApi,
      useValue: new AccountInMemoryApi()
    },
    {
      provide: RetrieveAccountsUseCase,
      deps: [IAccountApi],
      useFactory: (accountApi: AccountApi) => new RetrieveAccountsUseCase(accountApi)
    }
  ]
})
export class CoreModule { }
