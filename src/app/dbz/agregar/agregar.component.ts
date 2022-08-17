import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  @Input() dbzForm!: FormGroup;

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
    this.dbzForm;
  }

  resetForm = () => {
    this.dbzService.opcion = 'CREAR';
  }

  insertar = () => {
    const personaje = this.dbzForm.value;

    if (this.dbzService.opcion === 'CREAR') {
      this.dbzService.save(personaje).subscribe(response => {
        this.dbzService.cargarData();
      });
    } else {
      this.dbzService.update(this.dbzService._id, personaje).subscribe(response => {
        this.dbzService.cargarData();
      });
    }
    this.dbzForm.reset();
    this.dbzService.opcion = 'CREAR';
  }
}

