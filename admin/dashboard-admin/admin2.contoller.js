console.log("test from code"); 

function getToken() {
    const token = JSON.parse(localStorage.getItem('token'));
    return token.token; 
}
formData = {}; 

document.querySelector('form').addEventListener('submit', function (event) {
   
    event.preventDefault();

    const numberPatient = document.getElementById("numberOfpatient").value;
   
    getData(formData , `http://dentalhospital.somee.com/api/Admin/AddPermissibleCases?Cases=${Number(numberPatient)}`); 
    numberPatient = ""; 
});


async function RequestData(data , url) {
    
    const token = getToken(data); 

    try {
     
        const ddata = JSON.stringify(data);

        console.log("URL" , url); 
        const req = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
           
        });
        console.log(req); 
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
        alert("number of patient added successfully"); 
    } else {
        alert("number of patient not added");
    }
 } 