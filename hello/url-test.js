var url=require("url");
var parseURL=url.parse("http://example.com/profile?name=barry");
console.log(parseURL.protocol);
console.log(parseURL.host);
console.log(parseURL.query);