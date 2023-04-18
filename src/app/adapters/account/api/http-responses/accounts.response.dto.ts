import { AccountResponseDto } from "@adapters/account/api/http-responses/account.response.dto";

export interface AccountsResponseDto {
  results: AccountResponseDto[];
}