var express = require('express');
var router = express.Router();

//增加引用函式
const recipe = require('./utility/recipe');

//接收POST請求
router.post('/', function(req, res, next) {
    var recipeNo = req.body.recipeNo;                  //取得產品編號
    var recipeName = req.body.recipeName;              //取得產品名稱
    var seasoningUse = req.body.seasoningUse;          //取得價格
    var way	= req.body.way;
    // 建立一個新資料物件
    var newData={
        recipeNo:recipeNo,
        recipeName:recipeName,
        seasoningUse:seasoningUse,
        way:way	
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