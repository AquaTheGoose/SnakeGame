function Fruit() {
  this.x;
  this.y;
  this.tail = [];

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
	  
	this.foodCollision = function() {
for(var i=0; i<this.tail.length; i++){		
		 if (this.tail[i].x === fruit.x &&
      this.tail[i].y === fruit.y) {
           this.x = (Math.floor(Math.random() *
      columns - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() *
      rows - 1) + 1) * scale;
    } 

  }
	}

  this.draw = function() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, scale, scale)
  }
}
}
     