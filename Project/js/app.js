// i=1
// while(i<50){
//     console.log(i)
//     i++ //i=i+1 ve ya i+=1
// }
// let arr=["Samir","Memmed","Kerem"]
// for(let a=0;a<arr.length;a++){
//     console.log(arr[a])
// }
// built-in object , built-in method
a=5;

let obj={
    ad:"Samir",
    soyad:"Kerimov",
    yas:40,
    covidStatus:false,
    getFullName:function(){
        console.log(this.ad + " / "+this.soyad)
    }
}

// constructor function

function Student(_ad,_soyad){
    this.ad=_ad;
    this.soyad=_soyad;
    this.getFullName=function(){
        return this.ad +" / " +this.soyad
    }

    // yas=34
    // console.log(yas)
}


let stud=new Student('Kamal','Novruzov')

class Teacher{
    constructor(_name,_surname){
        this.Name=_name;
        this.Surname=_surname;
    }
}

let teacher=new Teacher('Ehmed','Serdarov')
