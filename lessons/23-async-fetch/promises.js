const mover = document.querySelector(".mover");

const moveTo = (element, targetTop, targetLeft) => {
  return new Promise((resolve) => {
    let currentTop = parseInt(element.style.top) | 0;
    let currentLeft = parseInt(element.style.left) | 0;

    let stopTop = false;
    let stopLeft = false;

    const moveId = setInterval(() => {
      if (!stopTop) currentTop += currentTop > targetTop ? -1 : 1;
      if (!stopLeft) currentLeft += currentLeft > targetLeft ? -1 : 1;

      if (currentTop === targetTop) {
        stopTop = true;
      }
      if (currentLeft === targetLeft) {
        stopLeft = true;
      }

      if (currentLeft === targetLeft && currentTop === targetTop) {
        clearInterval(moveId);
        resolve();
      }

      element.style.top = `${currentTop}px`;
      element.style.left = `${currentLeft}px`;
    }, 16);
  });
};

moveTo(mover, Math.round(Math.random() * 200), Math.round(Math.random() * 200))
  .then(() =>
    moveTo(
      mover,
      Math.round(Math.random() * 200),
      Math.round(Math.random() * 200)
    )
  )
  .then(() =>
    moveTo(
      mover,
      Math.round(Math.random() * 200),
      Math.round(Math.random() * 200)
    )
  )
  .then(() =>
    moveTo(
      mover,
      Math.round(Math.random() * 200),
      Math.round(Math.random() * 200)
    )
  )
  .then(() =>
    moveTo(
      mover,
      Math.round(Math.random() * 200),
      Math.round(Math.random() * 200)
    )
  )
  .then(() =>
    moveTo(
      mover,
      Math.round(Math.random() * 200),
      Math.round(Math.random() * 200)
    )
  );
