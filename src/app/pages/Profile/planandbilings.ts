import { Component } from '@angular/core';
import '../../../styles.css';

@Component({
  selector: 'app-plan-and-billings',
  standalone: true,

  template: `
    <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div class="container max-w-screen-lg mx-auto">
        <div>
          <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm">
                <section
                  class="py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16"
                >
                  <div
                    class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl"
                  >
                    <div
                      class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200"
                    >
                      <h2
                        id="pricing"
                        class="box-border m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-2xl md:text-2xl"
                      >
                        Chose Pricing
                      </h2>
                      <p
                        class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"
                      ></p>
                    </div>

                    <div
                      id="pricing"
                      class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
                    >
                      <!-- Price 1 -->
                      <div
                        class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8"
                      >
                        <h3
                          class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl"
                        >
                          Starter
                        </h3>
                        <div
                          class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200"
                        >
                          <p
                            class="box-border m-0 text-6xl font-semibold leading-none border-solid"
                          >
                            $1
                          </p>
                          <p
                            class="box-border m-0 border-solid"
                            style="border-image: initial;"
                          >
                            / month
                          </p>
                        </div>
                        <ul
                          class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200"
                        >
                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            1 Website
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            SSL (HTTPS)
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            SiteFast Domain
                          </li>
                        </ul>
                        <a
                          href="#"
                          class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-gray-600 no-underline bg-transparent border border-gray-600 rounded-md cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-base md:text-lg"
                        >
                          Select
                        </a>
                      </div>
                      <!-- Price 2 -->
                      <div
                        class="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-gray-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16"
                      >
                        <h3
                          class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl"
                        >
                          Basic
                        </h3>
                        <div
                          class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200"
                        >
                          <p
                            class="box-border m-0 text-6xl font-semibold leading-none border-solid"
                          >
                            $29
                          </p>
                          <p
                            class="box-border m-0 border-solid"
                            style="border-image: initial;"
                          >
                            / month
                          </p>
                        </div>
                        <ul
                          class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200"
                        >
                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            15 Websites
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            SSL (HTTPS)
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Custom Domain
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            SiteFast Branding Removal
                          </li>
                        </ul>

                        <a
                          href="#"
                          class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-gray-600 border rounded-md cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-base md:text-lg"
                        >
                          Selected
                        </a>
                      </div>
                      <!-- Price 3 -->
                      <div
                        class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8"
                      >
                        <h3
                          class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl"
                        >
                          Plus
                        </h3>
                        <div
                          class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200"
                        >
                          <p
                            class="box-border m-0 text-6xl font-semibold leading-none border-solid"
                          >
                            $49
                          </p>
                          <p
                            class="box-border m-0 border-solid"
                            style="border-image: initial;"
                          >
                            / month
                          </p>
                        </div>

                        <ul
                          class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200"
                        >
                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            50 Websites
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            SSL (HTTPS)
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Custom Domain
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            SiteFast Branding Removal
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Google Analytics
                          </li>

                          <li
                            class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid"
                          >
                            <svg
                              class="w-5 h-5 mr-2 font-semibold leading-7 text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            Email Integration
                          </li>
                        </ul>
                        <a
                          href="#"
                          class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-gray-600 no-underline bg-transparent border border-gray-600 rounded-md cursor-pointer hover:bg-gray-700 hover:border-gray-700 hover:text-white focus-within:bg-gray-700 focus-within:border-gray-700 focus-within:text-white sm:text-base md:text-lg"
                        >
                          Select
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                <div
                  class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200"
                >
                  <h2
                    id="pricing"
                    class="box-border m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-2xl md:text-2xl"
                  >
                    Update payment details:
                  </h2>
                  <p
                    class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"
                  ></p>
                </div>
                <div class="bg-white min-h-56 flex justify-center items-center">
                  <div class="space-y-16">
                    <div
                      class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110"
                    >
                      <div
                        class="relative object-cover w-full h-full rounded-xl bg-gradient-to-br from-gray-400 to-gray-500"
                      ></div>

                      <div class="w-full px-8 absolute top-8">
                        <div class="flex justify-between">
                          <div class="">
                            <p class="font-light">Name</p>
                            <p class="font-medium tracking-widest">
                              {{ CardHolder }}
                            </p>
                          </div>
                        </div>
                        <div class="pt-1">
                          <p class="font-light">Card Number</p>
                          <p class="font-medium tracking-more-wider">
                            {{ CardNumber }}
                          </p>
                        </div>
                        <div class="pt-6 pr-6">
                          <div class="flex justify-between">
                            <div class="">
                              <p class="font-light text-xs">Valid</p>
                              <p class="font-medium tracking-wider text-sm">
                                {{ Valid }}
                              </p>
                            </div>
                            <div class="">
                              <p class="font-light text-xs ">Expiry</p>
                              <p class="font-medium tracking-wider text-sm">
                                {{ Expiry }}
                              </p>
                            </div>

                            <div class="">
                              <p class="font-light text-xs">CVV</p>
                              <p class="font-bold tracking-more-wider text-sm">
                                {{ CVV }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="block mt-4">
                <label for="card_number">Card Holder</label>
                <input
                  type="text"
                  name="card_holder"
                  id="card_holder"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder="John Doe"
                  (change)="handleCardHolder($event)"
                />
              </div>

              <div class="block mt-4">
                <label for="card_number">Card Number</label>
                <input
                  type="text"
                  name="card_number"
                  id="card_number"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder="**** **** **** 1234"
                  (change)="handleCardNumber($event)"
                />
              </div>

              <div class="block mt-4">
                <label for="expiry_date">Expiry Date</label>
                <input
                  type="text"
                  name="expiry_date"
                  id="expiry_date"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder="MM/YY"
                  (change)="handleExpiry($event)"
                />
              </div>

              <div class="block mt-4">
                <label for="cvv">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  id="cvv"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value=""
                  placeholder="***"
                  (change)="handleCVV($event)"
                />
              </div>

              <div class="block mt-4">
                <div class="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="save_card"
                    id="save_card"
                    class="form-checkbox"
                  />
                  <label for="save_card" class="ml-2">
                    Save payment details for future use
                  </label>
                </div>
              </div>

              <div class="block mt-4 text-right">
                <div class="inline-flex items-end">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
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
  `,
})
export class PlanAndBillingsComponent {
  // Component logic goes here
  CardHolder: string = '';
  CardNumber: string = '';
  Valid: string = '';
  Expiry: string = '';
  CVV: string = '';

  handleCardNumber(event: Event) {
    const cardNumber = (event.target as HTMLInputElement).value;
    this.CardNumber = cardNumber;
  }
  handleCardHolder(event: Event) {
    const cardHolder = (event.target as HTMLInputElement).value;
    this.CardHolder = cardHolder;
  }
  handleValid(event: Event) {
    const valid = (event.target as HTMLInputElement).value;
    this.Valid = valid;
  }
  handleExpiry(event: Event) {
    const expiry = (event.target as HTMLInputElement).value;
    this.Expiry = expiry;
  }
  handleCVV(event: Event) {
    const cvv = (event.target as HTMLInputElement).value;
    this.CVV = cvv;
  }
}
