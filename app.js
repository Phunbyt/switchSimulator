class Switcher {
    constructor() {
        this.switchPlate = document.querySelector(".switch");
        this.switchBtn = document.querySelector(".switch-btn");
        this.text = document.querySelector("h2");
        this.body = document.querySelector("body");
    }

    backChange() {
        let letters = "0123456789ABCDEF";
        let hash = "#";
        for (let i = 0; i < 6; i++) {
            hash += letters[Math.floor(Math.random() * 6)];
        }
        this.body.style.backgroundColor = hash;
    }

    toggleBtn() {
        this.switchBtn.classList.toggle("active");
        if (this.switchPlate.classList.toggle("active")) {
            this.text.innerText = "ON";
            this.backChange();
        } else {
            this.text.innerText = "OFF";
            this.body.style.backgroundColor = "";
        }
    }
}

const theSwitch = new Switcher();

theSwitch.switchBtn.addEventListener("click", function() {
    theSwitch.toggleBtn();
});