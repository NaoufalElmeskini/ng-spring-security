import {ComponentFixture, TestBed} from '@angular/core/testing';

import {componentAComponent} from './component-a.component';

describe('UploadComponent', () => {
  let component: componentAComponent;
  let fixture: ComponentFixture<componentAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [componentAComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(componentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
