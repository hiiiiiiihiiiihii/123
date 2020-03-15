var express = require('express');
var router = express.Router();

//增加引用函式
const nutrition = require('./utility/nutrition');

//接收POST請求
router.post('/', function(req, res, next) {
    var nutritionNo = req.body.nutritionNo;                  //取得產品編號
    var nutritionName = req.body.nutritionName;              //取得產品名稱
    var nutritionDescription = req.body.nutritionDescription;          //取得價格

    // 建立一個新資料物件
    var newData={
        nutritionNo:nutritionNo,
        nutritionName:nutritionName,
        nutritionDescription:nutritionDescription
    } 
    
    nutrition.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;