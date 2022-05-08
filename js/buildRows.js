import rowOne from "./rowOne.js";
import rowTwo from "./rowTwo.js";
import rowThree from "./rowThree.js";
import rowFour from "./rowFour.js";
import rowFive from "./rowFive.js";

const buildRows = () => {
  const row = document.querySelectorAll('.row');
  row[0].innerHTML = rowOne();
  row[1].innerHTML = rowTwo();
  row[2].innerHTML = rowThree();
  row[3].innerHTML = rowFour();
  row[4].innerHTML = rowFive();
}
export default buildRows;