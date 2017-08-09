import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { News } from '../../models/news';

import { NavigationService } from '../../services/navigation.service';
import { NewsServices } from '../../services/news.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newsForm: FormGroup;

  constructor(
    private navigationService: NavigationService,
    private formBuilder: FormBuilder,
    private newsServices: NewsServices
  ) {
    this.createForm();
  }

  ngOnInit() {
  }
  
  onSubmit() {
    this.newsServices.addNews(this.newsForm.value.title, this.newsForm.value.description)
    .then(() => {
      this.onGoBack();
    });
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
