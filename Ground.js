class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			"restitution":0,	
			"friction":0,
			"density":1,		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display(){

		rectMode(CENTER)

			fill(0);

			rect(this.body.position.x,this.body.position.y,this.w,this. h)
			
	}

}