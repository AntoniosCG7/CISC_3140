/**
 * Animates numbers on a web page when it loads.
 */
function animateNumbers() {
  // Get all elements with the "animated-number" class
  const animatedNumbers = document.querySelectorAll(".animated-number");

  // Set the duration for the animation in milliseconds
  const duration = 2000;

  // Iterate over each animated number element
  animatedNumbers.forEach((element) => {
    // Extract the target value from the element's text content
    const targetValue = parseInt(element.textContent);

    // Initiate the animation for the current element
    animateNumber(element, targetValue, duration);
  });
}

/**
 * Animates a single number element from 0 to the target value.
 *
 * @param {HTMLElement} element - The number element to animate.
 * @param {number} targetValue - The desired end value for the animation.
 * @param {number} duration - The duration of the animation in milliseconds.
 */
function animateNumber(element, targetValue, duration) {
  // Set the starting value for the animation
  const startValue = 0;

  // Calculate the duration of each frame assuming 60 frames per second
  const frameDuration = 1000 / 60;

  // Calculate the total number of frames for the animation
  const totalFrames = duration / frameDuration;

  // Calculate the increment value for each frame
  const increment = (targetValue - startValue) / totalFrames;

  // Initialize variables to track the current frame and value
  let currentFrame = 0;
  let currentValue = startValue;

  // Start the animation interval
  const animationInterval = setInterval(() => {
    // Check if the animation is complete or the current value exceeds the target value
    if (currentFrame === totalFrames || currentValue >= targetValue) {
      // Stop the animation by clearing the interval
      clearInterval(animationInterval);
    }

    // Increment the current value
    currentValue += increment;

    // Ensure the current value does not exceed the target value
    if (currentValue >= targetValue) {
      currentValue = targetValue;
    }

    // Update the element's text content with the current rounded value
    element.textContent = Math.round(currentValue);

    // Increment the frame count
    currentFrame++;
  }, frameDuration);
}

// Start the animation when the DOM content is loaded
window.addEventListener("DOMContentLoaded", animateNumbers);
