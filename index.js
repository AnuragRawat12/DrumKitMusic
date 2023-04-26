var drum = document.querySelectorAll(".drum");
for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", () => {
    var keyboardButton = drum[i].innerHTML;
    makeSound(keyboardButton);
    animate(keyboardButton);
  });
}

document.addEventListener("keypress", (r) => {
  makeSound(r.key);
  animate(r.key);
});

const makeSound = (key) => {
  switch (key) {
    case "a":
      let drum1Sound = new Audio("sounds/tom-1.mp3");
      drum1Sound.play();
      break;

    case "s":
      const drum2Sound = new Audio("sounds/tom-2.mp3");
      drum2Sound.play();
      break;

    case "d":
      const drum3Sound = new Audio("sounds/tom-3.mp3");
      drum3Sound.play();
      break;

    case "f":
      const drum4Sound = new Audio("sounds/tom-4.mp3");
      drum4Sound.play();
      break;
    case "j":
      const drum6Sound = new Audio("sounds/kick-bass.mp3");
      drum6Sound.play();
      break;
    case "k":
      const drum7Sound = new Audio("sounds/snare.mp3");
      drum7Sound.play();
      break;
    case "l":
      const drum5Sound = new Audio("sounds/crash.mp3");
      drum5Sound.play();
      break;
    default:
      break;
  }
};

const animate = (currentKey) => {
  let btn = document.querySelector("." + currentKey);
  console.log(btn)
  btn.classList.add("anim")
  setTimeout(() => {
  btn.classList.remove("anim")
  }, 100);
  // console.log(btn.classList)
};
