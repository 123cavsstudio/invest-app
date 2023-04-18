import { AccountResponseDto } from "@adapters/account/api/http-responses/account.response.dto";
import { AccountsResponseDto } from "@adapters/account/api/http-responses/accounts.response.dto";
import { AccountMapper } from "@adapters/account/api/mappers/account.mapper";
import { Account } from "@domain/account/entitites/account";

describe(`AccountMapper`, () => {

  it('Should map account dto to account', () => {
    const expectedAccount: Account = {
      id: '1',
      label: 'an_account',
      type: 'a_type'
    };
    const accountResponseDto: AccountResponseDto = {
      id: "1",
      name: "an_account",
      accountType: "a_type"
    };

    const result: Account = AccountMapper.toAccount(accountResponseDto);

    expect(result).toEqual(expectedAccount);
  });

  it('Should map accounts dto to accounts', () => {
    const expectedAccounts: Account[] = [
      { id: '1', label: 'account_1', type: 'type_1' },
      { id: '2', label: 'account_2', type: 'type_2' }
    ];
    const accountsResponseDto: AccountsResponseDto = {
      results: [
        { id: "1", name: "account_1", accountType: "type_1" },
        { id: "2", name: "account_2", accountType: "type_2" }
      ]
    };

    const results: Account[] = AccountMapper.toAccounts(accountsResponseDto);

    expect(results).toEqual(expectedAccounts);
  });

});