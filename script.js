window.onload = function() {
    document.getElementById('number').value = 0;
    document.getElementById('base').value = 10;
    document.getElementById('output').value;
}

//
let size = 0;

function ln(a) {
    return Math.log(a);
};

function convertToParts() {
    let number = document.getElementById('number').value;
    let base = document.getElementById('base').value;
    document.getElementById('output').value = '';
    if (number == 0) {
        document.getElementById('output').value = 'Zero';
        return; 
    }
    if (base <= 1) {
        document.getElementById('output').value = 'Base is too hard';
        return;
    }
    size = Math.ceil((ln(number))/(ln(base))) - 1; // 69's largest index is 10^1
    for (let i = 0; i < size+1; i++) {
        //base**(size-i)
        let x = Math.floor(number/(base**(size-i)))*(base**(size-i));
        let y = x / (base**(size-i));
        document.getElementById('output').value +=  y + ' ';
        number -= x;
    }
}