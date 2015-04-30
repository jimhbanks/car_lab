function Car(make, model, year, color, state, previousOwners, currentOwner, passengers){
    this.year = year;  
    this.state = state;
    this.previousOwners = previousOwners;
    this.currentOwner = currentOwner;
    this.passengers = passengers;
    this.color = color;
}
Car.prototype.sale = function(newOwner){
     this.previousOwners.push(this.currentOwner);
     this.currentOwner = newOwner;
};
Car.prototype.paint = function(newColor){
     this.color = "Blue"; 

};


module.exports=Car;