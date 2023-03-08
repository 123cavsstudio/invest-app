import { AccountApi } from "@domain/account/ports/account.api";
import { Observable } from "rxjs";
import { Account } from "src/domain/account/entitites/account";

export class RetrieveAccountsUseCase {

    constructor(private readonly accountApi: AccountApi) {}

    execute(): Observable<Account[]> {
        return this.accountApi.getAccounts();
    }

}