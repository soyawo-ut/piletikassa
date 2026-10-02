# Kaskaad, kihid ja disainižetoonid

## Kihtide järjekord

CSS-is on kihid määratud enne teisi reegleid:

`base, framework, components, ours, exception`

Kui sama päritolu ja tähtsusega deklaratsioonid konkureerivad,
siis tavareeglite puhul võidab hilisem kiht enne spetsiifilisuse võrdlemist.

Seetõttu võidab kihis `ours` olev `.field` kihis `framework`
oleva `.field` reegli, kuigi mõlema spetsiifilisus on 0-1-0.

Kihid võimaldavad määrata reeglite prioriteedi ette ja vähendavad
vajadust tõsta spetsiifilisust või kasutada `!important`.

## Spetsiifilisus

| valija | spetsiifilisus | selgitus |
|---|---|---|
| `.field` | 0-1-0 | üks klass |
| `.page .field` | 0-2-0 | kaks klassi |
| `:where(h1, h2, h3)` | 0-0-0 | `:where()` ei lisa spetsiifilisust |
| `:is(h2, h3)` | 0-0-1 | loetakse kõige spetsiifilisem argument |
| `.cards > li :is(h2, h3)` | 0-1-2 | üks klass ja kaks tüüpi |
| `.cards > li:not(.featured)` | 0-2-1 | `.cards`, `.featured` ja `li` |
| `.error:not(:empty)` | 0-2-0 | klass ja pseudoklass |
| `:root:not([data-theme="light"])` | 0-2-0 | `:root` ja atribuudivalija |
| `#purchase .field` | 1-1-0 | üks ID ja üks klass |

## Miks kiht asendab !important-i

Kihtide järjekord võimaldab määrata, millise grupi reeglid on tähtsamad.

Näiteks `.field` reegel kihis `ours` võidab `.field` reegli kihis
`framework`, kuigi nende spetsiifilisus on täpselt sama.

Seetõttu ei ole vaja kasutada `!important`, et hiljem laaditud või
raamistiku stiili üle kirjutada.

## Teema

Teema väärtused on määratud CSS kohandatud omadustega.

1. `:root` määrab vaikimisi heleda teema.
2. `prefers-color-scheme: dark` kasutab süsteemi tumedat eelistust.
3. `[data-theme="light"]` ja `[data-theme="dark"]` võimaldavad kasutaja
   valikul süsteemi eelistuse üle kirjutada.
4. `color-scheme` võimaldab brauseri enda vormielementidel ja
   kerimisribadel teemaga kaasa minna.