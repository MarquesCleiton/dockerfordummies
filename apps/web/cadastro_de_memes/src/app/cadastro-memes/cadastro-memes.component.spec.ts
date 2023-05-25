import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMemesComponent } from './cadastro-memes.component';

describe('CadastroMemesComponent', () => {
  let component: CadastroMemesComponent;
  let fixture: ComponentFixture<CadastroMemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroMemesComponent]
    });
    fixture = TestBed.createComponent(CadastroMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
