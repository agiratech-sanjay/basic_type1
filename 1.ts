export class animal{
    health:number
    speed:number

    run(){
        console.log("hakuna matata");
    }
 
}

const tiger = new animal()
tiger.health = 50;
tiger.speed = 100;
tiger.run()