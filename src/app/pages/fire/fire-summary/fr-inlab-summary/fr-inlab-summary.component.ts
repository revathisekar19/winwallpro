import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup} from "@angular/forms";
import {projectForm} from "../../../facade/shared/constants/facade.const";
import {isFieldVisible} from "../../shared/constants/facade.visible";

@Component({
  selector: 'app-fr-inlab-summary',
  templateUrl: './fr-inlab-summary.component.html',
  styleUrl: './fr-inlab-summary.component.scss'
})
export class FrInlabSummaryComponent {
  public inLabEditForm: FormGroup = projectForm();
  public isFieldVisible = (fieldName: string) => isFieldVisible(fieldName);
  public specimanType = ['CW', 'WW', 'HR', 'DR'];
}
