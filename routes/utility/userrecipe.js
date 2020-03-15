'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//----------------------------------
// 新增商品
//----------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO userrecipe (serno, account, title, way, pic, datetime, pass, approver, seasoningUse) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [serno, account, title, way, pic, datetime, pass, approver, seasoningUse])
        .then((data) => {
            result = 0;   //新增成功 
        }, (error) => {
            result = -1;  //新增失敗
        });
		
    return result;
}

//----------------------------------
// 刪除商品
//----------------------------------
var remove = async function(serno){
    var result;

    await sql('DELETE FROM userrecipe WHERE serno = $1', [serno])
        .then((data) => {
            result = data.rowCount;   //刪除筆數(包括刪除0筆) 
        }, (error) => {
            result = -1;   //剛除失敗
        });
		
    return result;
}

//------------------------------------------
//執行資料庫動作的函式-取出單一商品
//------------------------------------------
var query = async function(serno){
    var result={};
    
    await sql('SELECT * FROM userrecipe WHERE serno = $1', [serno])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];   
            }else{
                result = -1;
            }    
        }, (error) => {
            result = null;
        });
		
    return result;
}

//----------------------------------
// 更新商品
//----------------------------------
var update = async function(newData){
    var results;

    await sql('UPDATE userrecipe SET account=$1, title=$2, way=$3, pic=$4, datetime=$5, pass=$6, approver=$7, seasoningUse=$8 WHERE serno=$9', [newData.account, newData.title, newData.way, newData.pic, newData.datetime, newData.pass, newData.approver, newData.seasoningUse, newData.serno])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {add, remove, query, update};