{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":52,"position":52,"stack":[[{"start":{"row":0,"column":0},"end":{"row":3,"column":77},"action":"insert","lines":["const express = require('express');","const app = express();","app.use('/', express.static('public'));","app.listen(8080, () => console.log('Aplicatia functioneaza pe portul 8080'));"],"id":1}],[{"start":{"row":1,"column":22},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":40},"action":"insert","lines":["var bodyParser = require('body-parser');"],"id":3}],[{"start":{"row":2,"column":40},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":27},"action":"insert","lines":["app.use(bodyParser.urlencoded({ extended: true }));","app.use(bodyParser.json());"],"id":5}],[{"start":{"row":5,"column":39},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":30,"column":3},"action":"insert","lines":["app.post('/ip', (req,res) => {","","    console.log(\"CREAT\");","    console.log(req.body.data);","    var XMLHttpRequest = require(\"xmlhttprequest\").XMLHttpRequest;","","    function APIip(){","            if(this.readyState == 4 && this.status == 200)","           {","                //var jsonn = JSON.parse(this.responseText);","                res.send(myRequest.responseText);","                console.log(myRequest);","            }","    }","","    var myRequest = new XMLHttpRequest();","    var tosearch = http://ip-api.com/json/${req.body.data};","    console.log(tosearch);","    myRequest.onreadystatechange = APIip;","    myRequest.open(\"GET\", tosearch, true);","    console.log(myRequest);","    myRequest.send(null);","","});"],"id":7}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["§"],"id":8}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"remove","lines":["§"],"id":9}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["±"],"id":10}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"remove","lines":["±"],"id":11}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["]"],"id":12}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"remove","lines":["]"],"id":13}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["'"],"id":14},{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"remove","lines":["'"]}],[{"start":{"row":23,"column":19},"end":{"row":23,"column":20},"action":"insert","lines":["`"],"id":15}],[{"start":{"row":23,"column":59},"end":{"row":23,"column":61},"action":"insert","lines":["``"],"id":16}],[{"start":{"row":23,"column":60},"end":{"row":23,"column":61},"action":"remove","lines":["`"],"id":17}],[{"start":{"row":15,"column":12},"end":{"row":16,"column":60},"action":"remove","lines":["","                //var jsonn = JSON.parse(this.responseText);"],"id":18}],[{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":19},{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"insert","lines":["",""]},{"start":{"row":32,"column":0},"end":{"row":33,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":20}],[{"start":{"row":32,"column":0},"end":{"row":54,"column":3},"action":"insert","lines":["app.post('/circuit', (req,res) => {","    console.log(\"CREAT\");","    console.log(req.body.data);","    var XMLHttpRequest = require(\"xmlhttprequest\").XMLHttpRequest;","    ","    function importPilot(){","            if(this.readyState == 4 && this.status == 200)","           {","                //var jsonn = JSON.parse(this.responseText);","                res.send(myRequest.responseText);","                console.log(200, myRequest);","            }","    }","    ","    var myRequest = new XMLHttpRequest();","    var link = `http://ergast.com/api/f1/circuits/${req.body.data}.json`;","    console.log(link);","    myRequest.onreadystatechange = importPilot;","    myRequest.open(\"GET\", link, true);","    console.log(myRequest);","    myRequest.send(null);","","});"],"id":21}],[{"start":{"row":32,"column":35},"end":{"row":33,"column":25},"action":"remove","lines":["","    console.log(\"CREAT\");"],"id":22}],[{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"remove","lines":["t"],"id":23},{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"remove","lines":["i"]},{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"remove","lines":["u"]},{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"remove","lines":["c"]},{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"remove","lines":["r"]},{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"remove","lines":["i"]},{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"remove","lines":["c"]}],[{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["s"],"id":24},{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["u"]},{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"insert","lines":["n"]},{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["s"]}],[{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["e"],"id":25},{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["t"]}],[{"start":{"row":36,"column":13},"end":{"row":36,"column":24},"action":"remove","lines":["importPilot"],"id":26},{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"insert","lines":["A"]},{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["P"]},{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["I"]},{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"insert","lines":["s"]},{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["u"]},{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["n"]},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["s"]},{"start":{"row":36,"column":20},"end":{"row":36,"column":21},"action":"insert","lines":["e"]},{"start":{"row":36,"column":21},"end":{"row":36,"column":22},"action":"insert","lines":["t"]}],[{"start":{"row":38,"column":12},"end":{"row":39,"column":60},"action":"remove","lines":["","                //var jsonn = JSON.parse(this.responseText);"],"id":27}],[{"start":{"row":45,"column":16},"end":{"row":45,"column":71},"action":"remove","lines":["http://ergast.com/api/f1/circuits/${req.body.data}.json"],"id":28},{"start":{"row":45,"column":16},"end":{"row":45,"column":81},"action":"insert","lines":["https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400"]}],[{"start":{"row":47,"column":35},"end":{"row":47,"column":45},"action":"remove","lines":["importPilo"],"id":29}],[{"start":{"row":47,"column":35},"end":{"row":47,"column":36},"action":"remove","lines":["t"],"id":30}],[{"start":{"row":47,"column":35},"end":{"row":47,"column":36},"action":"insert","lines":["A"],"id":31},{"start":{"row":47,"column":36},"end":{"row":47,"column":37},"action":"insert","lines":["P"]},{"start":{"row":47,"column":37},"end":{"row":47,"column":38},"action":"insert","lines":["I"]},{"start":{"row":47,"column":38},"end":{"row":47,"column":39},"action":"insert","lines":["S"]}],[{"start":{"row":47,"column":38},"end":{"row":47,"column":39},"action":"remove","lines":["S"],"id":32}],[{"start":{"row":47,"column":38},"end":{"row":47,"column":39},"action":"insert","lines":["s"],"id":33},{"start":{"row":47,"column":39},"end":{"row":47,"column":40},"action":"insert","lines":["u"]},{"start":{"row":47,"column":40},"end":{"row":47,"column":41},"action":"insert","lines":["n"]},{"start":{"row":47,"column":41},"end":{"row":47,"column":42},"action":"insert","lines":["s"]},{"start":{"row":47,"column":42},"end":{"row":47,"column":43},"action":"insert","lines":["e"]},{"start":{"row":47,"column":43},"end":{"row":47,"column":44},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":22},"end":{"row":9,"column":25},"action":"remove","lines":["\");"],"id":34}],[{"start":{"row":9,"column":17},"end":{"row":9,"column":22},"action":"remove","lines":["CREAT"],"id":35}],[{"start":{"row":9,"column":15},"end":{"row":9,"column":17},"action":"remove","lines":["(\""],"id":36}],[{"start":{"row":9,"column":12},"end":{"row":9,"column":15},"action":"remove","lines":["log"],"id":37}],[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"remove","lines":["."],"id":38}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":11},"action":"remove","lines":["console"],"id":39}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"remove","lines":["    "],"id":40},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"remove","lines":["",""]},{"start":{"row":7,"column":30},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":7,"column":30},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":41},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":54,"column":46},"end":{"row":54,"column":58},"action":"remove","lines":["functioneaza"],"id":42},{"start":{"row":54,"column":46},"end":{"row":54,"column":47},"action":"insert","lines":["r"]},{"start":{"row":54,"column":47},"end":{"row":54,"column":48},"action":"insert","lines":["u"]},{"start":{"row":54,"column":48},"end":{"row":54,"column":49},"action":"insert","lines":["l"]},{"start":{"row":54,"column":49},"end":{"row":54,"column":50},"action":"insert","lines":["e"]},{"start":{"row":54,"column":50},"end":{"row":54,"column":51},"action":"insert","lines":["a"]},{"start":{"row":54,"column":51},"end":{"row":54,"column":52},"action":"insert","lines":["z"]},{"start":{"row":54,"column":52},"end":{"row":54,"column":53},"action":"insert","lines":["a"]}],[{"start":{"row":54,"column":62},"end":{"row":54,"column":63},"action":"remove","lines":["l"],"id":43},{"start":{"row":54,"column":61},"end":{"row":54,"column":62},"action":"remove","lines":["u"]}],[{"start":{"row":54,"column":61},"end":{"row":54,"column":62},"action":"insert","lines":[":"],"id":44}],[{"start":{"row":44,"column":4},"end":{"row":44,"column":83},"action":"remove","lines":["var link = `https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`;"],"id":45},{"start":{"row":44,"column":4},"end":{"row":44,"column":95},"action":"insert","lines":["var link = https://api.sunrise-sunset.org/json?lat=${req.body.data1}&lng=${req.body.data2};"]}],[{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["`"],"id":46}],[{"start":{"row":44,"column":95},"end":{"row":44,"column":97},"action":"insert","lines":["``"],"id":47}],[{"start":{"row":44,"column":96},"end":{"row":44,"column":97},"action":"remove","lines":["`"],"id":48}],[{"start":{"row":32,"column":29},"end":{"row":32,"column":30},"action":"insert","lines":["1"],"id":49}],[{"start":{"row":32,"column":32},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":50},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":33,"column":4},"end":{"row":33,"column":32},"action":"insert","lines":["console.log(req.body.data1);"],"id":51}],[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"remove","lines":["1"],"id":52}],[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["2"],"id":53}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":47,"column":45},"end":{"row":47,"column":45},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1589403667160,"hash":"c67c78d208bb74f430732f2551a2d69476ea4e73"}