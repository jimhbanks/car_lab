function Car(make, model, year, color, state, passengers, previousOwners, currentOwner, passengerName){
    this.year = year;  
    this.state = state;
    this.previousOwners = [];
    this.currentOwner = 'Manufacturer';
    this.passengers = passengers;
    this.passengerName = passengerName;
    this.color = color;
}
Car.prototype.sale = function(newOwner){
     this.previousOwners.push(this.currentOwner);
     this.currentOwner = newOwner;
};
Car.prototype.paint = function(newColor){
     this.color = "Blue"; 
};

Car.prototype.start = function() {
     this.state = 'on';
}

Car.prototype.off = function() {
     this.state = 'off';
}

Car.prototype.pickUp = function(passengerName) {
    if (this.state === 'on') {
      this.passengers.push(passengerName);
    }

}

Car.prototype.dropOff = function(passengers) {
  if (this.state === 'off') {
    this.passengers.push(passengerName);
  }
}
  


module.exports=Car;