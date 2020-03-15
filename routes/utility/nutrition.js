'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//----------------------------------
// 新增商品
//----------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO nutrition (nutritionNo, nutritionName, nutritionDescription) VALUES ($1, $2, $3)', [nutritionNo, nutritionName, nutritionDescription])
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
var remove = async function(nutritionNo){
    var result;

    await sql('DELETE FROM nutrition WHERE nutritionNo = $1', [nutritionNo])
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
var query = async function(nutritionNo){
    var result={};
    
    await sql('SELECT * FROM nutrition WHERE nutritionNo = $1', [nutritionNo])
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

    await sql('UPDATE nutrition SET nutritionName=$1, nutritionDescription=$2 WHERE nutritionNo=$3', [newData.nutritionName, newData.nutritionDescription, newData.nutritionNo])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {add, remove, query, update};