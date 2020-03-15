var express = require('express');
var router = express.Router();

//增加引用函式
const activ = require('./utility/activ');

//接收POST請求
router.post('/', function(req, res, next) {
    var activNo	 = req.body.activNo	;   //取得產品編號

    var newData={
        activNo	:activNo,                   //產品編號
        activAmount: req.body.activAmount,     //取得產品名稱
        activDescription: req.body.activDescription  //取得盤點日期
    } 
    
    activ.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;