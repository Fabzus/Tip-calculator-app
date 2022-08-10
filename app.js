const bill = document.querySelector("#bill");
const people = document.querySelector("#people");
const tipRadio = document.querySelectorAll(".tipRadio");
const tipAmount = document.querySelector("#tipAmount");
const tipTotal = document.querySelector("#tipTotal");
const customTip = document.querySelector("#custom");
const resetBtn = document.querySelector("#reset-btn");

let billVal;
let peopeVal;
let tipPercent;

const result = (amount, total) => {
  tipAmount.innerHTML = "$" + amount;
  tipTotal.innerHTML = "$" + total;
};

const valSetter = () => {
  billVal = Number(bill.value);
  peopeVal = Number(people.value);
  if (billVal != "" || peopeVal != "") {
    btnResetActive();
    calculator();
  } else {
    btnResetInactive();
  }
};

const customSetter = () => {
  tipRadio.forEach((e) => (e.checked = false));
  if (
    tipRadio[0].checked != true &&
    tipRadio[1].checked != true &&
    tipRadio[2].checked != true &&
    tipRadio[3].checked != true &&
    tipRadio[4].checked != true
  ) {
    tipPercent = Number(customTip.value);
    btnResetActive();
    calculator();
  }
};

tipRadio.forEach((e) =>
  e.addEventListener("click", () => {
    if ((e.checked = true)) {
      tipPercent = Number(e.value);
      btnResetActive();
      calculator();
    }
  })
);

const calculator = () => {
  if (billVal != "" && peopeVal != "" && tipPercent != "") {
    let amount = (billVal * (tipPercent / 100)) / peopeVal;
    let total = (billVal + billVal * (tipPercent / 100)) / peopeVal;
    amount = Math.round((amount + Number.EPSILON) * 100) / 100;
    total = Math.round((total + Number.EPSILON) * 100) / 100;
    result(amount, total);
  }
};

resetBtn.addEventListener("click", () => {
  billVal = 0;
  peopeVal = 0;
  tipPercent = 0;
  bill.value = "";
  people.value = "";
  customTip.value = "";
  tipAmount.innerHTML = "$0.00";
  tipTotal.innerHTML = "$0.00";

  btnResetInactive();
});

const btnResetActive = () => {
  resetBtn.style.cursor = "pointer";
  resetBtn.style.backgroundColor = "var(--cyan)";
  resetBtn.style.color = "var(--dark-cyan)";
  resetBtn.style.boxShadow = "1px 1px 5px rgba(0, 0, 0, 0.292)";
};

const btnResetInactive = () => {
  resetBtn.style.cursor = "auto";
  resetBtn.style.backgroundColor = "var(--dark-grey-cyan)";
  resetBtn.style.color = "var(--grey-cyan)";
  resetBtn.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
};
