function animateNumbers() {
  const animatedNumbers = document.querySelectorAll(".animated-number");
  const duration = 2000;

  animatedNumbers.forEach((element) => {
    const targetValue = parseInt(element.textContent);
    animateNumber(element, targetValue, duration);
  });
}

function animateNumber(element, targetValue, duration) {
  const startValue = 0;
  const frameDuration = 1000 / 60; // Assuming 60 frames per second
  const totalFrames = duration / frameDuration;
  const increment = (targetValue - startValue) / totalFrames;

  let currentFrame = 0;
  let currentValue = startValue;

  const animationInterval = setInterval(() => {
    if (currentFrame === totalFrames || currentValue >= targetValue) {
      clearInterval(animationInterval);
    }

    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
    }

    element.textContent = Math.round(currentValue);

    currentFrame++;
  }, frameDuration);
}

// Start the animation when the page is loaded
window.addEventListener("DOMContentLoaded", animateNumbers);
