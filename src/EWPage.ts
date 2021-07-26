import { By, WebDriver, WebElement, until, } from "selenium-webdriver";

export class EWPage {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
    title: By = By.className('titleBar');
    // required fields
    header: By = By.name('hdrInput');
    mke: By = By.name('mkeInput');
    identifier: By = By.name('oriInput');
    name: By = By.name('namInput');
    sex: By = By.name('sexInput');
    race: By = By.name('racInput');
    height: By = By.name('hgtInput');
    weight: By = By.name('wgtInput');
    hair: By = By.name('haiInput');
    offense: By = By.name('offInput');
    dateWV: By = By.name('dowInput');
    // not required fields
    dlicense: By = By.name('olnInput');
    dlState: By = By.name('olsInput');
    dlExpDate: By = By.name('olyInput');
    plate: By = By.name('licInput');
    plateState: By = By.name('lisInput');
    plateYear: By = By.name('liyInput');
    // buttons
    submitBtn: By = By.id('saveBtn');
    clearBtn: By = By.id('clearBtn');

    // assembled query
    query: By = By.name('queryBody');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

/**
 * Will navigate to https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html
 * @example
 * await page.navigate();
 */
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.title));
        await this.driver.wait(
            until.elementIsVisible(await this.driver.findElement(this.title))
        );
    }

    async enterHeader(data: string) {
        await this.driver.findElement(this.header).click();
        await this.driver.findElement(this.header).sendKeys(`${data}`)
    }

    async enterMKE(data: string) {
        await this.driver.findElement(this.mke).click();
        await this.driver.findElement(this.mke).sendKeys(`${data}`);
    }

    async enterIdentifier(data: string) {
        await this.driver.findElement(this.identifier).click();
        await this.driver.findElement(this.identifier).sendKeys(`${data}`);
    }

    async enterName(data: string) {
        await this.driver.findElement(this.name).click();
        await this.driver.findElement(this.name).sendKeys(`${data}`);
    }

    async enterSex(data: string) {
        await this.driver.findElement(this.sex).click();
        await this.driver.findElement(this.sex).sendKeys(`${data}`);
    }

    async enterRace(data: string) {
        await this.driver.findElement(this.race).click();
        await this.driver.findElement(this.race).sendKeys(`${data}`);
    }

    async enterHeight(data: number) {
        await this.driver.findElement(this.height).click();
        await this.driver.findElement(this.height).sendKeys(`${data}`);
    }

    async enterWeight(data: string) {
        await this.driver.findElement(this.weight).click();
        await this.driver.findElement(this.weight).sendKeys(`${data}`);
    }

    async enterHair(data: string) {
        await this.driver.findElement(this.hair).click();
        await this.driver.findElement(this.hair).sendKeys(`${data}`);
    }

    async enterOffense(data: string) {
        await this.driver.findElement(this.offense).click();
        await this.driver.findElement(this.offense).sendKeys(`${data}`);
    }

    async enterDateWV (data: string) {
        await this.driver.findElement(this.dateWV).click();
        await this.driver.findElement(this.dateWV).sendKeys(`${data}`);
    }

}