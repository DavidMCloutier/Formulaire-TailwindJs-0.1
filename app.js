const form = document.querySelector("#form");
const inputName = document.querySelector("#inputName");
const inputAge = document.querySelector("#inputAge");
const btnSend = document.querySelector("#btnSend");
const messageName = document.querySelector("#spanName");
const messageAge = document.querySelector("#spanAge");
let nameValue;

const formSetup = () => {
  const inputNameSend = () => {
    btnSend.addEventListener("click", () => {
      nameValue = inputName.value;
      const nameRegex = /^[A-Za-z]+$/;
      let nameValid = false;
      if (!nameRegex.test(nameValue)) {
        messageName.textContent = `Entrer seulement des lettres sans espaces`;
        messageName.className = "text-red-600 text-center";
      } else {
        messageName.textContent = `Vous avez bien entré la valeur demandé`;
        messageName.className = "text-lime-600 text-center";
        nameValid = true;
      }
      checkFormValidity(nameValid);
    });
  };

  inputNameSend();

  const inputAgeSend = () => {
    btnSend.addEventListener("click", () => {
      const ageValue = inputAge.value;
      const ageRegex = /^[0-9]+$/;
      let ageValid = false;
      if (!ageRegex.test(ageValue)) {
        messageAge.textContent = `Entrer seulement des chiffres sans espaces`;
        messageAge.className = "text-red-600 text-center";
      } else {
        messageAge.textContent = `Vous avez bien entré la valeur demandé`;
        messageAge.className = "text-lime-600 text-center";
        ageValid = true;
      }
      checkFormValidity(ageValid);
    });
  };

  inputAgeSend();
};

const checkFormValidity = (isValid) => {
  if (isValid) {
    const nameValid = messageName.className.includes("text-lime-600");
    const ageValid = messageAge.className.includes("text-lime-600");
    if (nameValid && ageValid) {
      form.remove();
      const succes = document.createElement("div");
      succes.setAttribute("id", "box")
      succes.classList = "badge badge-accent w-4/12 h-10 text-black font-mono";
      succes.textContent = `Merci ${nameValue} !`;
      document.body.append(succes);
    }
  }
};

formSetup();