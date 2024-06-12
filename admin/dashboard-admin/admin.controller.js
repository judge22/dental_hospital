console.log("hello from admin2 test");

function getToken() {
    const token = JSON.parse(localStorage.getItem('token'));

    // console.log("token ",token.token); 
    
    return token.token; 
}
       

var formData = {};
var PatienNumber = {};

document.querySelector('#registerForm').addEventListener('submit', function (event) {
 
    event.preventDefault();
    var url = "";
    var role = document.getElementById('select-role').value;

    if (role === 'doctor') {
      
        url = 'http://dentalhospital.somee.com/api/Account/StudentProfessorRegister'; 
        
        formData.role = "Student"

        formData.clinic = Number(0);
        
        formData.round = Number(0);

        formData.name = document.querySelector('.doctor #name').value;

        formData.userName = document.querySelector('.doctor [name="user-name"]').value;
    
        formData.password = document.querySelector('.doctor #password').value;
    
        formData.phone = document.querySelector('.doctor [name="phone"]').value;
    
        formData.ssn = document.querySelector('.doctor #ssn').value;
    
        formData.gender = "male"; 
    
        // formData.clinics = document.querySelector('.doctor [name="clinics"]').value;
    
        // formData.type = document.querySelector('.doctor #type').value;
    
    } else if (role === 'receptionist') {
       
        url = 'http://dentalhospital.somee.com/api/Account/ReceptionistRegister'; 
        
        

        formData.name = document.querySelector('.receptionist #name').value;
        
        formData.userName = document.querySelector('.receptionist [name="user-name"]').value;
        
        formData.password = document.querySelector('.receptionist #password').value;
        
        formData.phone = document.querySelector('.receptionist [name="phone"]').value;
        
        formData.ssn = document.querySelector('.receptionist #ssn').value;
    
    } else if (role === 'professor') {
        
        url = 'http://dentalhospital.somee.com/api/Account/StudentProfessorRegister'; 
        
        formData.role = "Professor"; 

        formData.clinic = Number(0);
        
        formData.round = Number(0);

        formData.name = document.querySelector('.professor #name').value;

        formData.userName = document.querySelector('.professor [name="user-name"]').value;
        
        formData.password = document.querySelector('.professor #password').value;
       
        formData.phone = document.querySelector('.professor [name="phone"]').value;
        
        formData.ssn = document.querySelector('.professor #ssn').value;
        
        formData.gender = document.querySelector('.professor #gender').value; 
       
        formData.gender = "male"; 
        // formData.clinics = document.querySelector('.professor [name="clinics"]').value;
    }
    
    formData.confirmPassword = formData.password; 
    formData.email = "tyu@example.com"; 
    formData.birthDate = "2024-06-11T22:28:51.226Z";
    
    getData(formData , url); 
});









  async function RequestData(data , url) {
    
    const token = getToken(data); 

    try {
     
        const ddata = JSON.stringify(data);

        console.log("URL" , url); 
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: ddata
        });
        // console.log(req); 
        if(req.status == 400 || req.status == 401) return 0;
        else if(req.status == 200) return 1; 
    } catch (e) {
        console.error(e.errors);   
        return 0; 
    }
}


async function getData(data , url) {  
     console.log("Data : " , data);
    var checkRequest = await RequestData(data , url); 
    
    if(checkRequest == 1) {
        alert("Regestration completed successfully"); 
    } else {
        alert("Regestration failed");
    }
 } 