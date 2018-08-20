const express = require('express');
const path = require('path');
let app= express();
let a;
app.get('/',(repuest,response)=>{
    // console.log(__dirname);
    // response.sendFile(path.resolve(__dirname, 'E:/Techkid_web/JS/BTVN/index.html'));
    response.send('1');

});
app.get('/:id', (req, res) => {
    res.send('Hello ' + req.params.id );
});
app.use(express.static('E:/Techkid_web/JS/BTVN/index.css'));
app.listen(6969,(err)=>{
    if(err) console.log(err)
    else console.log("sever is listen  at port 6969");
});