import { test ,expect} from '@playwright/test';
import { PageManager } from '../pages/pageManager';
const urls = require("../fixtures/systemUrls.json");

test("Validate teacher sign up redirect", async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    const pm = new PageManager(page)

    await page.goto("/")
    await pm.onHomePage().clickSignupButton()

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await pm.onHomePage().clickTeacherSignup()
        
    ])

    await pm.onBasePage().waitForLoadState(newPage)
    await page.close();

    pm.onBasePage().validadeCurrentUrl(newPage,"for=teacher")
    await expect(pm.onTeacherSignupPage().emailFormElement(newPage)).toBeVisible()
})

test("Validate Parents sign up redirect", async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    const pm = new PageManager(page)

    await page.goto("/")
    await pm.onHomePage().clickSignupButton()

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await pm.onHomePage().clickParentSignup()
    ])

    await pm.onBasePage().waitForLoadState(newPage)
    await page.close();

    pm.onBasePage().validadeCurrentUrl(newPage,"for=parent")

    await expect(pm.onParentSignupPage().emailFormElement(newPage)).toBeVisible()
})

test("Validate Students signup Redirect", async ({browser})=>{
    
    const context = await browser.newContext()
    const page = await context.newPage()
    const pm = new PageManager(page)

    await page.goto("/")
    await pm.onHomePage().clickSignupButton()

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await pm.onHomePage().clickStudentSignup()
    ])

    
    await pm.onBasePage().waitForLoadState(newPage)
    await page.close();

    pm.onBasePage().validadeCurrentUrl(newPage,urls.student_login)

    await expect(pm.onStundentSignupPage().usernameFormElement(newPage)).toBeVisible()
})