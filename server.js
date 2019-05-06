var express = require("express");
var AV = require('leanengine');

AV.init({
  appId: process.env.LEANCLOUD_APP_ID || 'YJq8EmK9dBLLb8rNbHgVKThH-gzGzoHsz',
  appKey: process.env.LEANCLOUD_APP_KEY || 'kO0dXTuU5HdmKAk2As18k9EC',
  masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '9vgptL94hYkJEzIYUPbmqTQT'
});
var app = express();

app.use(AV.express());

app.use(express.static(__dirname + "/static"));
app.get("/", function(req, res){
    res.end("123");
})

app.listen(process.env.LEANCLOUD_APP_PORT);