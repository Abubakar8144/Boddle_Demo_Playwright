import { test ,expect} from '@playwright/test';
import { PageManager } from '../pages/pageManager';
const credentials = require("../fixtures/credentials.json")
const urls = require("../fixtures/systemUrls.json")




test.beforeEach("Access page",async ({page})=>{
    const pm = new PageManager(page)

    await pm.onBasePage().visitUrl(urls.login_page)

})
test("Successfull teacher login",async({page})=>{
    const pm = new PageManager(page)
    
    await pm.onLoginPage().performLogin(credentials.valid_email,credentials.valid_password)
   /* await page.locator("#teacher_email").fill("automationdemo01@gmail.com")
    await page.locator("#teacher_password").fill("!kfg7$Dpl")
    await page.locator("#kt_login_form_submit").click()*/
    
    await pm.onBasePage().validadeCurrentUrl(page,urls.teacher_page)
})

test("Perform login with invalid password" , async ({page})=>{
    const pm = new PageManager(page)

    await pm.onLoginPage().performLogin(credentials.valid_email,credentials.invalid_password)

    const alertText = await pm.onLoginPage().alertDanger.innerText()
    expect(alertText).toEqual("Invalid email/password combination")
    
    await pm.onBasePage().validadeCurrentUrl(page,urls.login_page)
})

test("Perform login with invalid email" , async ({page})=>{
    const pm = new PageManager(page)

    await pm.onLoginPage().performLogin(credentials.invalid_email,credentials.invalid_password)

    const alertText = await pm.onLoginPage().alertDanger.innerText()
    expect(alertText).toEqual("Invalid email/password combination")
    
    await pm.onBasePage().validadeCurrentUrl(page,urls.login_page)
})

test("Perform Login with empty email", async ({page})=>{
    const pm = new PageManager(page)

    await pm.onLoginPage().performLogin("",credentials.invalid_password)

    await expect(pm.onLoginPage().emailField).toHaveClass(/is-invalid/)
    
})

test("Perform Login with empty password", async ({page})=>{
    const pm = new PageManager(page)

    await pm.onLoginPage().performLogin(credentials.valid_email,"")

    await expect(pm.onLoginPage().passwordField).toHaveClass(/is-invalid/)
    
})