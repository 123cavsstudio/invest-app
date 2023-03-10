import { Account } from "@domain/account/entitites/account";
import { AccountApi } from "@domain/account/ports/account.api";
import { RetrieveAccountsUseCase } from "@domain/account/usecases/retrieve-accounts/retrieve-accounts.usecase";
import { Observable, of } from "rxjs";
import { mock } from "jest-mock-extended";

describe("RetrieveAccountsUseCase", () => {

  test("Should return accounts", async() => {
    // Given
    const expectedAccounts: Account[] = [
      { id: "1", label: "account_1", type: "type_1" },
      { id: "2", label: "account_2", type: "type_2" }
    ];
    const mockApi = mock<AccountApi>();
    mockApi.getAccounts.mockReturnValue(of(expectedAccounts));

    const useCase = new RetrieveAccountsUseCase(mockApi);

    // When
    useCase.execute().subscribe((accounts: Account[]) => {
      // Then
      expect(accounts).toEqual(expectedAccounts);
    });
  })

});