const percentages = document.querySelectorAll(".percentage");

percentages.forEach((percentage) => {
    const percent = percentage.getAttribute("data-percent");
    percentage.style.setProperty("--percentage", percent);
});

function submit(){
    alert("Your Message Submited Succesfully ");
}
// new


