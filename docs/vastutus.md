# Ülesanne 2 - Vastutuse jaotus

## Klassifikatsioon

| # | Rakenduse osa | Klient | Server | Põhjendus |
|---|---|---|---|---|
| 1 | Sündmuste nimekirja kuvamine | ✓ | ✓ | Server annab sündmuste andmed ja klient kuvab need kasutajale. |
| 2 | Kuupäevavälja vorming | ✓ |  | Kuupäeva kuvamise vorming on kasutajaliidese ülesanne. |
| 3 | "Vabu kohti vähemalt" filtri rakendamine | ✓ | ✓ | Klient võib filtrit kuvamiseks kasutada, kuid server peab tagastama õiged ja lubatud andmed. |
| 4 | Kontroll, kas väli on täitmata | ✓ | ✓ | Klient annab kiire tagasiside, kuid server peab sisendit samuti kontrollima. |
| 5 | Kontroll, kas sündmus on välja müüdud | ✓ | ✓ | Klient võib olekut näidata, kuid tegelik müügiseis tuleb kontrollida serveris. |
| 6 | Kontroll, kas kasutaja on sisse logitud | ✓ | ✓ | Klient võib muuta kasutajaliidest, kuid tegeliku autentimise kontroll peab tegema server. |
| 7 | Kontroll, kas kasutaja on selle sündmuse korraldaja |  | ✓ | Kasutaja õigusi peab kontrollima server, sest klienti saab muuta. |
| 8 | Ootejärjekorra koha arvutamine |  | ✓ | Järjekorra õige seis sõltub serveris olevatest kõigi kasutajate andmetest. |
| 9 | Saaliplaani kohtade genereerimine ridade ja numbrite kaupa | ✓ | ✓ | Server annab kohtade andmed ning klient kuvab nende põhjal saaliplaani. |
| 10 | Müügiaruande arvutamine |  | ✓ | Müügiaruanne peab põhinema serveris olevatel usaldusväärsetel müügiandmetel. |
| 11 | Tulemuste sortimine juba laaditud tabelis | ✓ |  | Juba kliendile laaditud andmeid saab sortida kasutajaliideses ilma serverita. |
| 12 | Andmebaasi parool |  | ✓ | Andmebaasi parool on serveri saladus ja seda ei tohi kliendile saata. |

## Kolm asja, mis ei tohi kunagi kliendile jõuda

1. **Andmebaasi parool** — selle abil võiks ründaja proovida andmebaasile ligi pääseda.
2. **Salajased API võtmed ja privaatvõtmed** — kliendile saadetud saladusi saab kasutaja näha või kopeerida.
3. **Teiste kasutajate konfidentsiaalsed andmed** — kasutaja peab saama ainult need andmed, mille nägemiseks tal on õigus.

## Kolm rünnakut

| Rünnak | Kuidas | Miks serveripoolne kontroll aitab |
|---|---|---|
| Vormikontrollist möödahiilimine | Ründaja saadab päringu otse serverile ning jätab kliendipoolse kontrolli vahele. | Server kontrollib sisendit sõltumata kliendi käitumisest. |
| Sisselogimise oleku võltsimine | Ründaja muudab brauseris kliendipoolset olekut nii, et kasutajaliides näitab teda sisselogituna. | Server kontrollib tegelikku autentimist iga kaitstud päringu puhul. |
| Korraldaja õiguste võltsimine | Ründaja muudab kliendis sündmuse või kasutaja ID-d ja proovib teha toimingu, milleks tal õigust pole. | Server kontrollib andmebaasist, kas kasutajal on selle sündmuse jaoks vajalik õigus. |