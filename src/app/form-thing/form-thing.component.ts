import { Component, OnInit } from '@angular/core';
import { FormThingService } from '../form-thing.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicForm } from '../../model/form';

@Component({
  selector: 'app-form-thing',
  templateUrl: './form-thing.component.html',
  styleUrl: './form-thing.component.css'
})
export class FormThingComponent implements OnInit {
  form: FormGroup = new FormGroup([]);
  data: DynamicForm = {};
  Object = Object;

  constructor(private fb: FormBuilder, private formThingService: FormThingService) { }

  ngOnInit() {
    this.formThingService.fetchForm().subscribe((data: DynamicForm) => {
      this.data = data;

      this.form = this.fb.group(
        Object.keys(this.data).reduce((obj: any, item: string) => {
          obj[item] = new FormControl('', [Validators.required]);
          return obj;
        }, {})
      );
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.formThingService.sendForm(
        Object.keys(this.data).reduce((obj: any, item: string) => {
          obj[item] = this.form.get(item)!.value;
          return obj;
        }, {})
      );
    } else {
      console.log("Invalid");
    }
  }
}
