# Nõuded ja arhitektuuri valik

## Rakenduse eesmärk

Piletikassa võimaldab kasutajal leida sündmuse, valida pileti või koha, teha ostu ning kasutada ostetud piletit sissepääsuks.

## Kolm asja, mis peavad õnnestuma

1. Kasutaja peab leidma soovitud sündmuse ja nägema selle toimumiskohta ning vabu kohti.
2. Pileti ost peab olema korrektne: valitud koht peab olema saadaval ja ost peab seostuma õige kasutaja ning sündmusega.
3. Ostetud pilet peab võimaldama kontrollitud sissepääsu sündmusele.

## Rollid

### Kasutaja

Kasutaja on globaalne roll.

Kasutaja saab:
- vaadata sündmusi;
- valida sündmuse ja koha;
- osta pileti;
- kasutada piletit sissepääsuks.

### Korraldaja

Korraldaja ei ole eraldi konto liik.

Korraldaja on seos kasutaja ja sündmuse vahel: sündmuse looja on selle sündmuse korraldaja.

Sama inimene võib:
- ühe sündmuse puhul olla korraldaja;
- teise sündmuse puhul olla tavaline ostja.

Korraldaja õigused kehtivad ainult tema sündmuse ulatuses.

### Süsteemihaldur

Süsteemihaldur on globaalne roll.

Süsteemihaldur haldab toimumiskohti ja nendega seotud saaliplaane.

## Funktsioonid tähtsuse järjekorras

1. Sündmuse leidmine ja valimine.
2. Pileti või koha valimine.
3. Ostu ja makse tegemine.
4. Ostetud piletiga sissepääs.
5. Korraldaja sündmuse haldamine.
6. Toimumiskohtade ja saaliplaanide haldamine.

## Esimese nelja funktsiooni põhjendus

Esimesed neli funktsiooni moodustavad ühe kasutajaloo:

**tule -> vali -> maksa -> sisene**

### 1. Sündmuse leidmine

Ilma sündmuse leidmise ja valimiseta ei saa kasutaja ostuprotsessi alustada.

### 2. Pileti või koha valimine

Pärast sündmuse valimist peab kasutaja otsustama, mida ta ostab. See määrab ostuga seotud pileti ja vajadusel konkreetse koha.

### 3. Ostu ja makse tegemine

Valitud pilet või koht peab muutuma tegelikuks ostuks. Süsteem peab hoidma ostu ja ostja seost.

### 4. Sissepääs

Ostuprotsessi lõpptulemus on kehtiv pilet, mida saab sündmusele sisenemisel kontrollida.

## Andmete üldpilt

Andmemudel näitab olemeid ja seoseid, mitte veerge.

```text
kasutaja --< sündmus >-- toimumiskoht --< saaliplaan --< koht
   |
   +--< hinnaklass
   |
   +--< ost --< pilet >-------------------------------+
   |
   +--< sissepääs