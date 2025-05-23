function resizeText(element) {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + 4 + "px";
}

htmx.on("charedit-loaded", function (evt) {
  document.querySelectorAll("textarea").forEach((element) => {
    resizeText(element);
    element.addEventListener("focus", () => {
      resizeText(element);
    });
  });
});

htmx.on("refresh-stats", function (evt) {
  if (evt.detail.gold)
    document.getElementById("gold-input").value = evt.detail.gold;
});

htmx.on("omen-roll", function (evt) {
  const element = document.getElementById("omens-field");
  resizeText(element);
});

htmx.on("scar-roll", function (evt) {
  const element = document.getElementById("scars-field");
  resizeText(element);
});

window.onscroll = function () {
  let actionPad = document.getElementById("action-pad");
  if (
    window.scrollY != 0 &&
    actionPad.classList.contains("charedit-action-pad")
  ) {
    actionPad.classList.add("charedit-action-pad-top");
    actionPad.classList.remove("charedit-action-pad");
    return;
  }
  if (
    window.scrollY == 0 &&
    actionPad.classList.contains("charedit-action-pad-top")
  ) {
    actionPad.classList.remove("charedit-action-pad-top");
    actionPad.classList.add("charedit-action-pad");
  }
};
