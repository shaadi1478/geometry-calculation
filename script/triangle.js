function calculateTriangle () {
    const traingleBaseInput = document.getElementById('traingle-base');
    const traingleBaseText = traingleBaseInput.value;
    const base = parseFloat(traingleBaseText)
    console.log(base);

    const traingleHeightInput = document.getElementById('traingle-height');
    const traingleHeightText = traingleHeightInput.value;
    const height = parseFloat(traingleHeightText);
    console.log(height)

    const area = 0.5 * base * height;
    console.log('Area of the triangle is:', area)

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area
}