var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');
var kendoUiCore = require("kendo-ui-core");



var obj;
const tableify = require('html-tableify');
fs.readFile('trade.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    
});



http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    res.write(tableify([{
        Owner: obj.document.party_profile.party.owner,
        Party_id: obj.document.party_profile.party.party_id,
        Party_name: obj.document.party_profile.party.party_name
    } ,{
            Owner: obj.document.party_profile.party.owner,
            Party_id: obj.document.party_profile.party.party_id,
            Party_name: obj.document.party_profile.party.party_name
    }], {
            tidy: false
        }));



    res.end();
}).listen(8000);
