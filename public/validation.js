export function message(field) {
    const validity = field.validity;

    if (validity.valueMissing) {
        return "See väli on kohustuslik.";
    }

    if (validity.typeMismatch) {
        return "Kontrolli sisestatud väärtuse kuju.";
    }

    if (validity.patternMismatch) {
        return "Kontrolli välja kuju.";
    }

    if (validity.tooShort) {
        return `Vähemalt ${field.minLength} tähemärki.`;
    }

    if (validity.tooLong) {
        return `Maksimaalselt ${field.maxLength} tähemärki.`;
    }

    if (validity.rangeUnderflow) {
        return `Vähim väärtus on ${field.min}.`;
    }

    if (validity.rangeOverflow) {
        return `Suurim väärtus on ${field.max}.`;
    }

    if (validity.customError) {
        return field.validationMessage;
    }

    return field.validationMessage;
}

export function show(field) {
    const error = document.getElementById(`${field.id}-error`);

    if (!error) {
        return;
    }

    if (field.validity.valid) {
        error.textContent = "";
        field.removeAttribute("aria-invalid");
    } else {
        error.textContent = message(field);
        field.setAttribute("aria-invalid", "true");
    }
}

export function checkMatch(a, b) {
    if (b.value !== "" && a.value !== b.value) {
        b.setCustomValidity("E-posti aadressid ei ühti.");
    } else {
        b.setCustomValidity("");
    }
}

const form = document.getElementById("purchase-form");

const fields = Array.from(
    form.querySelectorAll("input, select")
);

const email = document.getElementById("email");
const emailConfirm = document.getElementById("email-confirm");

function clearMessage(field) {
    const error = document.getElementById(`${field.id}-error`);

    if (error) {
        error.textContent = "";
    }

    field.removeAttribute("aria-invalid");
}

fields.forEach((field) => {
    field.addEventListener("blur", () => {
        if (field === email || field === emailConfirm) {
            checkMatch(email, emailConfirm);
        }

        show(field);
    });

    field.addEventListener("input", () => {
        if (field === email || field === emailConfirm) {
            checkMatch(email, emailConfirm);
        }

        clearMessage(field);
    });
});

form.addEventListener("submit", (event) => {
    checkMatch(email, emailConfirm);

    let firstInvalid = null;

    fields.forEach((field) => {
        show(field);

        if (!field.validity.valid && firstInvalid === null) {
            firstInvalid = field;
        }
    });

    if (firstInvalid) {
        event.preventDefault();
        firstInvalid.focus();
    }
});