import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorItemsComponent } from './author-items.component';

describe('AuthorItemsComponent', () => {
  let component: AuthorItemsComponent;
  let fixture: ComponentFixture<AuthorItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
