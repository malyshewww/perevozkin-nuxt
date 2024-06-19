const tickerCopy = (element) => {
   const parentTicker = element.parentNode;
   const copy = element.cloneNode(true);
   parentTicker.appendChild(copy);
};

export default tickerCopy;
