var tile = function(r,c){
  this.row = r;
  this.col = c;
  
};

var board = function(){
  this.tiles =[];
  //create tic and toe tile array
  this.init = function(){
    for(var i = 0; i<3; i++)
      for(var j=0; j<3; j++)
        this.tiles.push(new tile(i,j));
  };
  //Draw the tic tac toc board
  this.drawBoard = function(){
    var boardDiv = document.createElement('div');
    boardDiv.className = 'board';
    boardDiv.setAttribute('id','board');
    var row=0;
    var rowDiv= [];
    for(var i = 0; i<3; i++)
    {
      rowDiv[i] = document.createElement('div');
      rowDiv[i].className = 'row';      
    }
    for(var i = 0; i<this.tiles.length; i++)
    {
      var tileDiv = document.createElement('span');
      tileDiv.className = 'tile';
      tileDiv.setAttribute('id','tile['+i+']');
      tileDiv.setAttribute('data-row',this.tiles[i].row);
      tileDiv.setAttribute('data-col',this.tiles[i].col);
      tileDiv.addEventListener('click',function(){
        console.log(this);
      });
      rowDiv[row].appendChild(tileDiv);
      if(i==2 || i==5 || i==8)
        row++;
    }    
    for(var i = 0; i<3; i++)
    {
      document.body.appendChild(rowDiv[i]);
    }
    
    
    
  };


};

var myBoard = new board();
myBoard.init();
myBoard.drawBoard();