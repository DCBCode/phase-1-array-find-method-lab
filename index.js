// code your solution here
function superbowlWin(array) {
    const win = array.find((object) => object.result === "W");
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
}