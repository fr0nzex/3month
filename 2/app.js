console.log("client request...");
console.log("string loading");
const look = new Promise((resolve, rejekt)=>{
    setTimeout (()=>{
        const err = false;

        if (!err){
            const response={
            userName:"Tina",
            userAge:"18",
            hobbi:"basketball",
            };
            const json = JSON.stringify(err);
            console.log("client get response from  server", json,response);

            resolve(response);
        }else{
            rejekt("status code 404, not found");
        }
    },1000);
}).then((res) =>{
    setTimeout(()=>{
        const data = {
         userName:"Tina",
         userAge:"18",
         hobbi:"basketball"
        };
       const Json = JSON.stringify(data);
       console.log("client get data",Json,data,res);
    },2000)
    return"hi";
})
.then((data) =>alert(data))