var express = require('express');
var router = express.Router();

//增加引用函式
const userrecipe = require('./utility/userrecipe');

//接收POST請求
router.post('/', function(req, res, next) {
    var serno = req.body.serno;   //取得產品編號

    var newData={
        serno:serno,                   //產品編號
        account: req.body.account,     //取得產品名稱
        title: req.body.title,  //取得盤點日期
        way: req.body.way,                   //產品編號
        pic : req.body.pic,     //取得產品名稱
        datetime: req.body.datetime,
        pass: req.body.pass,                   //產品編號
        approver: req.body.approver,     //取得產品名稱
        seasoningUse: req.body.seasoningUse
    } 
    
    userrecipe.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;