import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { projectForm } from '../../shared/constants/facade.const';
import { isFieldVisible } from '../../shared/constants/facade.visible';

@Component({
  selector: 'app-fa-inlab-summary',
  templateUrl: './fa-inlab-summary.component.html',
  styleUrl: './fa-inlab-summary.component.scss'
})
export class FaInlabSummaryComponent {
  public inLabEditForm: FormGroup = projectForm();
  public isFieldVisible = (fieldName: string) => isFieldVisible(fieldName);
  public specimanType = ['CW', 'WW', 'HR', 'DR'];

  constructor() { }

}
