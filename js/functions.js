// get the value from input element
function getInputValue(idName) {
  return parseFloat(document.getElementById(idName).value);
}

// display the area calculations
function displayAreaCalc(calculatedArea, name) {
  const calculationBody = document.getElementById('calculation-body');
  let counter = calculationBody.children.length;
  const div = document.createElement('div');
  const displayCalc = `<table style="width:100%">
    <tr>
      <td><small>${counter}.</small></td>
      <td class="fs-6"><small>${name}</small></td>
      <td><small>${calculatedArea.toFixed(2)}</small></td>
      <td><a class="btn btn-primary btn-sm my-2 px-1"><small>Convert to m<sup>2<sup></small></a></td>
    </tr>
  </table>`;
  div.innerHTML = displayCalc;
  calculationBody.appendChild(div);
}
