const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const codeText = `10.10.10.1`;
const copyCodeBtn = document.getElementById("copy-code-btn");
const copyCodeBlockBtn = document.querySelector(".code-block button");

copyCodeBtn.onclick = () => {
  navigator.clipboard
    .writeText(codeText)
    .then(() => {
      copyCodeBtn.innerHTML = `Copied`;
      setTimeout(() => (copyCodeBtn.innerHTML = `Copy Portal Link`), 500);
    })
    .catch(() => {
      copyCodeBtn.innerHTML = `Failed`;
      setTimeout(() => (copyCodeBtn.innerHTML = `Copy Portal Link`), 500);
    });
};

