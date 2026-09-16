# Ülesanne 4 - Päringu jälgimine DevToolsiga

Uuritud leht: https://www.ut.ee/et
Kuupäev: 16.09.2026

## Üldandmed

| Näitaja | Väärtus |
|---|---|
| Päringuid kokku | 57 |
| Ülekantud maht | 2.8 MB |

## Staatusekoodid

| Kood | Arv | Mida tähendab |
|---|---:|---|
| 200 | 55 | Päring õnnestus ja server tagastas vastuse. |
| 302 | 1 | Server suunas päringu ajutiselt teisele aadressile. |
| 304 | 0 | Ressurss ei ole muutunud; server võib vastata ilma sisu uuesti saatmata. |
| blocked:csp | 1 | Brauser blokeeris päringu Content Security Policy tõttu. |

## Sisutyüpide jaotus

| Tüüp | Päringute arv / maht |
|---|---|
| document | 2 päringut / 47.9 kB |
| script | 23 päringut / 781 kB |
| stylesheet | 3 päringut / 88.9 kB |
| image | 23 päringut / 1,572 kB |
| font | 3 päringut / 298 kB |
| muu | <...> |

Suurima mahu andis: <tüüp>

## Suurim üksikpäring

Aadress: https://ut.ee/sites/default/files/styles/ut_content_main_big/public/2026-08/55454993125_a48d76ea8a_o_2.jpg?h=cddec2cf&itok=7EBLzzkq
Tüüp: jpeg
Maht: 235 kB
Aeg: 232 ms

## cURL kontroll

Brauseri tulemus: brauser laadis lehe https://ut.ee/et edukalt.

Terminali tulemus: cURL päring tagastas sama lehe HTML-sisu.

Kas tulemused kattusid: jah, sisuliselt kattusid. Brauser kuvab HTML-i veebilehena, terminal näitab sama vastuse lähtekoodi tekstina.

## Kolm järeldust

1. Ühe veebilehe avamine tekitab palju eraldi võrgupäringuid; selles mõõtmises oli neid 57.
2. Kõige suurema ülekantud mahu moodustasid pildid: 23 päringut ja 1,572 kB.
3. Sama HTTP-päringu saab saata ka käsurealt cURL-iga; brauser ei ole päringu tegemiseks ainus klient.