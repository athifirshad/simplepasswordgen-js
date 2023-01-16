const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

document.getElementById("genbtn").addEventListener("click", generate);

function generate(){
    let firstPass = []
    let secondPass = []

    for(let i = 0; i < 15; i++){
      let random = Math.floor(Math.random() * characters.length);
      firstPass.push(characters[random]);
      random = Math.floor(Math.random() * characters.length);
      secondPass.push(characters[random]);
    }
    let firstStr = firstPass.join('')
    let secondStr = secondPass.join('')
    document.getElementById("pass1field").textContent = firstStr
    document.getElementById("pass2field").textContent = secondStr
    document.getElementById("copy1").textContent = "Copy!";
    document.getElementById("copy2").textContent = "Copy!";
    
}

document.getElementById("copy1").addEventListener("click", function(){
    copyToClipboard("pass1field","copy1");
});

document.getElementById("copy2").addEventListener("click", function(){
    copyToClipboard("pass2field","copy2");
});

async function copyToClipboard(id,btn) {
  let text = document.getElementById(id).innerText;
  try {
    await navigator.clipboard.writeText(text);
    console.log("Password copied to clipboard");
    document.getElementById(btn).textContent = "Copied!";
  } catch (err) {
    console.error("Failed to copy password: ", err);
  }
}
