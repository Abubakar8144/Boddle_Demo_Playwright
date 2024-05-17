import { Locator , Page } from "playwright";
import { BasePage } from "./basePage";
import { expect } from "@playwright/test";

export class homePage extends BasePage{
    
    readonly page: Page
    readonly signupButton: Locator
    readonly teacherSignupButton: Locator
    readonly parentsSignupButton: Locator
    readonly studentSignupButton: Locator
    readonly downloadAppLink: Locator
    readonly googlePlayBtn: Locator
    readonly appStoreBtn: Locator


    constructor(page){
        super(page)
        this.signupButton = page.locator('a[data-w-id="79c144f8-5b69-45fd-e1ad-69c5a8a7a27b"]');
        this.teacherSignupButton = page.locator('.container-large.select-signup a').getByText('Teacher');
        this.parentsSignupButton = page.locator('.container-large.select-signup a').getByText('Parent');
        this.studentSignupButton = page.locator('.container-large.select-signup a').getByText('Student');
        this.downloadAppLink = page.locator('a[data-w-id="c1de6cb9-c614-5202-13c7-1ec96dc6cf80"]');
        this.googlePlayBtn = page.locator("div.container-large.appstore a.download-googleplay img");
        this.appStoreBtn = page.locator("div.container-large.appstore a.download-appstore");
    }

    async clickSignupButton(){
        this.signupButton.click();
        await expect(this.teacherSignupButton).toBeVisible()
    }

    async clickTeacherSignup(){
        this.teacherSignupButton.click();
    }

    async clickParentSignup(){
        this.parentsSignupButton.click();
    }

    async clickStudentSignup(){
        this.studentSignupButton.click();
    }

    async clickDownloadApp(){
        this.downloadAppLink.click();
    }
}