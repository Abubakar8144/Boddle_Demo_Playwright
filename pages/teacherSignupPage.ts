import { BasePage } from "./basePage";
import { Locator , Page } from "playwright";

export class TeacherSignupPage extends BasePage{
    
    readonly page : Page
    readonly emailForm : Locator

    constructor(page){
        super(page)
        this.emailForm = page.locator("#teacher_user_attributes_email")
    }

    emailFormElement(page:Page){
        return page.locator("#teacher_user_attributes_email")
    }

}