function getUserName() {
    return UserName = prompt("Your name: ");   
}
getUserName();
function main() {
    const input = document.getElementById("input");
    const button = document.getElementById("button");
    const message = document.getElementById("message");

    console.log(input,button,message);

   button.addEventListener("click",function(){
       const value = input.value;
       const isValid= isEmailValid(value);
       message.className = isValid ? "success": "error";
       message.innerHTML = isValid ? (UserName + " , your email is OK") : ("Sorry, "+ UserName + " but your Email is wrong");
      })
   button.addEventListener("keypress",function(){
        
          
        const value = input.value;
        const isValid= isEmailValid(value);
        message.className = isValid ? "success": "error";
        message.innerHTML = isValid ? (UserName + " , your email is OK") : ("Sorry, "+ UserName + " but your Email is wrong");
       })
}
window.onload = function(){
main();
}