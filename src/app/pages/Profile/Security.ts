import { Component } from '@angular/core';

@Component({
    selector: 'app-security',
    standalone: true,
    template: `
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
    <div class="container max-w-screen-lg mx-auto">
        <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div class="lg:col-span-2">
                    <div class="grid gap-4 gap-y-2 text-sm">
                        
                        <div class="block">
                            <label for="old_pass">Old Password</label>
                            <input
                                type="password"
                                name="old_pass"
                                id="old_pass"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                            />
                        </div>

                        <div class="block mt-4">
                            <label for="new_pass">New Password</label>
                            <input
                                type="password"
                                name="new_pass"
                                id="new_pass"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                value=""
                            />
                        </div>

                        <div class="block mt-4">
                            <label for="forgot_password">Forgot Password?</label>
                            <a href="#" class="text-blue-500 hover:underline">Reset Password</a>
                        </div>

                        <div class="block mt-4">
                            <div class="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="enable_2fa"
                                    id="enable_2fa"
                                    class="form-checkbox"
                                />
                                <label for="enable_2fa" class="ml-2">
                                    Enable 2 Factor Authentication
                                </label>
                            </div>
                        </div>

                        <div class="block mt-4">
                            <div class="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="sign_out_all"
                                    id="sign_out_all"
                                    class="form-checkbox"
                                />
                                <label for="sign_out_all" class="ml-2">
                                    Sign off from all accounts
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
export class SecurityComponent {}