import { Account } from "@domain/account/entitites/account";
import { AccountApi } from "@domain/account/ports/account.api";
import { Observable, of } from "rxjs";

export class AccountInMemoryApi implements AccountApi {
  
  accounts: Account[] = [
    { id: "1", label: "account_1", type: "type_1" },
    { id: "2", label: "account_2", type: "type_2" }
  ];
  
  getAccounts(): Observable<Account[]> {
    return of(this.accounts);
  }
  
}