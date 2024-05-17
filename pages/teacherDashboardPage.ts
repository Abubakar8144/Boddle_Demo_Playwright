import { Locator , Page } from "playwright";
import {expect} from '@playwright/test';
import { BasePage } from "./basePage";

export class TeacherDashboardPage extends BasePage{

    readonly page: Page
    readonly wellcomeHeader: Locator
    readonly settingsButton: Locator
    readonly deleteClassDropDown: Locator
    readonly deleteModalText: Locator
    readonly deleteModalClassName: Locator
    readonly deletePasswordField:Locator
    readonly modalSubmitButton: Locator

    constructor(page){
        super(page)
        this.wellcomeHeader = page.locator("div.bdl-header-dt h1")
        this.settingsButton = page.locator('div.bdl-header-dt button').getByText("Settings").first()
        this.deleteClassDropDown = page.locator('div[data-popper-placement="bottom-start" ] a').getByText("Delete Class")
        this.deleteModalText = page.locator("#swal2-title")
        this. deleteModalClassName = page.locator("#swal2-html-container h3")
        this.deletePasswordField = page.locator("#delete_password")
        this.modalSubmitButton = page.locator("button.btn-danger")
    }

    async deleteClassRoom(classroomName:string){
        await this.settingsButton.click()
        await this.deleteClassDropDown.click()

        await expect(this.deleteModalText).toHaveText("Are you sure you want to delete this classroom?")
        await expect(this.deleteModalClassName).toHaveText(classroomName)
    
        await this.deletePasswordField.fill("DELETE")
        await this.modalSubmitButton.click()
    }
        
}