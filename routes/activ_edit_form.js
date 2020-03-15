var express = require('express');
var router = express.Router();

//增加引用函式
const activ = require('./utility/activ');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.activNo;

    activ.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                activNo: d.activNo,
                activAmount: d.activAmount,
                activDescription: d.activDescription,
                }

            res.render('activ_edit_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;