var express = require('express');
var router = express.Router();

//增加引用函式
const recipe = require('./utility/recipe');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.recipeNo;

    nutrition.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                recipeNo: d.recipeNo,
                recipeName: d.recipeName,
                seasoningUse: d.seasoningUse,
                way: d.way
                }

            res.render('recipe_edit_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;