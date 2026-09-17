# Ülesanne 6 — Latents ja renderdustee

## Latents

| samm | ut.ee | neti.ee | localhost |
|---|---:|---:|---:|
| DNS | 28.506 ms | 30.631 ms | 0.034 ms |
| TCP kaepigistus | 13.783 ms | 6.812 ms | 0.657 ms |
| TLS kaepigistus | 61.559 ms | 39.692 ms | 0 ms |
| server + 1. bait | 64.731 ms | 17.647 ms | 1.368 ms |

## Korduvad päringud

Sama hosti (ut.ee) vastu tehtud 10 päringu ajad olid erinevad.
Kõige rohkem muutus TTFB. DNS, TCP ja TLS ajad samuti varieerusid.
See näitab, et võrgu latentsus ei ole iga päringu puhul täpselt sama.

## Järjest vs paralleelselt

Järjest: 648.7186 ms

Paralleelselt: 368.3122 ms

Paralleelne variant oli umbes 280.41 ms kiirem.

## Renderdustee

Renderdust blokeerib `<link rel="stylesheet">`, sest brauser peab CSS-i laadima ja töötlema enne lehe renderdamist.

HTML-i parsimist blokeerib tavaline sünkroonne `<script>`.

`defer` lahendab parsimise blokeerimise, sest JavaScript laaditakse HTML-i parsimisega paralleelselt ja käivitatakse pärast HTML-i parsimist.

`defer` ei lahenda CSS-i renderdusblokeerimist, sest see atribuut kehtib JavaScripti `<script>` elemendile, mitte stylesheetile.

## Eksiarvamused

1. Server ei ole ainus viivituse põhjus. Enne esimest baiti kulub aega ka DNS-i, TCP ja TLS-i peale. Minu mõõtmistes olid need ajad väliste saitide puhul selgelt olemas.

2. Võrgu latentsus ei ole alati sama. ut.ee 10 kordusmõõtmise tulemused muutusid iga päringuga.

3. Järjest ja paralleelselt tehtud päringud ei võta sama palju aega. Minu mõõtmises võtsid kolm päringut järjest 648.7186 ms ja paralleelselt 368.3122 ms.

4. Localhost ei käitu latentsuse mõttes nagu väline veebisait. Localhosti DNS ja TCP ajad olid väga väikesed ning TLS-i ei kasutatud.