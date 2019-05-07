// console.log("server running");
const express = require('express');
const data = require('./data.js');
//const getword = require('./getword.js');
const app = express(); // function call of express..
const port = process.env.PORT; // process.env.PORT || 5000;  
// if running file locally it will not have process.evn.PORT but runs 5000 instead. Testing.....

// .get api call. Anonymous function: request.
// and respose object and using send method(hello world)

app.use(express.static("public"));

app.get("/data", function(req, res) {
    const word = req.query.word;
    if (word === data) {
        res.send(`Your word: ${word} is in here`);
    }
    // else {

    //     res.send(`Your word: ${word} is not in here`);
    // }

});

// When port is use. It needs to know which door to go into. ex:3000
// Call back function.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
