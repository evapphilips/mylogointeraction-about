// Eva Philips
// January 4, 2022
// Description: An interactive element to place within my website in order to explain the features of my logo.

// Variables
var tab1;
var tab2;
var tab3;
var overlayLogo;
var defaultLogo;
var tabDescription;

// when page loads, run the init funciton
window.addEventListener("load", init);

// On load, run init functioon
function init() {

    // Connect to the tabs
    tab1 = document.getElementById("tab1");
    tab2 = document.getElementById("tab2");
    tab3 = document.getElementById("tab3");

    // Connect the logo images
    defaultLogo = document.getElementById("defaultLogo")
    overlayLogo = document.getElementById("overlayLogo")

    // Connect the description div
    tabDescription = document.getElementById('tabDescription')


    // Create mouseover event listeners for the tabs
    tab1.addEventListener("mouseover", tab1Animation);
    tab2.addEventListener("mouseover", tab2Animation);
    tab3.addEventListener("mouseover", tab3Animation);

     // Create mouseout event listeners for the tabs
     tab1.addEventListener("mouseout", stopAnimating);
     tab2.addEventListener("mouseout", stopAnimating);
     tab3.addEventListener("mouseout", stopAnimating);


}

function tab1Animation() {
    // Show and change description copy
    tabDescription.style.visibility = "visible";
    tabDescription.innerHTML = "I use the tools I have on hand to imagine what's possible.";
    
    // Change tab text color
    tab1.style.color = "black"

    // Show and change logo to the tab 1 logo
    overlayLogo.src = "https://cdn.glitch.me/11646cab-d786-42b1-a092-a9fc10841a6e/logo-tab1.png?v=1641320466727"
    overlayLogo.style.visibility = "visible";
    defaultLogo.style.visibility = "hidden";
}

function tab2Animation() {
    // Show and change description copy
    tabDescription.style.visibility = "visible";
    tabDescription.innerHTML = "I value a balance between spontaneity and order.";

    // Change tab text color
    tab2.style.color = "black"

    // Show and change logo to the tab 2 logo
    overlayLogo.src = "https://cdn.glitch.me/11646cab-d786-42b1-a092-a9fc10841a6e/logo-tab2.png?v=1641320470272"
    overlayLogo.style.visibility = "visible";
    defaultLogo.style.visibility = "hidden";
}

function tab3Animation() {
    // Show and change description copy
    tabDescription.style.visibility = "visible";
    tabDescription.innerHTML = "I take a stand, and see it through.";

    // Change tab text color
    tab3.style.color = "black"

    // Show and change logo to the tab 3 logo
    overlayLogo.src = "https://cdn.glitch.me/11646cab-d786-42b1-a092-a9fc10841a6e/logo-tab3.png?v=1641320473334"
    overlayLogo.classList.add("fading-img");
    overlayLogo.style.visibility = "visible";
    defaultLogo.style.visibility = "visible";
}

function stopAnimating() {
    // Hide the description copy
    tabDescription.style.visibility = "hidden";

    // Reset the tab text color
    tab1.style.color = "darkgray"
    tab2.style.color = "darkgray"
    tab3.style.color = "darkgray"

    // Reset the logos
    overlayLogo.classList.remove("fading-img");
    overlayLogo.style.visibility = "hidden";
    defaultLogo.style.visibility = "visible";

    
    
}
