import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpformComponent } from './rsvpform.component';

describe('RsvpformComponent', () => {
  let component: RsvpformComponent;
  let fixture: ComponentFixture<RsvpformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsvpformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsvpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
