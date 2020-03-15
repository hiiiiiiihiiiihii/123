var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const userrecipe = require('./utility/userrecipe');

//接收GET請求
router.get('/', function(req, res, next) {
    var no = req.query.serno;

    userrecipe.query(no).then(d => {
        if (d!=null && d!=-1){
            var data = {
                serno: d.serno,
                account: d.account,
                title: d.title,
                way: d.way,
                pic: d.pic,
                datetime: moment(d.datetime).format("YYYY-MM-DD"),
                pass: d.pass,
                approver: d.approver,
                seasoningUse: d.seasoningUse
            }

            res.render('userrecipe_edit_form', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;