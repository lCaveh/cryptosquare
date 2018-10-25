$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    sentence=sentence.replace(/[^a-zA-Z1-9]/g,"").toLowerCase();
    var row = Math.ceil(Math.sqrt(sentence.length));
    var column = (sentence.length%row==0 || (row*(row-1)<sentence.length))? row:row-1;
    var codes = new Array(column)
    secretCode =""
    for (var i=0; i <row; i++) {
      codes[i]=new Array(column);
    };
    sentenceToArray=sentence.split("");
    for (var i=0;i<row;i++){
      for (var j=0;j<column;j++){
        if (sentenceToArray[j*row+i]) {
          codes[i][j]=sentenceToArray[j*row+i];
        };
      };
    };
    var counter=0;
    for (var i=0;i<row;i++){
      for (var j=0;j<column;j++){
        if (sentenceToArray[j*row+i]) {
          secretCode+= codes[i][j];
          counter++
        };
        if (counter%5==0) {
          secretCode+=" ";
        };
      };
    };
    $("#story").append("<p>"+secretCode+"</p>");
    $("#story").show();
  });
});
