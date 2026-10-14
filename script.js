function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const open = answer.style.display !== "block";
  answer.style.display = open ? "block" : "none";
  element.setAttribute("aria-expanded", open);
}
