console.log("hello from test add patient page"); 

console.log("hello from test change password page");
const patientCode = document.querySelector(".patient-code");


function getToken() {
    
    const token = JSON.parse(localStorage.getItem('token'));
    
    return token.token;
}
var formData = {};

document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();
    
    const code = patientCode.value;
  console.log("code",code); 
    
    getData(formData, `http://dentalhospital.somee.com/api/Receptionist/CheckPay?code=${code}`);
    
});


async function RequestData(data, url) {

    const token = getToken();
    
    try {


        console.log("URL", url);
        
        const req = await fetch(url, {
            
            method: 'PATCH',
            
            headers: {
                
                'Content-Type': 'application/json',
                
                'Authorization': `Bearer ${token}`
            },
           
        });

        console.log(req);
        
        if (req.status == 400 || req.status == 401){
             return 0;
        } 
        else if (req.status == 200){
             return 1;
       }
    } catch (e) {
      
        console.error(e.errors);
      
        return 0;
    }
}


async function getData(data, url) {
    
    console.log("Data : ", data);
    
    var checkRequest = await RequestData(data, url);

    if (checkRequest == 1) {
    
        alert("Patient is payed successfully O^O");
    
    } else {
    
        alert("Code not payed O~O");
    
    }
} 