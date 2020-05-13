const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.post('/ip', (req,res) => {
    
    console.log(req.body.data);
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    function APIip(){
            if(this.readyState == 4 && this.status == 200)
           {
                res.send(myRequest.responseText);
                console.log(myRequest);
            }
    }

    var myRequest = new XMLHttpRequest();
    var tosearch = `http://ip-api.com/json/${req.body.data}`;
    console.log(tosearch);
    myRequest.onreadystatechange = APIip;
    myRequest.open("GET", tosearch, true);
    console.log(myRequest);
    myRequest.send(null);

});


app.post('/sunset', (req,res) => {
    console.log(req.body.data1);
    console.log(req.body.data2);
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    
    function APIsunset(){
            if(this.readyState == 4 && this.status == 200)
           {
                res.send(myRequest.responseText);
                console.log(200, myRequest);
            }
    }
    
    var myRequest = new XMLHttpRequest();
    var link = `https://api.sunrise-sunset.org/json?lat=${req.body.data1}&lng=${req.body.data2}`;
    console.log(link);
    myRequest.onreadystatechange = APIsunset;
    myRequest.open("GET", link, true);
    console.log(myRequest);
    myRequest.send(null);

});


app.listen(8080, () => console.log('Aplicatia ruleaza pe port: 8080'));