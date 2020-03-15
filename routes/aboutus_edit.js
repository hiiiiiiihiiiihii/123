var express = require('express');
var router = express.Router();

//增加引用函式
const aboutus = require('./utility/aboutus');

//接收POST請求
router.post('/', function(req, res, next) {
    var about = req.body.about;   //取得產品編號

    var newData={
        about:about,                   //產品編號
        answer: req.body.answer        //取得產品名稱
        } 
    
    aboutus.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;