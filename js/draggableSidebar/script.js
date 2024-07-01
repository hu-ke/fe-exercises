// Get the sidebar element
var sidebar = document.getElementById("sidebar");

// Initialize the sidebar position
var sidebarWidth = localStorage.getItem("sidebarWidth");

if (sidebarWidth) {
  sidebar.style.width = sidebarWidth + "px";
}

// Make the sidebar draggable and expandable
var isDragging = false;
var startX;
var initialWidth = sidebar.offsetWidth;

sidebar.querySelector(".handle").addEventListener("mousedown", function(e) {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener("mousemove", function(e) {
  if (isDragging) {
    var newWidth = initialWidth + (e.clientX - startX);
    sidebar.style.width = newWidth + "px";
  }
});

document.addEventListener("mouseup", function() {
  if (isDragging) {
    isDragging = false;
    // Save the sidebar width
    localStorage.setItem("sidebarWidth", sidebar.offsetWidth);
    initialWidth = sidebar.offsetWidth;
  }
});
