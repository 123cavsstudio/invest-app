import { Observable } from "rxjs";
import { Account } from "../entitites/account";

export interface AccountApi {
    getAccounts(): Observable<Account[]>;
}