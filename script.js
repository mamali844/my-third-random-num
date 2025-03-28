const roll = document.getElementById('rol');
const pone = document.getElementById('p1');
const ptwo = document.getElementById('p2');
const pthree = document.getElementById('p3');

roll.onclick = function() {
  // Generate random numbers for each P element
  let num1 = Math.floor(Math.random() * 999) + 1;
  let num2 = Math.floor(Math.random() * 999) + 1;
  let num3 = Math.floor(Math.random() * 999) + 1;

  // Initially set stars as placeholders
  pone.textContent = '**';
  ptwo.textContent = '**';
  pthree.textContent = '**';

  // Animate the numbers counting up
  setTimeout(() => {
    animateNumber(pone, num1);
    animateNumber(ptwo, num2);
    animateNumber(pthree, num3);
  }, 300); // Delay before animation starts

  // Toggle button background color
  roll.classList.toggle('clicked');
  if (roll.style.backgroundColor === 'red') {
    roll.style.backgroundColor = '#10ff04';  // Change to green
  } else {
    roll.style.backgroundColor = 'red';  // Change to red
  }
};

// Function to animate counting up (using setInterval)
function animateNumber(element, targetNumber) {
  let current = 0;
  let speed = 5; // Speed of counting (lower means faster)
  
  // Use setInterval for more control over the update interval
  let interval = setInterval(() => {
    if (current < targetNumber) {
      current += speed; // Increase by a faster rate
      if (current > targetNumber) current = targetNumber; // Avoid exceeding target
      element.textContent = `* ${Math.floor(current)} *`;
    } else {
      clearInterval(interval); // Stop the interval once the target is reached
    }
  }, 10); // Update every 20 milliseconds for smooth and fast counting
}