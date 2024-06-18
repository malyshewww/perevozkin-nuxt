function animateTrailer(e, interacting) {
   const trailer = document.getElementById("trailer");
   const x = e.clientX - trailer.offsetWidth / 2,
      y = e.clientY - trailer.offsetHeight / 2;
   const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 1 : 1})`,
   };
   trailer.animate(keyframes, {
      duration: 500,
      fill: "forwards",
   });
}

export default animateTrailer;
