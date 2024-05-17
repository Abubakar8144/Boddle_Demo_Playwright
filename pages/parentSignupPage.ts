import { BasePage } from "./basePage";
import { Locator , Page } from "playwright";

export class ParentSignupPage extends BasePage {
    readonly page: Page
    readonly emailForm: Locator

    constructor(page){
        super(page)
        this.emailForm = page.getByPlaceholder("Email address")
    }

    emailFormElement(page:Page){
        return page.locator('input[id="parent_user_attributes_email"]')
    }
}