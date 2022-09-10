function checkout(){

    this.remove = element(by.xpath("//button[@class='btn btn-danger'][1]"));
    this.check = element(by.xpath("//button[@class='btn btn-success']"));
};
module.exports = new checkout();