const calculateBtn = document.getElementById('calculateBtn');
calculateBtn.addEventListener('click', () => {
    const weightInput = document.getElementById('weightInput');
    const heightInput = document.getElementById('heightInput');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    const bmi = weight / (height * height);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});
