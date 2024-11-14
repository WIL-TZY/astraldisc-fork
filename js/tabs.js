const tabs = document.querySelectorAll(".tab-btn");
tabs.forEach(tab => tab.addEventListener("click", () => tabClicked(tab)));
const tabClicked = (tab) => {
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("show"));
    const contentId = tab.getAttribute("data-content-id");
    const content = document.getElementById(contentId);
    content.classList.add("show");
}