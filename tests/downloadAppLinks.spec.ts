import { test ,expect} from '@playwright/test';
import { PageManager } from '../pages/pageManager';
const urls = require("../fixtures/systemUrls.json");

test("Validate the download app Google Play link redirect",async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    const pm = new PageManager(page)

    await pm.onBasePage().visitDefaultUrl()

    await expect(await pm.onHomePage().googlePlayBtn).not.toBeVisible();
    await pm.onHomePage().clickDownloadApp()
    await expect(await pm.onHomePage().googlePlayBtn).toBeVisible()
    

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await pm.onHomePage().googlePlayBtn.click()
    ])

    await page.close();
    await pm.onBasePage().waitForLoadState(newPage)

    await pm.onBasePage().validadeCurrentUrl(newPage,urls.google_play_link)
})

test("Validate the download app AppStore link redirect",async ({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    const pm = new PageManager(page)

    await pm.onBasePage().visitDefaultUrl()

    await expect(await pm.onHomePage().appStoreBtn).not.toBeVisible();
    await pm.onHomePage().clickDownloadApp()
    await expect(await pm.onHomePage().appStoreBtn).toBeVisible()
    

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        await pm.onHomePage().appStoreBtn.click()
    ])

    await page.close();
    await pm.onBasePage().waitForLoadState(newPage)

    await pm.onBasePage().validadeCurrentUrl(newPage,urls.apple_store_link)
})