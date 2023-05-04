
window.onload=function(){
    declareEvents()
}
function declareEvents(){
    let id_form=document.querySelector("#id_form");
    id_form.addEventListener("submit",function(e){
        e.preventDefault();
       let email_val=document.querySelector("#id_email").value;
       let name_val=document.querySelector("#id_name").value;
       let phone_val=document.querySelector("#id_phone").value
       let text_val=document.querySelector("#id_text").value

        if(name_val.length<2){
            document.querySelector("#id_spanName").innerHTML="Invalid name";
            return;
        }

        else if(email_val.indexOf("@gmail") == -1 || 
            email_val.indexOf(".") == -1){
        document.querySelector("#id_spanEmail").innerHTML="Invalid emaill address";
        return; 
        }
        else if(phone_val.length<5){
            document.querySelector("#id_spanPhone").innerHTML="Invalid phone number";
            return;
        }
        else if(text_val.length<5){
            document.querySelector("#id_spanMsg").innerHTML="Enter a longer message";
            return;
        }

     
        else {
            window.open("thankyou.html")
        }
    });
   
}
