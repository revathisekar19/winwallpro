import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup} from "@angular/forms";
import {projectForm} from "../../../facade/shared/constants/facade.const";
import {isFieldVisible} from "../../shared/constants/facade.visible";

@Component({
  selector: 'app-fr-onsite-summary',
  templateUrl: './fr-onsite-summary.component.html',
  styleUrl: './fr-onsite-summary.component.scss'
})
export class FrOnsiteSummaryComponent {
  public inLabEditForm: FormGroup = projectForm();
  public isFieldVisible = (fieldName: string) => isFieldVisible(fieldName);
  public specimanType = ['CW', 'WW', 'HR', 'DR'];
}
