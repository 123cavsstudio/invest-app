import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RetrieveAccountsUseCase } from '@domain/account/usecases/retrieve-accounts/retrieve-accounts.usecase';
import { mock } from 'jest-mock-extended';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    const mockRetrieveAccountsUseCase = mock<RetrieveAccountsUseCase>();
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: RetrieveAccountsUseCase,
          useValue: mockRetrieveAccountsUseCase
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'invest-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('invest-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('invest-app');
  });
});
