import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { News } from '../../models/news';

import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newsForm: FormGroup;

  constructor(
    private navigationService: NavigationService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log('Added!');
  }

  createForm() {
    this.newsForm = this.formBuilder.group({
      title: '',
      description: ''
    });
  }

  onGoBack() {
    this.navigationService.goBack();
  }

}
