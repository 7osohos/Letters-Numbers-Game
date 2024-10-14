let player = document.getElementById("player");
let game_window = document.querySelector(".enemies");
let game_window_bool = true;

document.addEventListener("mousemove", (e) => {
  game_window.addEventListener("mouseenter", () => {
    game_window_bool = true;
  });
  game_window.addEventListener("mouseleave", () => {
    game_window_bool = false;
  });
  if (game_window_bool) {
    player.style.left = e.clientX - 20 + "px";
    player.style.top = e.clientY - 20 + "px";

    for (let i = 0; i < 4; i++) {
      let trail = document.createElement("span");
      trail.className = "player_trail";
      trail.style.left = e.clientX + -10 + "px";
      trail.style.top = e.clientY + -10 + "px";
      setTimeout(() => {
        trail.remove();
      }, 300);
      document.querySelector("body").appendChild(trail);
    }
  }
  Letter_Trigger();
  Number_Trigger();

});

setInterval(() => {
  insert_letters();
}, 1500);

setInterval(() => {
  insert_numbers();
}, 1000);

function Letter_Trigger() {
  document.querySelectorAll(".letter").forEach((letter) => {
    if (player_Trigger_Checker(player, letter)) {
     alert("You hit an EVIL LETTER || Try Again? ");
     window.location.reload();
    }
  });
}
let score = 0
let score_text = document.querySelector(".score"); 
function Number_Trigger() {
  document.querySelectorAll(".number").forEach((number) => {
    if (player_Trigger_Checker(player, number)) {
     score += 1;
     number.remove();
     score_text.innerHTML = score;
    }
  });
}

function player_Trigger_Checker(player, triggeredObject) {
  if (
    player.getBoundingClientRect().left <=
      triggeredObject.getBoundingClientRect().right &&
    player.getBoundingClientRect().right >=
      triggeredObject.getBoundingClientRect().left &&
    player.getBoundingClientRect().top <=
      triggeredObject.getBoundingClientRect().bottom - 50 &&
    player.getBoundingClientRect().bottom >=
      triggeredObject.getBoundingClientRect().top + 40
  ) {
    return true;
  } else {
    return false;
  }
}

let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let enemies = document.querySelector(".enemies");
function insert_letters() {
  let randomLetter = Math.floor(Math.random() * letters.length);

  let y_axis = Math.floor(
    Math.random() * enemies.getBoundingClientRect().height - 10
  );

  let x_axis = Math.floor(
    Math.random() * enemies.getBoundingClientRect().width - 10
  );

  let new_letter = document.createElement("span");
  new_letter.className = `letter bad_${Math.floor(Math.random() * 6) + 1}`;
  new_letter.style.top = y_axis + "px";
  new_letter.style.left = x_axis + "px";

  new_letter.innerHTML = letters[randomLetter];
  setTimeout(() => {
    new_letter.remove();
  }, 1500);
  document.querySelector(".enemies").appendChild(new_letter);
}
function insert_numbers() {
  let randomNumber = Math.floor(Math.random() * numbers.length);

  let y_axis = Math.floor(
    Math.random() * enemies.getBoundingClientRect().height - 10
  );

  let x_axis = Math.floor(
    Math.random() * enemies.getBoundingClientRect().width - 10
  );

  let new_number = document.createElement("span");
  new_number.className = `number good_${Math.floor(Math.random() * 8) + 1}`;
  new_number.style.top = y_axis + "px";
  new_number.style.left = x_axis + "px";

  new_number.innerHTML = numbers[randomNumber];
  setTimeout(() => {
    new_number.remove();
  }, 1500);
  document.querySelector(".enemies").appendChild(new_number);
}

// function Trigger_Checker(player, triggeredObject) {
//   if (
//     player.getBoundingClientRect().left <=
//       triggeredObject.getBoundingClientRect().right &&
//     player.getBoundingClientRect().right >=
//       triggeredObject.getBoundingClientRect().left &&
//     player.getBoundingClientRect().top <=
//       triggeredObject.getBoundingClientRect().bottom &&
//     player.getBoundingClientRect().bottom >=
//       triggeredObject.getBoundingClientRect().top
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
