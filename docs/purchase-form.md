# Ostuvorm ja valideerimine

## message() kontrollitud juhtumid

tühi kohustuslik väli -> "See väli on kohustuslik."

vale e-posti kuju -> "Kontrolli sisestatud väärtuse kuju."

patternMismatch -> "Kontrolli välja kuju."

minlength=2 -> "Vähemalt 2 tähemärki."

max=6 -> "Suurim väärtus on 6."

min=1 -> "Vähim väärtus on 1."

e-posti aadressid ei ühti -> "E-posti aadressid ei ühti."

tundmatu põhjus -> brauseri oma validationMessage

Kui korraga kehtivad valueMissing ja typeMismatch,
siis valueMissing kontrollitakse esimesena.

## :invalid ja :user-invalid

| valija | millal kehtib |
|---|---|
| :invalid | kohe, kui väli ei vasta valideerimisreeglitele |
| :user-invalid | pärast seda, kui kasutaja on väljaga tegelenud |