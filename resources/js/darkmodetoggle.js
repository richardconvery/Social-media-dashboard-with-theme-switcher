// // Select the toggle
// let darkmode = document.getElementById("toggle");
// // Listen for a click on the button
// darkmode.addEventListener('change', function(){
//     // Then toggle (add/remove) the .dark-theme class to the body
//     document.body.classList.toggle('dark-theme'); 
// })

// Select the button
const btn = document.getElementById("toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "resources/css/style.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "resources/css/dark-theme.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "resources/css/style.css";
  }
});
