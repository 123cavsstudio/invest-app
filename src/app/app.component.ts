import { AccountInMemoryApi } from '@adapters/account/in-memory/account.in-memory.api';
import { Component, OnInit, isDevMode } from '@angular/core';
import { Account } from '@domain/account/entitites/account';
import { RetrieveAccountsUseCase } from '@domain/account/usecases/retrieve-accounts/retrieve-accounts.usecase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private readonly retrieveAccountsUseCase: RetrieveAccountsUseCase) {}

  title = 'invest-app';
  account$: Observable<Account[]> | undefined;

  ngOnInit(): void {
    this.account$ = this.retrieveAccountsUseCase.execute();

    if (isDevMode())
      console.log('DEV MODE méné')
    else
      console.log('Man tu pars en mode PROD ?')
  }

}
