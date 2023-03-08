import { Account } from "@domain/account/entitites/account";
import { AccountApi } from "@domain/account/ports/account.api";
import { RetrieveAccountsUseCase } from "@domain/account/usecases/retrieve-accounts/retrieve-accounts.usecase";
import { Observable, of } from "rxjs";

describe("RetrieveAccountsUseCase", () => {

  test("Should return accounts", async() => {
    // Given
    const expectedAccounts: Account[] = [
      { id: "1", label: "account_1", type: "type_1" },
      { id: "2", label: "account_2", type: "type_2" }
    ];
    const api: AccountApi = {
      getAccounts: () => of(expectedAccounts)
    };
    const useCase = new RetrieveAccountsUseCase(api);

    // When
    useCase.execute().subscribe((accounts: Account[]) => {
      // Then
      expect(accounts).toEqual(expectedAccounts);
    });
  })

});