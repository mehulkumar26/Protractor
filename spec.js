describe('PhotoCommerce', function () {

    var obj = require("./HomePage.js");
    var shop = require("./Shop.js");
    var checkut = require("./checkout.js")

    function addItem(value) {
        shop.cardsele.each(function (cards) {

            cards.shop.item.getText().then(function (text) {

               
                if (text == "Samsung Note 8") {
                    cards.element(by.css("button[class='btn btn-info']")).click();
                }
            });

        });
    }

    it('Practice', function () {
        browser.get(obj.url);
        obj.firstname.sendKeys('Mehul');
        obj.email.sendKeys('mehulKumar@email.com');
        obj.password.sendKeys('mehulKumar');
        obj.checkbox.click();
        obj.gender.each(function (item) {
            item.getAttribute("value").then(function (value) {

                if (value == "Male") {
                    item.click();

                }
            });
        });
        obj.employment.click();
        obj.dob.sendKeys('26/08/1999');
        obj.submit.click();
        obj.message.getText().then(function (text) {
            console.log(text);

        });

        obj.shop.click();
        addItem("iphone x");
        addItem("Samsung Note 8");
        shop.checkout.click();

        checkut.remove.click();
        checkut.check.click();

    });

});