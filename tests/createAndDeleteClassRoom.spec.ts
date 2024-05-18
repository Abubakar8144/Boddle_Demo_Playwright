import { test ,expect} from '@playwright/test';
import { PageManager } from '../pages/pageManager';
const credentials = require("../fixtures/credentials.json");
const data = require("../fixtures/createAndDeleteClassRoomData.json")
const urls = require("../fixtures/systemUrls.json")
import dotenv from 'dotenv';
dotenv.config()

test.beforeEach("Perform Login", async ({page})=>{
    const pm = new PageManager(page)

    await pm.onBasePage().visitUrl(urls.login_page)
    await pm.onLoginPage().performLogin(process.env.VALID_LOGIN?.toString(),process.env.VALID_PASSWORD?.toString())
    await pm.onBasePage().validadeCurrentUrl(page,urls.teacher_page)
})

test("Add new Classroom", async ({page})=>{
    const pm = new PageManager(page)

    await pm.onTeacherHomePage().addNewClassroomButton.click()
    await pm.onTeacherHomePage().fillNewClassroomForm( 
        data.classroomName,
        data.subject,
        data.grade,
        data.state)

    await expect(await pm.onTeacherHomePage().successAnimation).toBeVisible({timeout:10000})
    await expect(await pm.onTeacherHomePage().successMessage).toBeVisible()
    await expect(await pm.onTeacherHomePage().successMessage).toHaveText("Classroom successfully created!")

    await pm.onTeacherHomePage().goToClassroomButton.click()
    await pm.onBasePage().validadeCurrentUrl(page,urls.new_dashboard_page)
    await expect(pm.onTeacherDashboardPage().wellcomeHeader).toHaveText("Welcome to 1" + data.classroomName )

    await pm.onTeacherDashboardPage().deleteClassRoom(data.classroomName)
    await pm.onBasePage().validadeCurrentUrl(page,urls.teacher_page)
    
    const visible = await page.locator("div.card.card-xl-stretch").getByText(data.classroomName).isVisible()
    expect(visible).toBeFalsy()
})