const colorfulConsole = () => {
  const colors = {
    "gray": "font-weight: bold; color: #1B2B34;",
    "red": "font-weight: bold; color: #EC5f67;",
    "orange": "font-weight: bold; color: #F99157;",
    "yellow": "font-weight: bold; color: #FAC863;",
    "green": "font-weight: bold; color: #99C794;",
    "teal": "font-weight: bold; color: #5FB3B3;",
    "blue": "font-weight: bold; color: #6699CC;",
    "purple": "font-weight: bold; color: #C594C5;",
    "brown": "font-weight: bold; color: #AB7967;"
  }
  console.log('%cHI MADDY!!!', colors.purple);
  console.log('%cDo %cYou %cCheck %cConsole %cLog', colors.yellow, colors.green, colors.teal, colors.blue, colors.purple);
  console.log('%cI wonder %cif you\'ll %cforget about %call other %cf-ups', colors.brown, colors.purple, colors.red, colors.orange, colors.yellow);
  console.log('%cIf I %cjust %cgive %cyou %csome %ccolors %cfirst....', colors.orange, colors.yellow, colors.red, colors.gray, colors.blue, colors.teal, colors.green);
  console.log('%cNothing to see here', colors.gray);
}

module.exports = { colorfulConsole };