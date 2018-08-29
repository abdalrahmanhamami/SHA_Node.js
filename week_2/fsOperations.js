const STORE_FILE_NAME = 'todo.txt';
const DEFAULT_ENCODING = 'utf8';
const fs = require('fs')

module.exports.readFile  = function() {
  return new Promise(function(resolve, reject){
    fs.readFile(STORE_FILE_NAME,DEFAULT_ENCODING,function(err,data){
        if(err){
          reject(err)
        } else {
          resolve(data)
        }
      })
  })
}

module.exports.deleteFile = function(){
  return new Promise(function(resolve, reject){
    fs.unlink(STORE_FILE_NAME,function(err,data){
        if(err){
          reject(err)
        } else {
          resolve(data)
        }
      })
  })
}

module.exports.writeFile = function(content){
  return new Promise(function(resolve, reject){
    fs.writeFile(STORE_FILE_NAME,content,function(err,data){
        if(err){
          reject(err)
        } else {
          resolve(data)
        }
      })
  })
}

module.exports.appendFile = function(args) {
  return new Promise((resolve, reject) => fs.appendFile(STORE_FILE_NAME,`\n${args.join(' ')}`,(err,data) => err ? reject (err) : resolve(data)))
}

module.exports.remove = function(index){
  var txtFile = readFile
  var txtFile = txtFile.split(`\n`).slice(index)
  return new Promise((resolve,reject) => fs.appendFile(STORE_FILE_NAME),`\n${txtFile.join()}`)
}
