# Bootstrap ja CSS-i jõudlus

## Bootstrap Sass

Bootstrapi Sass muutujad kasutavad `!default` väärtusi.

Seetõttu tuleb enda väärtus määrata enne Bootstrapi muutujate importimist.

Kasutasin:

`$primary: #0b3d52;`

Muudatuse tegemine pärast Bootstrapi muutujate importimist ei muudaks juba määratud väärtust.

## Imporditud Bootstrapi osad

Projektis kasutatakse järgmisi osi:

- functions
- variables
- variables-dark
- maps
- mixins
- root
- reboot
- type
- forms
- buttons
- card

## Välja jäetud Bootstrapi osad

Jätsin välja komponendid, mida piletikassa praegu ei kasuta:

- modal
- dropdown
- carousel
- offcanvas
- accordion
- toast
- tooltip
- popover
- spinner
- progress
- navbar
- pagination
- breadcrumb

Nende CSS-i laadimine suurendaks faili ilma, et projekt neid kasutaks.

## Kus Bootstrapi kohandamine lõpeb

Bootstrapi olemasolevaid komponente on mõistlik kohandada Sass muutujatega.

Kui vajalik komponent või käitumine Bootstrapis puudub, tuleb kasutada projekti enda CSS-i.

## 5000 kaardi paigutuse mõõtmine

Mõõtmine tehti brauseris `performance.now()` abil 5000 kaardiga.

Mõlemat varianti mõõdeti kolm korda ja tabelis kasutatakse mediaanväärtust.

| paigutus | aeg |
|---|---:|
| ilma content-visibility-ta | 195.20 ms |
| content-visibility: auto | 70.50 ms |

`content-visibility: auto` oli selles mõõtmises märgatavalt kiirem.

Ilma `content-visibility`-ta mõõdetud väärtused olid:

- 207.40 ms
- 195.20 ms
- 143.40 ms

`content-visibility: auto` väärtused olid:

- 72.20 ms
- 70.50 ms
- 58.00 ms

## Valijate mõõtmine

| valija | aeg |
|---|---:|
| `.card` | 69.00 ms |
| `article` | 62.40 ms |
| `*` | 67.80 ms |
| `#cards .card p` | 50.00 ms |

Selles konkreetses testis oli kiireim valija `#cards .card p` ja aeglaseim `.card`.

Tulemust ei saa üldistada nii, et mõni valijatüüp oleks alati kiirem või aeglasem. Tulemus sõltub DOM-i struktuurist, brauserist ja mõõtmise tingimustest.

## Järeldus

5000 elemendi paigutuse puhul oli erinevus palju suurem kui üksikute CSS-valijate mõõtmiste vahel.

Selles katses:

- tavaline paigutus: 195.20 ms
- `content-visibility: auto`: 70.50 ms

Seetõttu tasub jõudluse analüüsis esmalt vaadata paigutuse ja renderdamise kulusid ning alles seejärel väiksemaid erinevusi valijate vahel.