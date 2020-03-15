'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//----------------------------------
// 新增商品
//----------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO recipe (recipeNo, recipeName, seasoningUse, way) VALUES ($1, $2, $3, $4)', [recipeNo, recipeName, seasoningUse, way])
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
var remove = async function(recipeNo){
    var result;

    await sql('DELETE FROM recipe WHERE recipeNo = $1', [recipeNo])
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
var query = async function(recipeNo){
    var result={};
    
    await sql('SELECT * FROM recipe WHERE recipeNo = $1', [recipeNo])
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

    await sql('UPDATE recipe SET recipeName=$1, seasoningUse=$2, way=$3 WHERE recipeNo=$4', [newData.recipeName, newData.seasoningUse, newData.way, newData.recipeNo])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {add, remove, query, update};