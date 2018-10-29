var fs = require('fs');

var arr = [];

function runQuery(file) {
  fs.readFile(file, 'utf8', function(err, data){

    if (err) {
      console.log(err);
    }
    //  console.log('hello world');
    arr = data.split(",");
    console.log(arr);

    var result = [];
    arr.forEach(function(item, index){
      //TODO
      var row = {
        input: item.split(":"),
      };
      result.push(row);
      console.log(JSON.stringify(row.input));
      // console.log('each data:' + item);
    });
    // console.log('size: ' + arr.length );
    return result;
  });
}

var textFile = process.argv[2];
function writeFile(result) {

  for (const item in result) {

    fs.appendFile(textFile, item.input[0], ':', item.input[1], function(err){
      if (err) {
        console.log(err);
      }
    })
  }
}

arr = runQuery('data.txt');
writeFile(arr);