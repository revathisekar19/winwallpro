import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, TemplateRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { defineElement } from "@lordicon/element";
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { cloneDeep } from 'lodash';
import lottie from 'lottie-web';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { IResponse } from 'src/app/shared/modal/response.modal';
import { IProfiles, IUser } from './shared/modals/users.interface';
import { UsersService } from './shared/services/users.service';
import { GlobalComponent } from 'src/app/global-component';
import { passwordValidation } from './shared/constants/users.const';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    NgSelectModule,
    FlatpickrModule,
    FormsModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    SearchPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  breadCrumbItems!: Array<{}>;
  dataSource: any = [];
  private modalService = inject(NgbModal);
  usersForm: FormGroup;
  searchText = '';
  selection = new SelectionModel<IUser>(true, []);
  submitted = false;
  resetSubmitted = false;
  passwordField!: boolean;
  confirmField!: boolean;
  error = '';
  selectedUser!: IUser;
  createMode = true;
  totalElements = 0;
  page = 0;
  pageSize = 10;
  users!: IUser[];
  passresetForm!: UntypedFormGroup;

  roles: any = [
    { label: "Project Member", value: 'PM' },
    { label: "Project Lead", value: 'PL' },
    { label: "Admin", value: 'AD' }
  ];

  externalType: string[] = [
    '',
    'Customer',
    'Supplier',
    'Contractor'
  ]

  constructor(private userService: UsersService, private _fb: FormBuilder, public service: PaginationService) {
    defineElement(lottie.loadAnimation);

    this.service.pageSize = 6;
    this.usersForm = this._fb.group({
      userId: ["", Validators.required],
      userName: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      verifyEmail: "N",
      mobile: ["", Validators.required],
      verifyMobile: "N",
      role: "",
      validityYn: "N",
      validityYnCheck: "N",
      validTill: "",
      password: "",
      passwordConfirm: "",
      externalType: " ",
      externalName: null,
      activeStatus: "Y",
      dateCreated: "",
      dateModified: ""
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Users' }];

    this.passresetForm = this._fb.group({
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });

    this.getUsersList();
    passwordValidation();
  }

  getUsersList() {
    this.closeModal();
    this.userService.getUsersList({ LastEvaluatedKey: '' }).subscribe({
      next: (res: IResponse<IProfiles>) => {
        this.users = cloneDeep(res.result.profiles);
        this.dataSource = this.service.changePage(this.users);
      }
    })
  }

  changePage() {
    this.dataSource = this.service.changePage(this.users);
  }

  public validityChange(event: Event) {
    const validity = event.target as HTMLInputElement;
    this.usersForm.get('validityYnCheck')?.setValue(validity.checked);
    this.usersForm.get('validityYn')?.setValue(validity.checked ? 'Y' : 'N');
  }

  get allSelected(): boolean {
    return this.selection.selected.length === this.dataSource.length;
  }

  toggleMasterSelection() {
    if (this.allSelected) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource);
    }
  }

  /**
  * Password Hide/Show
  */
  togglepasswordField() {
    this.passwordField = !this.passwordField;
  }

  /**
 * Password Hide/Show
 */
  toggleconfirmField() {
    this.confirmField = !this.confirmField;
  }

  open(content: TemplateRef<any>) {
    this.createMode = true;
    this.usersForm = this._fb.group({
      userId: "",
      userName: "",
      email: "",
      verifyEmail: "N",
      mobile: "",
      verifyMobile: "N",
      role: "",
      validityYnCheck: false,
      validityYn: "N",
      validTill: "",
      password: "",
      passwordConfirm: "",
      externalType: "",
      externalName: null,
      activeStatus: "Y",
      dateCreated: new Date(),
      dateModified: new Date(),
    });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: "lg" });
  }

  get controls() {
    return this.usersForm.controls;
  }

  editUser(val: any, content: TemplateRef<any>) {
    this.createMode = false;
    this.usersForm.patchValue(val);
    this.modalService.open(content, { ariaLabelledBy: 'Edit Form', size: "lg" });
  }

  deleteUser(deleteContent: any, user: any) {
    this.selectedUser = user;
    this.modalService.open(deleteContent, { centered: true });
  }

  submit() {
    this.submitted = true;
    if (this.usersForm.valid) {
      if (!this.createMode) {
        /* const value = this.usersForm.getRawValue();
        value['dateModified'] = new Date();
        this.userService.updateUsers(this.usersForm.value).subscribe({
          next: () => {
            this.submitted = false;
            this.getUsersList();
          },
          error: () => { }
        }) */
      } else {
        this.userService.addUsers(this.usersForm.value).subscribe({
          next: () => {
            this.submitted = false;
            this.getUsersList();
          },
          error: () => { }
        })
      }
    }
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  changePassword(changeContent: any, user: any) {
    this.selectedUser = user;
    this.modalService.open(changeContent, { centered: true });
  }

  deleteMultipleUser() {
    const user = this.selection.selected.length > 0 ? this.selection.selected : [this.selectedUser];
    this.userService.deleteUsers({
      ...GlobalComponent.reqHeader,
      lockUserInfo: {
        comments: "",
        PK: user[0]['PK']
      }
    }).subscribe({
      next: () => {
        this.closeModal();
        this.getUsersList();
      },
      error: () => { }
    })
  }

  getErrors(control: string) {
    return this.submitted && this.controls[control] && this.controls[control].invalid;
  }

  onChangePassword() {
    this.resetSubmitted = true;

    if (this.passresetForm.invalid) {
      return;
    } else {
      this.userService.updatePassword({
        password: this.passresetForm.get('password')?.value
      }).subscribe({
        next: () => {
          this.getUsersList();
        }
      });
    }
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { mismatch: true };
  }
}
