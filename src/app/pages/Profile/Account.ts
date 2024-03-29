import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
          <div class="bg-white rounded shadow-lg p-6 md:p-8">
              <h2 class="text-2xl mb-6 text-center font-semibold">User Information</h2>
              <form [formGroup]="accountForm" (ngSubmit)="saveChanges()">
                  <div class="grid gap-6 text-sm">
                      <div class="grid grid-cols-2 gap-6">
                          <div class="mb-6">
                              <label for="first_name" class="block text-gray-600">First Name</label>
                              <input type="text" formControlName="firstName" id="first_name" class="h-10 px-4 border-2 border-gray-300 rounded w-full" />
                          </div>

                          <div class="mb-6">
                              <label for="last_name" class="block text-gray-600">Last Name</label>
                              <input type="text" formControlName="lastName" id="last_name" class="h-10 px-4 border-2 border-gray-300 rounded w-full" />
                          </div>
                      </div>

                      <div class="mb-6">
                          <label for="username" class="block text-gray-600">Username</label>
                          <input type="text" formControlName="username" id="username" class="h-10 px-4 border-2 border-gray-300 rounded w-full" />
                      </div>

                      <div class="mb-6">
                          <label for="email" class="block text-gray-600">Email Address</label>
                          <input type="email" formControlName="email" id="email" class="h-10 px-4 border-2 border-gray-300 rounded w-full" placeholder="email@domain.com" />
                      </div>

                      <div class="mb-6">
                          <label for="address" class="block text-gray-600">Address / Street</label>
                          <input type="text" formControlName="address" id="address" class="h-10 px-4 border-2 border-gray-300 rounded w-full" />
                      </div>

                      <div class="grid grid-cols-4 gap-6">
                          <div class="mb-6">
                              <label for="city" class="block text-gray-600">City</label>
                              <input type="text" formControlName="city" id="city" class="h-10 px-4 border-2 border-gray-300 rounded w-full" />
                          </div>

                          <div class="mb-6">
                              <label for="country" class="block text-gray-600">Country / Region</label>
                              <div class="relative">
                                  <input type="text" formControlName="country" id="country" class="h-10 px-4 border-2 border-gray-300 rounded w-full pr-10" placeholder="Country" />
                                  <!-- SVGs and buttons omitted for brevity -->
                              </div>
                          </div>

                          <div class="mb-6">
                              <label for="state" class="block text-gray-600">State / Province</label>
                              <div class="relative">
                                  <input type="text" formControlName="state" id="state" class="h-10 px-4 border-2 border-gray-300 rounded w-full pr-10" placeholder="State" />
                                  <!-- SVGs and buttons omitted for brevity -->
                              </div>
                          </div>

                          <div class="mb-6">
                              <label for="zipcode" class="block text-gray-600">Zipcode</label>
                              <input type="text" formControlName="zipcode" id="zipcode" class="h-10 px-4 border-2 border-gray-300 rounded w-full" />
                          </div>
                      </div>

                      <div class="flex items-center">
                          <label class="inline-flex items-center cursor-pointer">
                              <input type="checkbox" formControlName="billingAddressCheck" class="h-5 w-5" id="check" />
                              <span class="ml-2 text-gray-700">My billing address is different than above.</span>
                          </label>
                      </div>

                      <div class="text-right mt-6">
                          <button type="submit" [disabled]="accountForm.invalid" class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
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
export class AccountComponent {
  accountForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      city: [''],
      country: [''],
      state: [''],
      zipcode: [''],
      billingAddressCheck: [false],
    });
  }

  saveChanges(): void {
    if (this.accountForm.valid) {
      // Logic to save changes to backend or perform other actions
      console.log('Form submitted:', this.accountForm.value);
    }
  }
}
