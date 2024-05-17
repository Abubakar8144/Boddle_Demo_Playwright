import { BasePage } from "./basePage";
import { Locator , Page } from "playwright";

export class LoginPage extends BasePage{

    readonly page: Page
    readonly emailField: Locator
    readonly passwordField: Locator
    readonly submitButton: Locator
    readonly alertDanger: Locator

    constructor(page){
        super(page)
        this.emailField = page.locator("#teacher_email")
        this.passwordField = page.locator("#teacher_password")
        this.submitButton = page.locator("#kt_login_form_submit")
        this.alertDanger = page.locator(".alert.alert-danger")
    }

    async performLogin(email, password){
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.submitButton.click() 
    }


    
}