import { BasePage } from "./basePage";
import { Locator , Page } from "playwright";

export class StudentSignupPage extends BasePage{

    readonly page: Page
    readonly usernameForm: Locator

    constructor(page){
        super(page)
        this.usernameForm = page.locator("#login_username")
    }

    usernameFormElement(page:Page){
        return page.locator("#login_username")
    }
    

}