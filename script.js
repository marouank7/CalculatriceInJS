const divResultat = document.querySelector('#resultat')
const divTouche = document.querySelector('#touches')
const divRecap = document.querySelector('#recap')

var chiffreSaisi = ""
divTouche.addEventListener('click', function(event){
    var button = event.target.id

    if(button.substring(0,1) ==="c"){
        chiffreSaisi += button.substring(1,2)
        console.log(chiffreSaisi)
        divResultat.value = chiffreSaisi
    }
})