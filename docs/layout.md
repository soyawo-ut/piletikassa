# Paigutus, ühikud ja responsiivsus

## Kasutatud ühikud

`px` kasutatakse ainult seal, kus väärtus peab olema füüsiliselt väike ja püsiv, näiteks 1px piirjoon.

`rem` kasutatakse lehe paigutuse, vahede ja tüpograafia jaoks. Kui kasutaja muudab brauseri põhikirja suurust, muutub ka paigutus.

`em` kasutatakse elemendi enda kirjaga seotud väärtuste jaoks.

`ch` kasutatakse tekstirea pikkuse piiramiseks.

`vw` kasutatakse clamp() valemis sujuva tüpograafia jaoks.

## Loogilised omadused

Füüsiliste omaduste asemel kasutatakse näiteks:

- `inline-size`
- `max-inline-size`
- `margin-inline`
- `margin-block`
- `padding-inline`
- `padding-block`

Need töötavad paremini erinevate kirjutamissuundade korral.

## Ruudustik

Kaartide ruudustik:

`grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));`

See võimaldab kaartidel automaatselt ümber paigutuda ilma `@media` päringuta.

## Container query

`.events` on konteiner:

`container-type: inline-size`

`@container` kontrollib sündmuste komponendi enda laiust, mitte kogu ekraani laiust.

## clamp() arvutused

### h1

`font-size: clamp(1.75rem, 1rem + 2.5vw, 3rem)`

Eeldus: `1rem = 16px`.

| ekraan | h1 |
|---|---:|
| 320 px | 28,0 px (põhi) |
| 375 px | 28,0 px (põhi) |
| 480 px | 28,0 px (põhi) |
| 768 px | 35,2 px |
| 1024 px | 41,6 px |
| 1280 px | 48,0 px (lagi) |
| 1440 px | 48,0 px (lagi) |
| 1920 px | 48,0 px (lagi) |

h1 kasutab alumist piiri kuni 480 px lähedal ja jõuab ülemise piirini 1280 px juures.

### h2

`font-size: clamp(1.35rem, 1rem + 1.2vw, 2rem)`

Eeldus: `1rem = 16px`.

| ekraan | h2 |
|---|---:|
| 320 px | 21,6 px (põhi) |
| 375 px | 21,6 px (põhi) |
| 480 px | 21,8 px |
| 768 px | 25,2 px |
| 1024 px | 28,3 px |
| 1280 px | 31,4 px |
| 1440 px | 32,0 px (lagi) |
| 1920 px | 32,0 px (lagi) |

## Meediapäringud

Kaartide paigutuse jaoks ei kasutata ühtegi `@media` päringut.

Ruudustik kohandub `auto-fit` ja `minmax()` abil ning komponendi muutused tehakse `@container` päringuga.