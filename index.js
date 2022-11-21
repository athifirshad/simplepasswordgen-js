const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generate(){
    const firstPass = []
    const secondPass = []
        
    while (firstPass.length < 15){
    let i = (Math.floor((Math.random()) * characters.length))
    let j = (Math.floor((Math.random()) * characters.length))
    firstPass.push(characters[i])
    secondPass.push(characters[j])
    }

    let firstStr = firstPass.join('')
    let secondStr = secondPass.join('')
    console.log(firstStr)
    console.log(secondStr)
    document.getElementById("pass1field").innerText = firstStr
    document.getElementById("pass2field").innerText = secondStr

    
}