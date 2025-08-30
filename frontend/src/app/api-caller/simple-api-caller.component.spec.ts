import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleApiCallerComponent} from './simple-api-caller.component';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {simpleInterceptor} from './simpleInterceptor';

describe('UploadComponent', () => {
  let component: SimpleApiCallerComponent;
  let fixture: ComponentFixture<SimpleApiCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleApiCallerComponent],
      providers: [provideHttpClient(withInterceptors([simpleInterceptor]))]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleApiCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
