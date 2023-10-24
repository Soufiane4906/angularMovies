import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  form: FormGroup;

  SaveChanges(): void {
    this.router.navigate(['/genres'])
  }
  GetErrorMesssage(){

const field =this.form.get('name')
if (field.hasError('required')) {
  return 'Name field is Required'
}
if (field.hasError('minLength')) {
  return 'Name field should be less than 50 '
}
return ""
  }

  constructor(private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ["", {

        validators: [Validators.required,
        Validators.minLength(2)
        ]
      }]

    });

  }
}

