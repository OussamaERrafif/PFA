import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div class="bg-white rounded shadow-lg p-6 md:p-8">
          <h2 class="text-2xl mb-6 text-center font-semibold">
            Security Settings
          </h2>
          <form [formGroup]="securityForm" (ngSubmit)="saveChanges()">
            <div class="grid gap-6 text-sm">
              <div class="block">
                <label for="old_pass" class="block text-gray-600"
                  >Old Password</label
                >
                <input
                  type="password"
                  formControlName="oldPassword"
                  id="old_pass"
                  class="h-10 px-4 border-2 border-gray-300 rounded w-full"
                />
              </div>

              <div class="block mt-4">
                <label for="new_pass" class="block text-gray-600"
                  >New Password</label
                >
                <input
                  type="password"
                  formControlName="newPassword"
                  id="new_pass"
                  class="h-10 px-4 border-2 border-gray-300 rounded w-full"
                />
              </div>

              <div class="block mt-4">
                <label for="forgot_password" class="block text-gray-600"
                  >Forgot Password?</label
                >
                <a href="#" class="text-blue-500 hover:underline"
                  >Reset Password</a
                >
              </div>

              <div class="block mt-4">
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"
                  ></div>
                  <span class="ms-3 text-sm font-medium text-black "
                    >Enable 2 Factor Authentication</span
                  >
                </label>
              </div>

              <div class="block mt-4">
                <div class="inline-flex items-center">
                  <input
                    type="checkbox"
                    formControlName="signOutAll"
                    id="sign_out_all"
                    class="h-5 w-5"
                  />
                  <span class="ml-2 text-gray-700"
                    >Sign off from all accounts</span
                  >
                </div>
              </div>

              <div class="text-right mt-6">
                <button
                  type="submit"
                  [disabled]="securityForm.invalid"
                  class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class SecurityComponent {
  securityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.securityForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      enable2FA: [false],
      signOutAll: [false],
    });
  }

  saveChanges(): void {
    if (this.securityForm.valid) {
      // Logic to save changes to backend or perform other actions
      console.log('Form submitted:', this.securityForm.value);
    }
  }
}
