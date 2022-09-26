abstract class Hero1{

   abstract attack() : void ;

    move() : void {
        console.log("I'm moving")
    }

    eat() : void {
        console.log("eating");
    }
}


 abstract class mage1 extends Hero1{
    mana : number
}

class Wizard extends mage1{
    attack() {
        this.mana -=1;
        console.log("wizard attack")
    }
}
class Witch extends mage1{
    attack() {
        this.mana -=1;
        console.log("witch attack")
    }

}

const wizard = new Wizard();
const witch = new Witch();

wizard.attack();
witch.attack();