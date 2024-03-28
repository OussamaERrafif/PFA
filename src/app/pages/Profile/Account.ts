import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  template: `
    <!-- component -->
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
        <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm">
                        <div class="block">
                            <label for="first_name">First Name</label>
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                            />
                        </div>
                        
                        <div class="block mt-4">
                            <label for="last_name">Last Name</label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                            />
                        </div>

                        <div class="block mt-4">
                            <label for="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                            />
                        </div>

                        <div class="block mt-4">
                            <label for="email">Email Address</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                                placeholder="email@domain.com"
                            />
                        </div>

                        <div class="block mt-4">
                            <label for="address">Address / Street</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                                placeholder=""
                            />
                        </div>

                        <div class="block mt-4">
                            <label for="city">City</label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                                placeholder=""
                            />
                        </div>

                        <div class="block mt-4">
                            <label for="country">Country / region</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <input
                                    name="country"
                                    id="country"
                                    placeholder="Country"
                                    class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                    value=""
                                />
                                <button
                                    tabindex="-1"
                                    class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                                >
                                    <svg
                                        class="w-4 h-4 mx-2 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <button
                                    tabindex="-1"
                                    for="show_more"
                                    class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                                >
                                    <svg
                                        class="w-4 h-4 mx-2 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="block mt-4">
                            <label for="state">State / province</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                <input
                                    name="state"
                                    id="state"
                                    placeholder="State"
                                    class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                    value=""
                                />
                                <button
                                    tabindex="-1"
                                    class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                                >
                                    <svg
                                        class="w-4 h-4 mx-2 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <button
                                    tabindex="-1"
                                    for="show_more"
                                    class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                                >
                                    <svg
                                        class="w-4 h-4 mx-2 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="block mt-4">
                            <label for="zipcode">Zipcode</label>
                            <input
                                type="text"
                                name="zipcode"
                                id="zipcode"
                                class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder=""
                                value=""
                            />
                        </div>

                        <div class="block mt-4">
                            <div class="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="billing_same"
                                    id="billing_same"
                                    class="form-checkbox"
                                />
                                <label for="billing_same" class="ml-2">
                                    My billing address is different than above.
                                </label>
                            </div>
                        </div>

                        <div class="block mt-4 text-right">
                            <div class="inline-flex items-end">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  `,
})
export class AccountComponent {
  // Component logic goes here
}
