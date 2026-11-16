# Mijn Uitleenregister

Een eenvoudige, Nederlandstalige webapp om je persoonlijke spullen bij
te houden en uitleningen te registreren\. Denk aan gereedschap,
apparaten, kampeerspullen, boeken of andere artikelen die je uitleent
aan familie, vrienden of bekenden\.

De applicatie bestaat uit één HTML\-bestand en werkt rechtstreeks in je
browser\. Er is geen installatie, account of server nodig\.

## Functies

- **Dashboard** – Bekijk in één oogopslag hoeveel artikelen je hebt,
  wat is uitgeleend, wat beschikbaar is en welke uitleningen te laat
  zijn\.
- **Artikelen beheren** – Voeg artikelen toe en bewerk ze\. Registreer
  onder andere categorie, merk, model, serienummer, locatie,
  aankoopgegevens en omschrijving\.
- **Personen beheren** – Bewaar namen en contactgegevens van mensen
  aan wie je spullen uitleent\.
- **Uitleningen registreren** – Leg vast welk artikel aan wie is
  uitgeleend, op welke datum en wanneer het terug moet komen\.
- **Retour en historie** – Verwerk retouren en bekijk eerdere
  uitleningen\.
- **Statussen bijhouden** – Houd onder meer beschikbaarheid,
  uitgeleend, onderhoud, vermist en afgeschreven bij\.
- **Zoeken en filteren** – Zoek artikelen, personen en uitleningen
  terug\.
- **Categorieën beheren** – Deel je inventaris in op eigen
  categorieën\.
- **Back\-up en herstel** – Exporteer je administratie naar JSON en
  zet een eerder gemaakte back\-up terug\.
- **Responsive ontwerp** – De interface past zich aan desktop, tablet
  en mobiele schermen aan\.

## Gebruiken

### Lokaal op je computer

1. Download of kloon deze repository\.
2. Open `index.html` in een moderne webbrowser\.
3. Begin met het toevoegen van artikelen en personen\.

### Publiceren met GitHub Pages

1. Plaats `index.html` in de hoofdmap van deze
   repository\.
2. Ga in GitHub naar **Settings → Pages**\.
3. Kies bij **Build and deployment** voor **Deploy from a branch**\.
4. Selecteer de branch &#40;bijvoorbeeld `main`&#41; en de map `/ (root)`, en
   sla op\.
5. Open de URL die GitHub Pages voor je repository toont\.

## Gegevens en privacy

- De administratie wordt lokaal opgeslagen in de opslag van de browser
  &#40;`localStorage`&#41;\.
- Er worden door de applicatie geen gegevens naar een eigen server
  verstuurd\.
- De gegevens zijn gekoppeld aan de browser en het apparaat waarop je
  de app gebruikt\.
- Open je de app op een ander apparaat of in een andere browser, dan
  wordt de lokale administratie niet automatisch meegenomen\.
- Browsergegevens wissen kan ook de opgeslagen administratie
  verwijderen\.

**Maak daarom regelmatig een back\-up** via de exportfunctie op de pagina
Instellingen\. Bewaar het JSON\-bestand op een veilige plek\. Met de
importfunctie kun je die back\-up later terugzetten\.

Let op: een back\-upbestand kan namen en contactgegevens bevatten\. Deel
dit bestand niet zomaar met anderen\.

## Techniek

- HTML
- CSS
- Vanilla JavaScript
- Browser `localStorage` voor lokale gegevensopslag
- JSON voor back\-ups

Er zijn geen externe JavaScript\-frameworks of database nodig\.

## Projectstructuur

```text
.
├── index.html
└── README.md
```

## Licentie
Dit project is beschikbaar onder de

[PolyForm Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0).

Commercieel gebruik is niet toegestaan.
