import { AccountsResponseDto } from "@adapters/account/api/http-responses/accounts.response.dto";
import { AccountMapper } from "@adapters/account/api/mappers/account.mapper";
import { HttpClient } from "@angular/common/http";
import { Account } from "@domain/account/entitites/account";
import { AccountApi } from "@domain/account/ports/account.api";
import { from, map, Observable } from "rxjs";

export class AccountHttpApi implements AccountApi {

  constructor(private readonly httpClient: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return from(this.httpClient
      .get<AccountsResponseDto>(`http://localhost:3100/accounts`))
      .pipe(map(AccountMapper.toAccounts));
  }

}