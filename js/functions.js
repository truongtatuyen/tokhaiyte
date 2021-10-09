function flagClick(){
    var btnsFlag = document.getElementsByClassName('btn_flag')
    for (let i = 0; i < btnsFlag.length; i++) {
        btnsFlag[i].addEventListener('click', ()=> {
            for (let j = 0; j < btnsFlag.length; j++) {
                btnsFlag[j].classList.remove('active')
            }
            btnsFlag[i].classList.add('active')
        })
    }
}

function toggleTextboxCscl3(){
    var radioBoxsCscl = document.getElementsByName('cscl')
    var hiddenTextBox = document.getElementById('cscl3_text')
    for (let i = 0; i < radioBoxsCscl.length; i++) {
        radioBoxsCscl[i].addEventListener('click', ()=> {
            if(radioBoxsCscl[i].id == 'cscl3'){
                hiddenTextBox.classList.remove('hidden')
            }else{
                hiddenTextBox.classList.add('hidden')
            }
        })
    }
}

function toggleSIM(){
    var radioSIMs = document.querySelectorAll('[data-type="SIM"]')
    for (let i = 0; i < radioSIMs.length; i++) {
        radioSIMs[i].addEventListener('click', ()=> {
            for (let j = 0; j < radioSIMs.length; j++) {
                radioSIMs[j].classList.remove('active')
            }
            radioSIMs[i].classList.add('active')
        })
    }
}