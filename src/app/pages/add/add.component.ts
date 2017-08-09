import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  isSubmitted: boolean = false;

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
    this.isSubmitted = true;

    if (this.newsForm.invalid) {
      return;
    }

    this.newsServices.addNews(this.newsForm.value.title, this.newsForm.value.description)
      .then(() => {
        this.onGoBack();
        this.isSubmitted = false;
      });
      
  }

  createForm() {
    this.newsForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  onGoBack() {
    this.navigationService.goBack();
  }

}
