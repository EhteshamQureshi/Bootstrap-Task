if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // Changing the text when the mobile browser is detected.
  // Getting the span element of text
  document.getElementById("show").innerHTML = "Mobile";
} else {
  document.getElementById("show").innerHTML = "Desktop";
}
