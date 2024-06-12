console.log("hello from test change password page");
const currPass = document.querySelector("#current-password");
const newPass = document.querySelector("#new-password");
const confirmPass = document.querySelector("#confirm-password");

var Data = {};

function passwordIsOk(data) {
  
    // console.log("rrrrrrrrrrrrrrrrttttttttttttt",data); 
    if(data.newPassword.toString() !== data.confirmPassword.toString()) {
        
        return false; 
    }

    return true; 
}
function getToken() {
    
    const token = JSON.parse(localStorage.getItem('token'));
    
    return token.token;
}
var formData = {};

document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();
    
    formData.currentPassword = currPass.value;

    formData.newPassword = newPass.value;
    
    formData.confirmPassword = confirmPass.value; 

    console.log(formData); 
    
    if(!passwordIsOk(formData)) {

        alert("Password not matching O^O"); 
    
    } else {   
         getData(formData, "http://dentalhospital.somee.com/api/Account/ChangePassword");
    
    }
});


async function RequestData(data, url) {

    const token = getToken();
    
  
    try {

        const ddata = JSON.stringify(data);

        console.log("URL", url);
        
        const req = await fetch(url, {
            
            method: 'PATCH',
            
            headers: {
                
                'Content-Type': 'application/json',
                
                'Authorization': `Bearer ${token}`
            },
            body: ddata
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
    
        alert("password updated successfully O^O");
    
    } else {
    
        alert("password not updated O^O");
    
    }
} 