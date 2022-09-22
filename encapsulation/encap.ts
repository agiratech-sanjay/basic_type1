export class exam{
    private maths:number
    private science:number

    setmaths(maths:number){
        if(maths<0){
            console.log(`Value of
             ${maths} is in less than equal to zero`)
        }
        this.maths=maths;
    }

    getmaths(){
        return this.maths
    }

    setscience(science:number){
        this.science = science;
    }

    getscience(){
        return this.science
    }
}

const marks = new exam();
marks.setmaths(-5);
marks.setmaths(5);
marks.setscience(6);

console.log(`maths marks is ${marks.getmaths()}/10 `);
console.log(` science marks is ${marks.getscience()}/10`)
