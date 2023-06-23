function showContent(target) {
  const contentItems = document.querySelectorAll(".content > div");
  contentItems.forEach((item) => {
    item.style.display = "none";
  });
  const targetContent = document.getElementById(target);
  targetContent.style.display = "block";
}

// Get the current URL hash
const currentHash = window.location.hash.substr(1);

// Show the corresponding content based on the URL hash
showContent(currentHash || "home");
