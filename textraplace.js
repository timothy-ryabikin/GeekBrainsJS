function replace() {
    let textBlock = document.querySelector(".textraplace");
    let textReplaced = document.querySelector(".textraplace").textContent.replace(/\B'/g, "\"");
    textBlock.innerHTML = textReplaced;
}