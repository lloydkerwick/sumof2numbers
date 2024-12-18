<<<<<<< HEAD
document.querySelector('.js-sum1').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('.js-sum2').focus(); // Move focus to the next input
  }
});

document.querySelector('.js-sum2').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('.js-calculate').focus(); // Move focus to the next input
  }
});
  
  document.querySelector('.js-calculate').addEventListener('click', () => {
    const a = Number(document.querySelector('.js-sum1').value)
    const b = Number(document.querySelector('.js-sum2').value)

    if (isNaN(a) || isNaN(b)) {
    alert('Please enter valid numbers!');
    return;
  }

    const result = a + b;

    document.querySelector('.js-result').value = result;
  })
=======
document.querySelector('.js-sum1').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('.js-sum2').focus(); // Move focus to the next input
  }
});

document.querySelector('.js-sum2').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('.js-calculate').focus(); // Move focus to the next input
  }
});
  
  document.querySelector('.js-calculate').addEventListener('click', () => {
    const a = Number(document.querySelector('.js-sum1').value)
    const b = Number(document.querySelector('.js-sum2').value)

    if (isNaN(a) || isNaN(b)) {
    alert('Please enter valid numbers!');
    return;
  }

    const result = a + b;

    document.querySelector('.js-result').value = result;
  })
>>>>>>> 60f59ef7370c94b114b838b0d1d2a51dc36dd64c
