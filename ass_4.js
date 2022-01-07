console.log("hello world")
function argueRight(){
    document.getElementById("text").innerText="I'm right"
  }
  
  function argueNotRight(){
    document.getElementById("text").innerText="No, I'm right!"
  }
  
  function Alert(){
    alert("Hey, I told you not to hover over me!")
  }
  
  function checkPassword(){
    let t;
    const pVal=document.querySelector("#password").value;
    if(pVal==="12345678"){
      
      document.getElementById("message").innerText="correct password!"
    }
    else{
      alert("Incorrect Password,try again")
    }
    
  }