import { EWPage } from "../EWPage";
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new EWPage(driver);

test("equivalence partitioning of required input fields", async () => {
    await page.navigate();
    await page.enterHeader("NDdnp!@d !+029 fju4");
    await page.enterMKE("p:");
    await page.enterIdentifier("Qikd8pnj4");
    await page.enterName("4G”MdlIsvLB4”FPowX0WF 4bOA86cF");
    await page.enterSex("M");
    await page.enterRace("T");
    await page.enterHeight(513);
    await page.enterWeight("091");
    await page.enterHair("Blackbrown");
    await page.enterOffense("h W6$q+> Jm>(2B");
    await page.enterDateWV("12151900");
    await driver.findElement(page.submitBtn).click();
    let assembled = await driver.findElement(page.query).getText();
    expect(assembled).toEqual("NDdnp!@d !+029 fju4.p:.Qikd8pnj4.4G”MdlIsvLB4”FPowX0WF 4bOA86cF.M.T.513.091.Blackbrown.h W6$q+> Jm>(2B.12151900......");

});
afterAll(async () => {
    await driver.quit();
})