const SELECTORS = {
    TITLE: '#heading-cars > div > h1',
    PRICE: '#showLeftBarView > section.price.mb-15.mhide > div.price_value > strong',
    MILEAGE: '#showLeftBarView > section.price.mb-15.mhide > div.base-information.bold',
    CITY: '#userInfoBlock > ul > li:nth-child(1) > div',
    IS_FROM_USA: 'body > div:nth-child(17) > div.auto-wrap > main > div.m-padding > ul > li:nth-child(1)',
    ENGINE: '#description_v3 > dl > dd:nth-child(3) > span.argument',
    GEAR_TYPE: '#description_v3 > dl > dd:nth-child(4) > span.argument',
    WHEEL_DRIVE_TYPE: '#description_v3 > dl > dd:nth-child(5) > span.argument',
    COLOR: '#description_v3 > dl > dd:nth-child(6) > span.argument',
    DESCRIPTION: '#full-description',
    VIEWED_NUMBER: '#viewsStatistic > span',
    SAVED_NUMBER: '#notepadStatistic',
}

const getText = async (page, selector) => {
    const elem = await page.$(selector)
    return elem ? elem.innerText() : null;
}

exports.scrapData = async (page) => {
    return {
        title: await getText(page, SELECTORS.TITLE),
        price: await getText(page, SELECTORS.PRICE),
        mileage: await getText(page, SELECTORS.MILEAGE),
        city: await getText(page, SELECTORS.CITY),
        isFromUSA: await getText(page, SELECTORS.IS_FROM_USA),
        engine: await getText(page, SELECTORS.ENGINE),
        gearType: await getText(page, SELECTORS.GEAR_TYPE),
        wheelDriveType: await getText(page, SELECTORS.WHEEL_DRIVE_TYPE),
        color: await getText(page, SELECTORS.COLOR),
        description: await getText(page, SELECTORS.DESCRIPTION),
        viewed: await getText(page, SELECTORS.VIEWED_NUMBER),
        saved: await getText(page, SELECTORS.SAVED_NUMBER),
    }
}
