# Mijn Uitleenregister

Een eenvoudige, Nederlandstalige webapp om je persoonlijke spullen bij te houden en uitleningen te registreren. Denk aan gereedschap, apparaten, kampeerspullen, boeken of andere artikelen die je uitleent aan familie, vrienden of bekenden.

De applicatie bestaat uit een HTML-bestand en werkt rechtstreeks in je browser. Er is geen account of eigen server nodig. Daarnaast is de applicatie ingericht als Progressive Web App (PWA), zodat je deze ook als app op je iPhone, iPad of ander apparaat kunt installeren.

## Functies

- **Dashboard** – Bekijk in één oogopslag hoeveel artikelen je hebt, wat is uitgeleend, wat beschikbaar is en welke uitleningen te laat zijn.
- **Artikelen beheren** – Voeg artikelen toe en bewerk ze. Registreer onder andere categorie, merk, model, serienummer, locatie, aankoopgegevens en omschrijving.
- **Personen beheren** – Bewaar namen en contactgegevens van mensen aan wie je spullen uitleent.
- **Uitleningen registreren** – Leg vast welk artikel aan wie is uitgeleend, op welke datum en wanneer het terug moet komen.
- **Retour en historie** – Verwerk retouren en bekijk eerdere uitleningen.
- **Zelf geleend** – Houd bij welke artikelen je zelf van anderen hebt geleend.
- **Statussen bijhouden** – Houd onder meer beschikbaarheid, uitgeleend, onderhoud, vermist en afgeschreven bij.
- **Zoeken en filteren** – Zoek artikelen, personen en uitleningen terug.
- **Categorieën beheren** – Deel je inventaris in op eigen categorieën.
- **Back-up en herstel** – Exporteer je administratie naar JSON en zet een eerder gemaakte back-up terug.
- **Responsive ontwerp** – De interface past zich aan desktop, tablet en mobiele schermen aan.

## Mobiele interface

De applicatie is geoptimaliseerd voor gebruik op desktop, tablet en smartphone.

De mobiele interface bevat onder andere:

- Een overzichtelijk uitschuifmenu op iPhone.
- Grotere menuopties en aanraakvlakken.
- Het menu sluit automatisch na het selecteren van een onderdeel.
- Het menu sluit ook wanneer je buiten het menu tikt.
- Duidelijke markering van de actieve pagina.
- Verbeterde positie en weergave van modals en formulieren.
- Ondersteuning voor veilige schermranden (safe areas) op iPhone.
- Een interface die prettig werkt met aanraking.

## Progressive Web App (PWA)

Mijn Uitleenregister kan als zelfstandige app worden geïnstalleerd.

De PWA maakt gebruik van:

- `manifest.json` voor de appnaam, pictogrammen en weergave-instellingen.
- `service-worker.js` voor caching en offline ondersteuning.
- Lokale opslag via `localStorage` voor het bewaren van gegevens.

Na het eerste laden met een internetverbinding kunnen de gecachte onderdelen van de applicatie ook offline beschikbaar zijn.

## Installeren op iPhone of iPad

1. Open de applicatie in Safari.
2. Tik op de knop **Deel**.
3. Kies **Zet op beginscherm**.
4. Bevestig met **Voeg toe**.

De applicatie verschijnt nu als app op het beginscherm en kan zelfstandig worden geopend.

## Installeren op Android

1. Open de applicatie in Chrome.
2. Open het browsermenu.
3. Kies **App installeren** of **Toevoegen aan startscherm**.
4. Volg de instructies op het scherm.

## Gebruiken

### Lokaal op je computer

1. Download of kloon deze repository.
2. Open `index.html` in een moderne webbrowser.
3. Begin met het toevoegen van artikelen en personen.

### Publiceren met GitHub Pages

1. Plaats `index.html` in de hoofdmap van deze repository.
2. Ga in GitHub naar **Settings → Pages**.
3. Kies bij Build and deployment voor **Deploy from a branch**.
4. Selecteer de branch (bijvoorbeeld `main`) en de map `/ (root)`.
5. Sla de instellingen op.
6. Open de URL die GitHub Pages voor je repository toont.

De gepubliceerde applicatie is bereikbaar via:

https://richardverkerk.github.io/Uitleenregister/

## Offline gebruik

De service worker slaat belangrijke bestanden lokaal op, zodat de applicatie ook zonder internetverbinding geopend kan worden.

- Open de applicatie minimaal één keer met een internetverbinding.
- De benodigde bestanden worden vervolgens in de browser gecachet.
- Bij een volgende keer openen kan de applicatie gebruikmaken van deze lokale bestanden.

Let op: offline gebruik betekent niet dat gegevens automatisch tussen verschillende apparaten worden gesynchroniseerd.

## Gegevens en privacy

- De administratie wordt lokaal opgeslagen in de opslag van de browser (`localStorage`).
- Er worden door de applicatie geen gegevens naar een eigen server verstuurd.
- De gegevens zijn gekoppeld aan de browser en het apparaat waarop je de app gebruikt.
- Open je de app op een ander apparaat of in een andere browser, dan wordt de lokale administratie niet automatisch meegenomen.
- Browsergegevens wissen kan ook de opgeslagen administratie verwijderen.
- Het verwijderen van de app kan gevolgen hebben voor de lokaal opgeslagen gegevens.

Maak daarom regelmatig een back-up via de exportfunctie op de pagina **Instellingen**. Bewaar het JSON-bestand op een veilige plek. Met de importfunctie kun je die back-up later terugzetten.

Let op: een back-upbestand kan namen en contactgegevens bevatten. Deel dit bestand niet zomaar met anderen.

## Technologie

- HTML
- CSS
- Vanilla JavaScript
- Progressive Web App (PWA)
- Browser `localStorage` voor lokale gegevensopslag
- JSON voor back-ups
- Web App Manifest
- Service Workers
- GitHub Pages

Er zijn geen externe JavaScript-frameworks of database nodig.

## Projectstructuur

```text
.
├── index.html
├── manifest.json
├── service-worker.js
├── icons/
│   └── ...
├── README.md
└── .gitignore
```

## Repository

**GitHub repository:**

https://github.com/RichardVerkerk/Uitleenregister

**Live applicatie:**

https://richardverkerk.github.io/Uitleenregister/

## Licentie

Dit project is beschikbaar onder de [PolyForm Noncommercial License 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/).

Commercieel gebruik is niet toegestaan.

---

_Mijn Uitleenregister – eenvoudig overzicht houden over uitlenen en lenen._
