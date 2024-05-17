import { Page } from "playwright";
import { BrowserContext, expect} from '@playwright/test';

export class BasePage{

    readonly page: Page
    
    constructor(page: Page){
        this.page = page  
    }

    async waitForNumberOfSeconds({page},timeInSeconds: number){
        await page.waitForTimeout(timeInSeconds * 1000)
    }

    async waitForLoadState(page:Page){
        await page.waitForLoadState('domcontentloaded')
        await page.waitForLoadState("networkidle")
    }

    async validadeCurrentUrl(page:Page,url: string){

        await this.waitForLoadState(page)
        await expect(page.url()).toContain(url)
    }

    async visitDefaultUrl(){
        await this.page.goto("/")
    }

    async visitUrl(url:string){
        await this.page.goto(url)
    }

    async performActionWithDynamicClick(context:BrowserContext, actionFunction: () => Promise<void>) {
        const [newPage] = await Promise.all([
          context.waitForEvent('page'),
          await actionFunction(),
        ]);
        return {newPage}
    }
}