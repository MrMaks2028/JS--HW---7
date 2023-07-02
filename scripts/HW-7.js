var switcher = false;

main.addEventListener('click', e => {
    if(e.target.id == 'btnSwitch' && btnSwitch.textContent == 'OFF') {
        btnSwitch.innerText = 'ON';
        redLight.style['background-color'] = 'red';
        switcher = true;
    }
    else if(e.target.id == 'btnSwitch' && btnSwitch.textContent == 'ON') {
        btnSwitch.innerText = 'OFF';
        redLight.style['background-color'] = 'white';
        yellowLight.style['background-color'] = 'white';
        greenLight.style['background-color'] = 'white'
        switcher = false;
    }   
});
//Red Light
main.addEventListener('click', e => {
    if(e.target.id == 'redLight' && switcher == true) {
        redLight.style['background-color'] = 'red';
        yellowLight.style['background-color'] = 'white';
        greenLight.style['background-color'] = 'white';
    }
});
//Yellow Light
main.addEventListener('click', e => {
    if(e.target.id == 'yellowLight' && switcher == true) {
        yellowLight.style['background-color'] = 'yellow'
        redLight.style['background-color'] = 'white'
        greenLight.style['background-color'] = 'white'
    }
});
//Green Light
main.addEventListener('click', e => {
    if(e.target.id == 'greenLight' && switcher == true) {
        greenLight.style['background-color'] = 'green'
        redLight.style['background-color'] = 'white'
        yellowLight.style['background-color'] = 'white';
    }
});