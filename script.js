const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const modal = document.getElementById("myModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalBrand = document.getElementById("modalBrand");
const modalProductName = document.getElementById("modalProductName");

function updateModalContent(productBrand, productName, productImage) {
  modalBrand.textContent = productBrand;
  modalProductName.textContent = productName;
  modalImage.src = productImage;
}

function openModal() {
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("active");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".pro").forEach((product) => {
  product.addEventListener("click", () => {
    const productBrand = product.querySelector(".des span").textContent;
    const productName = product.querySelector(".des h5").textContent;
    const productImage = product.querySelector("img").src;

    updateModalContent(productBrand, productName, productImage);
    openModal();
  });
});

document.getElementById("btnClose").addEventListener("click", closeModal);

function validation(evt) {
  evt.preventDefault();

  const email = document.getElementById("newsletter-inp").value;

  if (email.includes("@") && email.includes(".com")) {
    alert("Thank You For Subscribing Gracious Garments!");
  } else {
    alert("Invalid email address");
  }
}

const button = document.getElementById("newsletter-s-b");
button.addEventListener("click", validation);

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};
