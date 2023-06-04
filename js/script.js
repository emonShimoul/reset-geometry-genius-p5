// randomly changing the background color of the shapes
const shapeContainers = document.querySelectorAll('.shape-container');
shapeContainers.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        element.style.backgroundColor = randomColor;
    });
    element.addEventListener('mouseleave', function () {
        element.style.backgroundColor = "white";
    });
});

// calculate triangle
document.getElementById('calculate-triangle').addEventListener('click', function () {
    const valueOfB = getInputValue('triangle-b');
    const valueOfH = getInputValue('triangle-h');
    if (isNaN(valueOfB) || isNaN(valueOfH) || valueOfB <= 0 || valueOfH <= 0) {
        alert("Please Enter a valid value!!")
    } else {
        const areaOfTriangle = 0.5 * valueOfB * valueOfH;
        document.getElementById('triangle-b').value = "";
        document.getElementById('triangle-h').value = "";
        displayAreaCalc(areaOfTriangle, 'Triangle');
    }
});

// calculate rectangle
document.getElementById('calculate-rectangle').addEventListener('click', function () {
    const valueOfW = getInputValue('rectangle-w');
    const valueOfI = getInputValue('rectangle-i');
    if (isNaN(valueOfW) || isNaN(valueOfI) || valueOfW <= 0 || valueOfI <= 0) {
        alert("Please Enter a valid value!!")
    } else {
        const areaOfRectangle = valueOfW * valueOfI;
        document.getElementById('rectangle-w').value = "";
        document.getElementById('rectangle-i').value = "";
        displayAreaCalc(areaOfRectangle, 'Rectangle');
    }
});

// calculate parallelogram
document.getElementById('calculate-parallelogram').addEventListener('click', function () {
    const valueOfB = getInputValue('parallelogram-b');
    const valueOfH = getInputValue('parallelogram-h');
    if (isNaN(valueOfB) || isNaN(valueOfH) || valueOfB <= 0 || valueOfH <= 0) {
        alert("Please Enter a valid value!!")
    } else {
        const areaOfParallelogram = valueOfB * valueOfH;
        document.getElementById('parallelogram-b').value = "";
        document.getElementById('parallelogram-h').value = "";
        displayAreaCalc(areaOfParallelogram, 'Parallelogram');
    }
});

// calculate rhombus
document.getElementById('calculate-rhombus').addEventListener('click', function () {
    const valueOfD1 = getInputValue('rhombus-d1');
    const valueOfD2 = getInputValue('rhombus-d2');
    if (isNaN(valueOfD1) || isNaN(valueOfD2) || valueOfD1 <= 0 || valueOfD2 <= 0) {
        alert("Please Enter a valid value!!")
    } else {
        const areaOfRhombus = 0.5 * valueOfD1 * valueOfD2;
        document.getElementById('rhombus-d1').value = "";
        document.getElementById('rhombus-d2').value = "";
        displayAreaCalc(areaOfRhombus, 'Rhombus');
    }
});

// calculate pentagon
document.getElementById('calculate-pentagon').addEventListener('click', function () {
    const valueOfP = getInputValue('pentagon-p');
    const valueOfB = getInputValue('pentagon-b');
    if (isNaN(valueOfP) || isNaN(valueOfB) || valueOfP <= 0 || valueOfB <= 0) {
        alert("Please Enter a valid value!!")
    } else {
        const areaOfPentagon = 0.5 * valueOfP * valueOfB;
        document.getElementById('pentagon-p').value = "";
        document.getElementById('pentagon-b').value = "";
        displayAreaCalc(areaOfPentagon, 'Pentagon');
    }
});

// calculate ellipse
document.getElementById('calculate-ellipse').addEventListener('click', function () {
    const valueOfA = getInputValue('ellipse-a');
    const valueOfB = getInputValue('ellipse-b');
    if (isNaN(valueOfA) || isNaN(valueOfB) || valueOfA <= 0 || valueOfB <= 0) {
        alert("Please Enter a valid value!!")
    } else {
        const areaOfEllipse = 3.14 * valueOfA * valueOfB;
        document.getElementById('ellipse-a').value = "";
        document.getElementById('ellipse-b').value = "";
        displayAreaCalc(areaOfEllipse, 'Ellipse');
    }
});