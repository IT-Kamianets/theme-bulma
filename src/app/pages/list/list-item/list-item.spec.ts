import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
// 👇 Тут була помилка. Тепер імпортуємо правильне ім'я класу
import { ListPage } from './list-item'; 

describe('ListPage', () => {
  // 👇 Оновлюємо типи змінних
  let component: ListPage;
  let fixture: ComponentFixture<ListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // 👇 Додаємо компонент в imports
      imports: [ListPage],
      providers: [provideRouter([])],
    })
    .compileComponents();

    // 👇 Створюємо правильний компонент
    fixture = TestBed.createComponent(ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});