"use strict";
class CreateCard {
    constructor() {
        this.$cardNumberBox = document.querySelector(".card-number-box");
        this.$cardNumber = document.querySelector('.card-number');
        this.$cardNumber.oninput = () => {
            this.$cardNumberBox.innerText = this.$cardNumber.value;
        };
        this.$cardHolderBox = document.querySelector(".card-holder-name");
        this.$cardHolder = document.querySelector('.card-holder');
        this.$cardHolder.oninput = () => {
            this.$cardHolderBox.innerText = this.$cardHolder.value;
        };
        this.$cardExpMonth = document.querySelector(".expiration-mm");
        this.$cardExpYear = document.querySelector(".expiration-year");
        this.$cardExpMonthBox = document.querySelector("span.exp-month");
        this.$cardExpYearBox = document.querySelector("span.exp-year");
        this.$cardExpMonth.onchange = () => {
            this.$cardExpMonthBox.innerText = this.$cardExpMonth.value;
        };
        this.$cardExpYear.onchange = () => {
            this.$cardExpYearBox.innerText = this.$cardExpYear.value;
        };
        this.$cardCvv = document.querySelector(".card-cvv");
        const $front = document.querySelector(".front");
        const $back = document.querySelector(".back");
        const $cvvBox = document.querySelector(".back .cvv-box");
        this.$cardCvv.onmouseenter = () => {
            $front.style.transform = `perspective(1000px) rotateY(-180deg)`;
            $back.style.transform = `perspective(1000px) rotateY(0deg)`;
        };
        this.$cardCvv.onmouseleave = () => {
            $front.style.transform = `perspective(1000px) rotateY(0deg)`;
            $back.style.transform = `perspective(1000px) rotateY(180deg)`;
        };
        this.$cardCvv.oninput = (e) => {
            $cvvBox.innerText = this.$cardCvv.value;
        };
    }
}
new CreateCard();
