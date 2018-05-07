var wordNum = 0;
var creativity = 100;
var coffee = 5;
var money = 5;
var logText = "";
var blockLock = false;

function creativityCount()
{
  var c=document.getElementById("creativity");
  var ctx=c.getContext("2d");
  ctx.fillStyle= "#d1d1d1";
  ctx.fillRect(0,0,200,40);
  ctx.fillStyle= "#afafaf";
  ctx.fillRect(1,1,creativity*2,40);
  ctx.stroke();
  ctx.fillStyle= "#ffffff";
  ctx.font="20px Georgia";
  ctx.fillText("Creativity: " + creativity,2,20);
  if(creativity > 0)
  {
    creativity = creativity - 1;
     wordNum++;
     document.getElementById("words").innerHTML = "Your Novel's Word Count: " + wordNum;
     document.getElementById("moneys").innerHTML = "Wallet: $" + money;
   if(wordNum%247 == 0 )
   {
     money += 4;
     printConsole("Your publisher is seeing your progress and gave you some money.");
   }
   if(wordNum%600 == 0 )
   {
     money += 16;
     printConsole("You have reached a major milestone, your publisher gave you a bonus.");
   }
 }
}
var cupsDrunk = 0;
var rA = 0;
var rand = getRndInteger(3, 85);
var randB = getRndInteger(860, 1285);

function drinkCoffee()
{
  if(creativity < 80 && coffee > 0 && !blockLock)
  {
    creativity += 20;
    coffee -= 1;
    cupsDrunk++;
    if(cupsDrunk == 16)
    {
      printConsole("You have now consumed 1 gallon of coffee.");
    }
    if(cupsDrunk > 16 && cupsDrunk%16 == 0)
    {
      printConsole("You have now consumed " + (cupsDrunk/16) + " gallons of coffee.");
    }

    if(cupsDrunk%rand == 0)
    {
      printConsole("You have writer's block.");
      rand = getRndInteger(20, 185);
      clearInterval(startCreativityCount);
      setTimeout(BlockRestart, 3000);
      blockLock = true;
    }

    if(cupsDrunk%randB == 0)
    {
      rA = getRndInteger(0, 5);
      printConsole("You found a major plot hole in chapter " + rA + ". You have to do a lot of rewriting.");
      clearInterval(startCreativityCount);
      setTimeout(BlockRestart, 3000 * (6 - rA));
      blockLock = true;
    }
    coffeeCount();
  }
}

function BlockRestart()
{
  printConsole("Creative inspiration struck once again!")
  startCreativityCount = setInterval(creativityCount, 100);
  blockLock = false;
}

function coffeeCount()
{
  var c=document.getElementById("coffee");
  var ctx=c.getContext("2d");
  ctx.fillStyle= "#d1d1d1";
  ctx.fillRect(0,0,200,40);
  ctx.fillStyle= "#7a6853";
  ctx.fillRect(1,1,coffee*20,40);
  ctx.stroke();
  ctx.fillStyle= "#ffffff";
  ctx.font="20px Georgia";
  ctx.fillText("Cups of Coffee: " + coffee,2,20);
}

function buyCoffee()
{
  if(coffee <= 5 && money >= 2 && !blockLock)
  {
    coffee += 5;
    money -= 2;
    coffeeCount();
  }
}

function printConsole(s)
{
  document.getElementById("oldBox").innerHTML = logText;
  logText += s + "<br />";
  document.getElementById("newBox").innerHTML = s;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
