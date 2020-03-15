var express = require('express');
var router = express.Router();

//增加引用函式
const userrecipe = require('./utility/userrecipe');

//接收POST請求
router.post('/', function(req, res, next) {
    var serno = req.body.serno;                  //取得產品編號
    var account = req.body.account;              //取得產品名稱
    var title = req.body.title;          //取得價格
    var way = req.body.way;                  //取得產品編號
    var pic = req.body.pic;              //取得產品名稱
    var datetime = req.body.datetime;          //取得價格
    var pass = req.body.pass;                  //取得產品編號
    var approver = req.body.approver;              //取得產品名稱
    var seasoningUse = req.body.seasoningUse;          //取得價格

    // 建立一個新資料物件
    var newData={
        serno:serno,
        account:account,
        title:title,
        way:way,
        pic:pic,
        datetime:datetime,
        pass:pass,
        approver:approver,
        seasoningUse:seasoningUse
    } 
    
    userrecipe.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;