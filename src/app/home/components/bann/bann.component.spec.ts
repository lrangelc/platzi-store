import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannComponent } from './bann.component';

describe('BannComponent', () => {
  let component: BannComponent;
  let fixture: ComponentFixture<BannComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
