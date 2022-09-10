function shop() {
    this.cardsele = element.all(by.css("app-card-list[class='row']"));
    this.item = element(by.css("h4 a"));
    this.checkout = element(by.xpath("//a[@class = 'nav-link btn btn-primary']"));
};

module.exports = new shop();