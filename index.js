

function bgChanger() {
    document.body.style.backgroundColor="red"
}

function headershower() {
    let h2 =document.getElementById('demo').innerHTML="Be the best version of you!"
}

function dateShower() {
    var timenDate = Date()
    let date = document.getElementById('time').innerHTML=timenDate
}

function picChanger() {
    let pic = document.getElementById('pic').src="dice-6.png"
}

function removePic() {
    let pic = document.getElementById('pic').src=""
}
function showPic() {
    let pic = document.getElementById('pic').src="dice-6.png"
}

function HeaderCreator() {
    let container1 = document.querySelector('.container')

    container1.style.backgroundColor="grey"
    container1.style.display="flex"
    container1.style.height="200px"
    container1.style.margin="20px"
    container1.style.flexWrap="wrap"
    

    let img1 = document.getElementById('pic')
    // img1.style.marginTop="50px"
    img1.style.borderColor="green"
    img1.style.borderWidth="10px"
    img1.style.borderStyle="solid"

}

function headerHider() {
    let container1 = document.querySelector('.container')
    container1.style.display="none"
}
function headerShower() {
    let container1 = document.querySelector('.container')
    container1.style.display="flex"
}

