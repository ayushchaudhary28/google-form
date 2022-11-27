


function saveData (){
let work , email, psw;
work=document.getElementById("work").value;
email=document.getElementById("email").value;
psw=document.getElementById("psw").value;


let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
    alert("duplicate data");
}else{
    user_records.push({
        "name":work,
        "email":email,
        "psw":psw,
    })
    
    
    localStorage.setItem("users" ,JSON.stringify(user_records));

}



}


