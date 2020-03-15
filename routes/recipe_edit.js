var express = require('express');
var router = express.Router();

//增加引用函式
const recipe = require('./utility/recipe');

//接收POST請求
router.post('/', function(req, res, next) {
    var recipeNo = req.body.recipeNo	;   //取得產品編號

    var newData={
        recipeNo:recipeNo,                   //產品編號
        recipeName: req.body.recipeName,     //取得產品名稱
        seasoningUse: req.body.seasoningUse,  //取得盤點日期
        way: req.body.way
    } 

    recipe.update(newData).then(d => {
        if (d>=0){
            res.render('updateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('updateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;