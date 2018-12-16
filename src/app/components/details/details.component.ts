import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detailsForm: FormGroup;

  constructor(
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit(): void {
    this.detailsForm = this.fb.group({
      elementName: '',
      connection_point: '',
      line_length: '',
      wire_gauge: '',
      connecting_systems: '',
      comment: ''
    });
  }

  onSubmit(): void {
    console.log('submit_works');
  }
}
