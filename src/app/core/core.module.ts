import { AccountHttpApi } from '@adapters/account/api/account.http.api';
import { AccountInMemoryApi } from '@adapters/account/in-memory/account.in-memory.api';
import { HttpClient } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { AccountApi } from '@domain/account/ports/account.api';
import { RetrieveAccountsUseCase } from '@domain/account/usecases/retrieve-accounts/retrieve-accounts.usecase';

export const IAccountApi = new InjectionToken<AccountApi>('AccountApi');

@NgModule({
  providers: [
    {
      provide: IAccountApi,
      deps: [HttpClient],
      //useValue: new AccountInMemoryApi()
      useFactory: (httpClient: HttpClient) => new AccountHttpApi(httpClient)
    },
    {
      provide: RetrieveAccountsUseCase,
      deps: [IAccountApi],
      useFactory: (accountApi: AccountApi) => new RetrieveAccountsUseCase(accountApi)
    },
    {
      provide: AccountHttpApi,
      deps: [HttpClient],
      useFactory: (httpClient: HttpClient) => new AccountHttpApi(httpClient)
    }
  ]
})
export class CoreModule { }
