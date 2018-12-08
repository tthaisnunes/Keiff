import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToFindComponent } from './where-to-find.component';

describe('WhereToFindComponent', () => {
  let component: WhereToFindComponent;
  let fixture: ComponentFixture<WhereToFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereToFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereToFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
