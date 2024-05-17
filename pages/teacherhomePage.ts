import { BasePage } from "./basePage";
import { Locator , Page } from "playwright";

export class TeacherHomePage extends BasePage{

    readonly page: Page
    readonly addNewClassroomButton: Locator
    readonly classroomNameField: Locator
    readonly mathCheckbox: Locator
    readonly englishCheckbox: Locator
    readonly gradeSelect: Locator
    readonly stateStandardSelect: Locator
    readonly createButton: Locator
    readonly successAnimation: Locator
    readonly successMessage: Locator
    readonly goToClassroomButton: Locator

    constructor(page){
        super(page)
        this.addNewClassroomButton = page.locator('a.btn.btn-sm.btn-primary').getByText(" Add ")
        this.classroomNameField = page.locator("#course_name")
        this.mathCheckbox = page.locator("input#math_enabled")
        this.englishCheckbox = page.locator("input#english_enabled")
        this.gradeSelect = page.locator("#curriculum_order")
        this.stateStandardSelect = page.locator("select#standard_id")
        this.createButton = page.locator('input[type="submit"]')
        this.successAnimation = page.locator('div#successStatusMessageModal lottie-player')
        this.successMessage = page.locator("span#visitModalDetailedMsg")
        this.goToClassroomButton = page.locator("#visitModalUrl")
    }

    async selectSubject(subject:string){

        if(subject === "math"){
            await this.mathCheckbox.check()
        } else if (subject === "english"){
            await this.englishCheckbox.check()
        }
    }

    async fillNewClassroomForm(classroomName:string,
        subject:string,
        grade:string,
        state:string){

        await this.classroomNameField.fill(classroomName)
        await this.selectSubject(subject)
        await this.gradeSelect.selectOption({label: grade})
        await this.stateStandardSelect.selectOption({label: state})
        await this.createButton.evaluate((el) => el.classList.remove('disabled'));
        await this.createButton.click()
    }
    
    

}