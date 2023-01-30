function myFunction(element) {
    var n = parseInt(document.getElementById('n').value);
    var input1 = document.getElementById('myList1').value;
    var input2 = document.getElementById('myList2').value;
    if (input1 === input2) {
        document.getElementById('result').value = n;
    }
    else if (input1 == 'Fahrenheit') {
        if (input2 === 'Celcius') {
            document.getElementById('result').value = (n - 32) * 5 / 9;
        }
        else if (input2 === 'Kelvin') {
            document.getElementById('result').value = (n - 32) * 5 / 9 + 273.15;
        }
    }
    else if (input1 == 'Celcius') {
        if (input2 === 'Fahrenheit') {
            document.getElementById('result').value = (n * 9 / 5) + 32;
        }
        else if (input2 === 'Kelvin') {
            document.getElementById('result').value = n + 273.15;
        }
    }
    else if (input1 == 'Kelvin') {
        if (input2 === 'Fahrenheit') {
            document.getElementById('result').value = (n - 273.15) * 9 / 5 + 32;
        }
        else if (input2 === 'Celcius') {
            document.getElementById('result').value = n - 273.15;
        }
    }
}
