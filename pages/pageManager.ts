import { Page } from "playwright";
import { BasePage } from "./basePage";
import { homePage } from "./homePage";
import { TeacherSignupPage } from "./teacherSignupPage";
import { ParentSignupPage } from "./parentSignupPage";
import { StudentSignupPage } from "./studentSignupPage";
import { LoginPage } from "./loginPage";
import { TeacherHomePage } from "./teacherhomePage";
import { TeacherDashboardPage } from "./teacherDashboardPage";

export class PageManager{

    private readonly page: Page
    private readonly basePage: BasePage
    private readonly homePage: homePage
    private readonly teacherSignupPage: TeacherSignupPage
    private readonly parentSignupPage: ParentSignupPage
    private readonly studentSignupPage: StudentSignupPage
    private readonly loginPage: LoginPage
    private readonly teacherHomePage: TeacherHomePage
    private readonly teacherDashboadPage: TeacherDashboardPage

    constructor(page:Page){
        this.page = page

        this.basePage = new BasePage(this.page)
        this.homePage = new homePage(this.page)
        this.teacherSignupPage = new TeacherSignupPage(this.page)
        this.parentSignupPage = new ParentSignupPage(this.page)
        this.studentSignupPage = new StudentSignupPage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.teacherHomePage = new TeacherHomePage(this.page)
        this.teacherDashboadPage = new TeacherDashboardPage(this.page)
    }

    onBasePage(){
        return this.basePage
    }

    onHomePage(){
        return this.homePage
    }

    onTeacherSignupPage(){
        return this.teacherSignupPage
    }

    onParentSignupPage(){
        return this.parentSignupPage
    }

    onStundentSignupPage(){
        return this.studentSignupPage
    }

    onLoginPage(){
        return this.loginPage
    }

    onTeacherHomePage(){
        return this.teacherHomePage
    }

    onTeacherDashboardPage(){
        return this.teacherDashboadPage
    }
}