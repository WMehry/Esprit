import { Component } from '@angular/core';
import { FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css'],
})
export class FormApartmentComponent {
  apartForm = new FormGroup({
    id: new FormGroup(''),
    appartNum: new FormGroup('',Validators.required),
    surface: new FormGroup('',Validators.required),
    terrace: new FormGroup('',Validators.required),
    surfaceTerrace: new FormGroup('',Validators.required),
    category: new FormGroup('',Validators.required),
    description: new FormGroup('',Validators.required),
    residence: new FormGroup('',Validators.required),
  }); 
}
