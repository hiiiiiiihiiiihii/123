var express = require('express');
var router = express.Router();

//增加引用函式
const activ = require('./utility/activ');

//接收POST請求
router.post('/', function(req, res, next) {
    var activNo = req.body.activNo;                  //取得產品編號
    var activAmount = req.body.activAmount;              //取得產品名稱
    var activDescription = req.body.activDescription;          //取得價格

    // 建立一個新資料物件
    var newData={
        activNo:activNo,
        activAmount:activAmount,
        activDescription:activDescription
    } 
    
    activ.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;