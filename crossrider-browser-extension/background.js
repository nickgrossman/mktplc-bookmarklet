/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://crossrider.wiki.zoho.com/Background-Code.html
*************************************************************************************/


//Place your code here (ideal for handling toolbar button, global timers, etc.)

/************************************************************************************
  This is your background code.
  For more information please visit our wiki site: 
  http://crossrider.wiki.zoho.com/Background-Code.html
*************************************************************************************/


//Place your code here (ideal for handling toolbar button, global timers, etc.)    
/*****************
This background code is showing how to interact with the browser button.
In Firefox you have two main options:
     1. setting onClick event
     2. change the currently displayed icon
In Chrome you have more options, that includes:
     1. decide whether to work with popup window or set onClick event (you can change it programmatically but to work with popup window you must set it in advance at the "Browser" tab)
     2. change the currently displayed icon
     3. add badge text to the button icon + set the badge color
     4. set button's tooltip
*****************/

var counter = 0;
var newColor = [255, 0, 0, 255]; //red


function buttonClick() {
  if (counter==0) alert("Thank you for clicking my app's button!");
  
  counter++;

  if (appAPI.platform == "CH") {
    //show the number of clicks at as badge on the button icon
    appAPI.chrome.browserAction.setBadgeText(counter.toString());
    
    //each click change the color between red and green
    if ((counter % 2) != 0) newColor = [255, 0, 0, 255] //red
      else newColor = [0, 200, 0, 100]; //green
    appAPI.chrome.browserAction.setBadgeBackgroundColor(newColor);
    
    //set the tooltip of the button
    appAPI.chrome.browserAction.setTitle("you clicked the button " + counter.toString() + " times");
    
    //switch to a new icon
    appAPI.chrome.browserAction.setIcon((counter % 5)+1);
  }
  
  //this app changes the button icon on each click.
  if (appAPI.platform == "FF") {
    appAPI.firefox.browserAction.setIcon((counter % 5)+1); 
    appAPI.firefox.browserAction.setTitle("you clicked the button " + counter.toString() + " times");
  } 
  
  //NOTE: all JS and API functions are identical for all platforms with one exception of browser specific API's such as toolbar button (as each browser has different capabilities)

}



if (appAPI.platform == "FF") {
  //set the browser button onClick function for Firefox
  appAPI.firefox.browserAction.onClick(buttonClick);
  
  //Firefox doesn't put the icon by default so we need to "call it" - setIcon with no param is like setIcon(1)
  appAPI.firefox.browserAction.setIcon(); 
}

//set the browser button onClick function for Chrome
if (appAPI.platform == "CH") appAPI.chrome.browserAction.onClick(buttonClick);
