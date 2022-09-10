exports.config = {
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['spec.js'],
    onPrepare: function () {
        browser.driver.manage().window().maximize();
    }

}