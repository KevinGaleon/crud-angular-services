import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';
import { AgregarComponent } from '../agregar/agregar.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  dbzFormInit!: FormGroup;

  constructor(private readonly fb: FormBuilder, private dbzService: DbzService) {
  }

  ngOnInit(): void {
    this.dbzFormInit = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      codigo: new FormControl({value: 4, disabled: false}, [Validators.required]),
      nombre: ['Maestro Roshi', [Validators.required]],
      ciudad: ['Japon', [Validators.required]],
      poder: [80, [Validators.required]]
    });
  }

  setForm(personaje: Personaje){
    this.dbzService.opcion = 'EDITAR';
    console.log(this.dbzService.opcion);
    this.dbzFormInit.patchValue({
      codigo: personaje.codigo,
      nombre:personaje.nombre,
      ciudad: personaje.ciudad,
      poder: personaje.poder,
    });
  }

  nuevo(){
    this.dbzService.opcion = 'CREAR';
    this.dbzFormInit.patchValue({
      codigo: '',
      nombre: '',
      ciudad: '',
      poder: '',
    });
  }
}
