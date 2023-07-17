
// area for triangle,rhombus, pentagon

function getArea(base, height){
    const getBase = document.getElementById(base);
    const baseValue = getBase.value;

    const getHeight  = document.getElementById(height);
    const heightValue = getHeight.value;

    const area = .5 * baseValue * heightValue;
    return area;
}

// area for ellipse, rectangle, parallelogram
function getArea2(base, height){
    const getBase = document.getElementById(base);
    const baseValue = getBase.value;

    const getHeight  = document.getElementById(height);
    const heightValue = getHeight.value;

    const area = baseValue * heightValue;
    return area;
}

// display  for triangle,rhombus, pentagon
function displayValue(shapeName, base, height){
    const area = getArea(base, height);
    const getValueArea = document.getElementById('value-area');
    const ol = document.createElement('ol');
    const li = document.createElement('li')
    li.innerHTML= shapeName + '  ' + area + '  ' + 'cm<sup>2</sup>  <button>convert to m<sup>2</sup></button>' ;
    ol.appendChild(li);
    getValueArea.appendChild(ol);
    return getValueArea;

}


// display  for ellipse, rectangle, parallelogram

function displayValue2(shapeName, base, height){
    const area = getArea2(base, height);
    const getValueArea = document.getElementById('value-area');
    const ol = document.createElement('ol');
    const li = document.createElement('li')
    li.innerHTML= shapeName + '  ' + area + '  ' + 'cm<sup>2</sup>  <button>convert to m<sup>2</sup></button>' ;
    ol.appendChild(li);
    getValueArea.appendChild(ol);
    return getValueArea;
}


// btn-triangle

document.getElementById('btn-triangle').addEventListener('click', function(){
   
   displayValue('Triangle', 'base-triangle', 'height-triangle');
})

// btn-pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
   
   displayValue('Pentagon', 'base-pentagon', 'height-pentagon');
})

// 'btn-rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
   
   displayValue('Rhombus', 'base-rhombus', 'height-rhombus');
})

// btn-ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
   
   displayValue2('Ellipse', 'base-ellipse', 'height-ellipse');
})

// btn-parallelogram'
document.getElementById('btn-parallelogram').addEventListener('click', function(){
   
   displayValue2('Parallelogram', 'base-parallelogram', 'height-parallelogram');
})

// btn-rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
   
   displayValue2('Rectangle', 'base-rectangle', 'height-rectangle');
})