function Fruit(snake) {
  this.x;
  this.y;
  this.snake = snake;
  

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
	  
	
		
	
	}
	

	
	this.foodCollision = function(){	
	
for(var i=0; i<this.snake.tail.length; i++){		
		 if (this.snake.tail[i].x === this.x &&
      this.snake.tail[i].y === this.y) {
		  console.log("FRUIT")
           pickLocation();
		   foodCollision();
    }
	

  }
  return;
  
  
	}

  this.draw = function() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, scale, scale)
  }
}

     