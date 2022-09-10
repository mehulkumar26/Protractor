function home() {
    this.url = "https://rahulshettyacademy.com/angularpractice/";
    this.firstname = element(by.css("input[name='name']"));
    this.email = element(by.css("input[name='email']"));
    this.password = element(by.css("input[type='password']"));
    this.checkbox = element(by.css("input[type='checkbox']"));
    this.gender = element.all(by.tagName('option'));
    this.employment = element(by.id('inlineRadio2'));
    this.dob = element(by.css("input[name='bday']"));
    this.submit = element(by.css("input[type='submit']"));
    this.message = element(by.css("div[class*='success alert-dismissible']"));
    this.shop = element(by.linkText('Shop'));
};

module.exports = new home();