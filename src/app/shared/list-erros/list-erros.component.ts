import { Component, Input } from '@angular/core';
import { Errors } from '../../core/models';

@Component({
  selector: 'app-list-erros',
  templateUrl: './list-erros.component.html',
  styleUrls: ['./list-erros.component.scss']
})
export class ListErrosComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${key} ${errorList.errors[key]}`);
  }

  get errorList() { return this.formattedErrors; }

}