function calculationParallelogram () {
    const calculationParallelogramBaseInput = document.getElementById('calculationParallelogram-base');
    const calculationParallelogramBaseText = calculationParallelogramBaseInput.value;
    const base = parseFloat(calculationParallelogramBaseText);
    console.log(base);

    const calculationParallelogramHeightInput = document.getElementById('calculationParallelogram-height');
    const calculationParallelogramHeightText = calculationParallelogramHeightInput.value;
    const height = parseFloat(calculationParallelogramHeightText);
    console.log(height);

    const area = base * height;
    console.log('Area of the Paralleloram is: ', area);

    const paralleloramAreaSpan = document.getElementById('parallelogram-area');
    paralleloramAreaSpan.innerText = area;
}