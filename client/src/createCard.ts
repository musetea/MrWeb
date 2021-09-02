class CreateCard {

   private $cardNumber: HTMLInputElement;
   private $cardNumberBox: HTMLDivElement;

   private $cardHolder: HTMLInputElement;
   private $cardCvv: HTMLInputElement;
   private $cardHolderBox: HTMLDivElement;

   private $cardExpMonth: HTMLSelectElement;
   private $cardExpYear: HTMLSelectElement;

   private $cardExpMonthBox: HTMLSpanElement;
   private $cardExpYearBox: HTMLSpanElement;



   constructor() {
      this.$cardNumberBox = document.querySelector(".card-number-box")! as HTMLDivElement;
      this.$cardNumber = document.querySelector('.card-number')! as HTMLInputElement;
      this.$cardNumber.oninput = () => {
         this.$cardNumberBox.innerText = this.$cardNumber.value;
      }

      this.$cardHolderBox = document.querySelector(".card-holder-name")! as HTMLDivElement;
      this.$cardHolder = document.querySelector('.card-holder')! as HTMLInputElement;
      this.$cardHolder.oninput = () => {
         this.$cardHolderBox.innerText = this.$cardHolder.value;
      }

      this.$cardExpMonth = document.querySelector(".expiration-mm")! as HTMLSelectElement;
      this.$cardExpYear = document.querySelector(".expiration-year")! as HTMLSelectElement;

      this.$cardExpMonthBox = document.querySelector("span.exp-month")! as HTMLSpanElement;
      this.$cardExpYearBox = document.querySelector("span.exp-year")! as HTMLSpanElement;


      this.$cardExpMonth.onchange = () => {
         this.$cardExpMonthBox.innerText = this.$cardExpMonth.value;
      }
      this.$cardExpYear.onchange = () => {
         this.$cardExpYearBox.innerText = this.$cardExpYear.value;
      }
      this.$cardCvv = document.querySelector(".card-cvv")! as HTMLInputElement;
      const $front = document.querySelector(".front")! as HTMLDivElement;
      const $back = document.querySelector(".back")! as HTMLDivElement;
      const $cvvBox = document.querySelector(".back .cvv-box")! as HTMLDivElement;

      this.$cardCvv.onmouseenter = () => {
         $front.style.transform = `perspective(1000px) rotateY(-180deg)`;
         $back.style.transform = `perspective(1000px) rotateY(0deg)`;
      }
      this.$cardCvv.onmouseleave = () => {
         $front.style.transform = `perspective(1000px) rotateY(0deg)`;
         $back.style.transform = `perspective(1000px) rotateY(180deg)`;
      }
      this.$cardCvv.oninput = (e) => {
         $cvvBox.innerText = this.$cardCvv.value;
      }
   }
}

new CreateCard();