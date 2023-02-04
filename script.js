function addToast() {
    const toast_container = document.querySelector(".toast_container");
    let toastText = "Hey there, All Done!!!";

    const customToast = document.createElement("div");
    customToast.classList.add("toast");
    customToast.innerText = toastText;
    toast_container.appendChild(customToast);
    setTimeout(() => {
        customToast.classList.add("active");
    }, 10);

    setTimeout(() => {
        customToast.classList.remove("active");
        setTimeout(() => {
            toast_container.removeChild(customToast);
        }, 500);
    }, 1500);
}
