const nameOne = prompt("What is HIS name?");
const nameTwo = prompt("What is HER name?");

let loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert(
    `Your love match is ${loveScore}%. You love each other like Kanye loves Kanye!`
  );
} else if (loveScore > 30 && loveScore <= 70) {
  alert(`Your love match is ${loveScore}%`);
} else {
  alert(
    `Your love match is ${loveScore}%. You go together like oil and water.`
  );
}
