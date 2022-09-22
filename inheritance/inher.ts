class students{
   public name:string
   rollno:number
   protected score:number

   setscore(x:number){
    this.score=x;
   }

   getscore(){
    return this.score
   }

   maths(){
    console.log(`name ${this.name} and score ${this.score}, `);
   }

   science(){
    console.log(`(${this.name}, ${this.rollno},${this.score}), good in all subject`);
   }
     
}

class marks extends students{
    sample(){
        
        console.log(`${this.score}`)
    }
    total(){
        console.log(`(${this.name}, ${this.rollno}, ${this.score}), extended the super class method`)
    }
}

const stud = new students();
const totals = new marks();

stud.name = "raju";
stud.rollno = 101;
stud.setscore(40);
totals.name ="saravana"
totals.rollno = 103;
totals.setscore(50);



stud.maths();
stud.science();
totals.maths();
totals.science();

totals.sample();
totals.total();