'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//----------------------------------
// 新增商品
//----------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO activ (activNo, activAmount, activDescription) VALUES ($1, $2, $3)', [activNo, activAmount, activDescription])
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
var remove = async function(activNo){
    var result;

    await sql('DELETE FROM activ WHERE activNo = $1', [activNo])
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
var query = async function(activNo){
    var result={};
    
    await sql('SELECT * FROM activ WHERE activNo = $1', [activNo])
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

    await sql('UPDATE activ SET activAmount=$1, activDescription=$2 WHERE activNo=$3', [newData.activNo, newData.activAmount, newData.activDescription])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {add, remove, query, update};