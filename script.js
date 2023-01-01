window.onload = function() {
    document.getElementById('number').value = 123;
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
    
    size = Math.ceil((ln(number))/(ln(base))) - 1; // 69's largest index is 10^1
    for (let i = 0; i < size+1; i++) {
        //base**(size-i)
        let x = Math.floor(number/(base**(size-i)))*(base**(size-i));
        x = x / (base);
        document.getElementById('output').value += x + ' ';
        number -= x;
    }
}