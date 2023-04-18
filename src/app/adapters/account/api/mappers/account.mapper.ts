import { AccountResponseDto } from "@adapters/account/api/http-responses/account.response.dto";
import { AccountsResponseDto } from "@adapters/account/api/http-responses/accounts.response.dto";
import { Account } from "@domain/account/entitites/account";

export class AccountMapper {

  static toAccounts(accountsResponseDto: AccountsResponseDto): Account[] {
    return accountsResponseDto.results.map(AccountMapper.toAccount);
  }

  static toAccount(accountResponseDto: AccountResponseDto): Account {
    return {
      id: accountResponseDto.id,
      label: accountResponseDto.name,
      type: accountResponseDto.accountType
    }
  }

}