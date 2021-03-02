export const calculateDistance = (elem, mouseX, mouseY) => {
  try {
    return Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.getBoundingClientRect().left + 37.5), 2) +
          Math.pow(
            mouseY -
              (elem.getBoundingClientRect().top +
                22.5 +
                document.scrollingElement.scrollTop),
            2
          )
      )
    );
  } catch (error) {
    return error;
  }
};

export const calculateDistanceX = (elem, mouseX) => {
  try {
    return Math.floor(mouseX - (elem.getBoundingClientRect().left + 37.5));
  } catch (error) {
    return error;
  }
};

export const calculateDistanceY = (elem, mouseY) => {
  try {
    return Math.floor(
      mouseY -
        (elem.getBoundingClientRect().top +
          22.5 +
          document.scrollingElement.scrollTop)
    );
  } catch (error) {
    return error;
  }
};
