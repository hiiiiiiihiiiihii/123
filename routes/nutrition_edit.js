var express = require('express');
var router = express.Router();

//增加引用函式
const nutrition = require('./utility/nutrition');

//接收POST請求
router.post('/', function(req, res, next) {
    var nutritionNo	 = req.body.nutritionNo	;   //取得產品編號

    var newData={
        nutritionNo	:nutritionNo,                   //產品編號
        nutritionName: req.body.nutritionName,     //取得產品名稱
        nutritionDescription: req.body.nutritionDescription  //取得盤點日期
    } 
    
    nutrition.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;