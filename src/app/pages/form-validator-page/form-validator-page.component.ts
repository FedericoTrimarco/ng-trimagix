import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { HookFunctions } from 'ng-trimagix';

@Component({
  selector: 'app-form-validator-page',
  imports: [CommonModule, MatTabsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-validator-page.component.html',
  styleUrl: './form-validator-page.component.scss',
  standalone: true,
  providers: [HookFunctions]
})
export class FormValidatorPageComponent {

  formLogin!: FormGroup;
  formLoginMessage!: FormGroup;
  formMessageArray!: FormGroup;

  codeBlocksTs: any[] = [
    {
      titleBlock: "Simple Validator",
      description: "",
      codeString: `
        import { CommonModule } from '@angular/common';
        import { Component } from '@angular/core';
        import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
        import { MatTabsModule } from '@angular/material/tabs';
        import { HookFunctions } from 'ng-trimagix';
        
        @Component({
          selector: 'app-form-validator-page',
          imports: [CommonModule, MatTabsModule, FormsModule, ReactiveFormsModule],
          templateUrl: './form-validator-page.component.html',
          styleUrl: './form-validator-page.component.scss',
          standalone: true,
          providers: [HookFunctions]
        })
        export class InstallationPageComponent {

          formLogin!: FormGroup;

          constructor(
            private hf: HookFunctions
          ){

            this.setupFormLogin();

          }
          
          setupFormLogin(){
            this.formLogin = this.fb.group(
              {
                username: new FormControl("", Validators.required),
                password: new FormControl("", Validators.required)
              }
            )
          }

          submitForm(){

            if(!this.hf.validateFormByFormGroupAndFormId(this.formLogin, "formLogin")){
              return;
            }
        
            window.alert("Login success");
        
          }
        }
      `
    },
    {
      titleBlock: "Validator whith error message",
      description: "When using this.hf.validateFormByFormGroupAndFormId you just need to pass the third argument to true",
      codeString: `
        import { CommonModule } from '@angular/common';
        import { Component } from '@angular/core';
        import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
        import { MatTabsModule } from '@angular/material/tabs';
        import { HookFunctions } from 'ng-trimagix';
        
        @Component({
          selector: 'app-form-validator-page',
          imports: [CommonModule, MatTabsModule, FormsModule, ReactiveFormsModule],
          templateUrl: './form-validator-page.component.html',
          styleUrl: './form-validator-page.component.scss',
          standalone: true,
          providers: [HookFunctions]
        })
        export class InstallationPageComponent {

          formLogin!: FormGroup;

          constructor(
            private hf: HookFunctions
          ){

            this.setupFormLogin();

          }
          
          setupFormLogin(){
            this.formLogin = this.fb.group(
              {
                username: new FormControl("", Validators.required),
                password: new FormControl("", Validators.required)
              }
            )
          }

          submitForm(){

            if(!this.hf.validateFormByFormGroupAndFormId(this.formLogin, "formLogin", true)){
              return;
            }
        
            window.alert("Login success");
        
          }
        }
      `
    },
    {
      titleBlock: "Validator whith error message (Form Array)",
      description: "When using this.hf.validateFormByFormGroupAndFormId you can customize the error message by passing a list of strings as the fourth argument",
      codeString: `
        import { CommonModule } from '@angular/common';
        import { Component } from '@angular/core';
        import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
        import { MatTabsModule } from '@angular/material/tabs';
        import { HookFunctions } from 'ng-trimagix';
        
        @Component({
          selector: 'app-form-validator-page',
          imports: [CommonModule, MatTabsModule, FormsModule, ReactiveFormsModule],
          templateUrl: './form-validator-page.component.html',
          styleUrl: './form-validator-page.component.scss',
          standalone: true,
          providers: [HookFunctions]
        })
        export class InstallationPageComponent {

          formMessageArray!: FormGroup;

          constructor(
            private hf: HookFunctions
          ){

            this.setupFormMessageArray();

          }
          
          setupFormMessageArray(){
            this.formMessageArray = this.fb.group(
              {
                name: new FormControl("", Validators.required),
                surname: new FormControl("", Validators.required),
                emailList: this.fb.array([]),
                cellNumberList: this.fb.array([]),
              }
            )

            this.addEmail();
            this.addCellNumber();
          }

          get emailList(): FormArray {
            return this.formMessageArray.get('emailList') as FormArray;
          }
        
          get cellNumberList(): FormArray {
            return this.formMessageArray.get('cellNumberList') as FormArray;
          }
        
          createEmailGroup(): FormGroup {
            return this.fb.group({
              email: ['', [Validators.required, Validators.email]],
            });
          }
        
          createCellNumberGroup(): FormGroup {
            return this.fb.group({
              cellNumber: ['', Validators.required],
            });
          }
        
          addEmail() {
            this.emailList.push(this.createEmailGroup());
          }
        
          addCellNumber() {
            this.cellNumberList.push(this.createCellNumberGroup());
          }

          submitFormMessageArray(){

            if(!this.hf.validateFormByFormGroupAndFormId(this.formMessageArray, "formMessageArray", true, <span class="text-warning">["Email List", "Cell numbers"]</span>)){
              return;
            }
        
            window.alert("Form controls success");
        
          }
        }
      `
    },
  ]

  codeBlocksHtml: any[] = [
    {
      titleBlock: "Simple Validator",
      description: "",
      codeString: this.escapeHtml(`
      <form class="form-row" [formGroup]="formLogin" id="formLogin">
        <div class="col-12 col-md-6 d-flex flex-column mt-2">
            <label>Username</label>
            <input class="form-control" type="text" placeholder="Username" formControlName="username">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column mt-3">
            <label>Password</label>
            <input class="form-control" type="password" placeholder="Password" formControlName="password">
        </div>
        <div class="col-12 mt-4">
            <button class="btn-neon light round basic-width" type="button" (click)="submitForm()">Login</button>
        </div>
      </form>`)
    },
    {
      titleBlock: "Validator whith error message",
      description: "",
      codeString: this.escapeHtml(`
      <form class="form-row" [formGroup]="formLogin" id="formLogin">
        <div class="col-12 col-md-6 d-flex flex-column mt-2">
            <label>Username</label>
            <input class="form-control" type="text" placeholder="Username" formControlName="username">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column mt-3">
            <label>Password</label>
            <input class="form-control" type="password" placeholder="Password" formControlName="password">
        </div>
        <div class="col-12 mt-4">
            <button class="btn-neon light round basic-width" type="button" (click)="submitForm()">Login</button>
        </div>
      </form>`)
    },
    {
      titleBlock: "Validator whith error message (Form Array)",
      description: "When using this.hf.validateFormByFormGroupAndFormId you can customize the error message by passing a list of strings as the fourth argument",
      codeString: this.escapeHtml(`
      <form class="form-row" [formGroup]="formMessageArray" id="formMessageArray">
        <div class="col-12 col-md-6 d-flex flex-column mt-2">
            <label>Name</label>
            <input class="form-control" type="text" placeholder="Name" formControlName="name">
        </div>
        <div class="col-12 col-md-6 d-flex flex-column mt-3">
            <label>surname</label>
            <input class="form-control" type="surname" placeholder="Surname" formControlName="surname">
        </div>
        <div class="col-12 mt-3" formArrayName="emailList">
            <h6>Email List:</h6>
            <div class="p-3">
                <div class="row mb-3" *ngFor="let group of emailList.controls; let i = index" [formGroupName]="i">
                    <div class="col-3">
                        <label for="" class="label">
                            {{i+1}}. Email
                        </label>
                        <input type="text" class="form-control" id="email-{{i}}" formControlName="email" placeholder="Email">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-3" formArrayName="cellNumberList">
            <h6>Numbers List:</h6>
            <div class="p-3">
                <div class="row mb-3" *ngFor="let group of cellNumberList.controls; let i = index" [formGroupName]="i">
                    <div class="col-3">
                        <label for="" class="label">
                            {{i+1}}. Cell
                        </label>
                        <input type="text" class="form-control" id="cellNumber-{{i}}" formControlName="cellNumber" placeholder="Cell">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 mt-4">
            <button class="btn-neon light round basic-width" type="button" (click)="submitFormMessageArray()">Save</button>
        </div>
      </form>`)
    },
  ]

  constructor(
    private hf: HookFunctions,
    private fb: FormBuilder
  ) {

    this.scrollWindowToTop();
    this.setupAllForms();

  }

  scrollWindowToTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 500);
  }

  setupAllForms(){

    this.formLogin = this.fb.group(
      {
        username: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      }
    )

    this.formLoginMessage = this.fb.group(
      {
        username: new FormControl("", Validators.required),
        password: new FormControl("", Validators.required)
      }
    )

    this.formMessageArray = this.fb.group(
      {
        name: new FormControl("", Validators.required),
        surname: new FormControl("", Validators.required),
        emailList: this.fb.array([]),
        cellNumberList: this.fb.array([]),
      }
    )

    this.addEmail();
    this.addEmail();
    this.addCellNumber();
    this.addCellNumber();
  }

  get emailList(): FormArray {
    return this.formMessageArray.get('emailList') as FormArray;
  }

  get cellNumberList(): FormArray {
    return this.formMessageArray.get('cellNumberList') as FormArray;
  }

  createEmailGroup(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  createCellNumberGroup(): FormGroup {
    return this.fb.group({
      cellNumber: ['', Validators.required],
    });
  }

  addEmail() {
    this.emailList.push(this.createEmailGroup());
  }

  addCellNumber() {
    this.cellNumberList.push(this.createCellNumberGroup());
  }

  submitForm(){

    if(!this.hf.validateFormByFormGroupAndFormId(this.formLogin, "formLogin")){
      return;
    }

    window.alert("Login success");

  }

  submitFormMessage(){

    if(!this.hf.validateFormByFormGroupAndFormId(this.formLoginMessage, "formLoginMessage", true)){
      return;
    }

    window.alert("Login success");

  }

  submitFormMessageArray(){

    if(!this.hf.validateFormByFormGroupAndFormId(this.formMessageArray, "formMessageArray", true, ["Email List", "Cell numbers"])){
      return;
    }

    window.alert("Form controls success");

  }

  escapeHtml(html: string): string {
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }



}
