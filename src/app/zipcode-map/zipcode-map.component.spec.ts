import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeMapComponent } from './zipcode-map.component';

describe('ZipcodeMapComponent', () => {
  let component: ZipcodeMapComponent;
  let fixture: ComponentFixture<ZipcodeMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZipcodeMapComponent]
    });
    fixture = TestBed.createComponent(ZipcodeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
