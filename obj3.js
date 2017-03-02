function VehicleConstructor (name, wheels, passengers) { 
	var vehicle ={
	this.name = name
	this.wheels = wheels
	this.passengers = passengers
	this.seatstaken = seatstaken
	this.seatsleft=passengers
	this.acc = 0
	this.speed =speed
	this.dist=dist
	this.vin= function{
		return math.random(10000000, 9898989898989)
	}
}
}

	vehicle.prototype.honk = function(wheels){
		if this.wheels ==2;
		console.log('RING, RING! RING, RING!')
		if this.wheels ==3;
		console.log('beep, beep')
		if this.wheels >=4;
		console.log('Honk, Honk') 
	}
	vehicle.prototype.faster = function(){
		this.acc +=1
		this.speed +=acc
		this.dist +=speed
		console.log('You are now moving at' +this.speed+'and have travelled a total of' +this.dist)
	}
	vehicle.prototype.slower = function(){
		this.acc -=1
		this.speed +=acc
		this.dist +=speed
		console.log('You are now moving at'+this.speed+'and have now travelled a total of'+this.dist)
	}
	vehicle.prototype.cruise = function(){
		this.acc +=0
		this.speed +=acc
		this.dist +=speed
		console.log('You are still moving at'+this.speed+'and have now travelled a total of'+ this.dist)
	}
	vehicle.protoype.sit = function(seatstaken){
		this.seatstaken +=1
		this.seatsleft -=1
		console.log('There are'+this.seatsleft+'seats left')
	}
	vehicle.prototype.displayVIN = function(vin){
		console.log('vin');
	}
}
var bus= new VehicleConstructor(Magic School Bus, 4, 73)