Host: www.ut.ee
Port: — (HTTPS → 443)
Tee: /et/oppimine
Päringustring: utm_source=uudiskiri
Fragment: —# Ülesanne 3 - URL lahti võetud

## 1. https://piletikassa.example.ee:8443/events/12?sort=date&available=2#seats

| Osa | Väärtus | Mida ütleb |
|---|---|---|
| Skeem | https | Ühendus kasutab HTTPS-protokolli. |
| Host | piletikassa.example.ee | Serveri domeeninimi. |
| Port | 8443 | Kasutatakse porti 8443, sest see on URL-is eraldi määratud. |
| Tee | /events/12 | Viitab sündmuse 12 ressursile. |
| Päringustring | sort=date&available=2 | Tulemused sorteeritakse kuupäeva järgi ja parameeter available on 2. |
| Fragment | seats | Viitab lehe osale nimega seats; fragment jääb brauserisse. |

## 2. http://localhost:3000/api/buyers

| Osa | Väärtus | Mida ütleb |
|---|---|---|
| Skeem | http | Ühendus kasutab HTTP-protokolli. |
| Host | localhost | Server töötab samas arvutis. |
| Port | 3000 | Kasutatakse porti 3000, sest see on URL-is määratud. |
| Tee | /api/buyers | Viitab buyers API ressursile. |
| Päringustring | — | Päringustring puudub. |
| Fragment | — | Fragment puudub. |

## 3. https://www.ut.ee/et/oppimine?utm_source=uudiskiri

| Osa | Väärtus | Mida ütleb |
|---|---|---|
| Skeem | https | Ühendus kasutab HTTPS-protokolli. |
| Host | www.ut.ee | Serveri domeeninimi. |
| Port | — | Porti pole URL-is kirjutatud; HTTPS-i vaikimisi port on 443. |
| Tee | /et/oppimine | Viitab õppimise lehele. |
| Päringustring | utm_source=uudiskiri | Näitab, et liikluse allikaks on märgitud uudiskiri. |
| Fragment | — | Fragment puudub. |

## Millised osad jõuavad serverini

| Osa | Jõuab serverini | Selgitus |
|---|---|---|
| Skeem | Jah | Ühenduse protokoll määrab, kuidas brauser serveriga ühendub. |
| Host | Jah | Host määrab, millise serveriga ühendus luuakse. |
| Port | Jah | Port määrab, millise serveri pordiga ühendus luuakse. |
| Tee | Jah | Tee saadetakse HTTP-päringus serverile. |
| Päringustring | Jah | Päringuparameetrid saadetakse serverile koos päringuga. |
| Fragment | Ei | Fragmenti brauser serverile ei saada. |