 class Animal{
    health:number;
    speed:number;
    name:string;

    run(){
        console.log(`"hakuna matata" health ${this.health} and speed ${this.speed} and name ${this.name}`);
    }
}

const rabbit = new Animal();
const tiger = new Animal();
const dear = new Animal();
tiger.health = 90;
tiger.speed = 60;
tiger.name = "TIGER";
tiger.run()
rabbit.health = 50;
rabbit.speed = 65;
rabbit.name = "Rabbit";
rabbit.run()
dear.health = 70;
dear.speed = 90;
dear.name = "Dear"
dear.run()