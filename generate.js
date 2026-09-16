// One-off generator: renders privacy.html and terms.html from the same
// content as src/data/legal-content.ts in the main app, kept in sync by hand
// (this is a separate public repo, so it can't import the private repo's
// TS module directly).
const fs = require('fs');
const path = require('path');

const DOCS = {
  privacy: {
    title: 'Integritetspolicy',
    updated: 'Version 1.3',
    intro:
      'Den här integritetspolicyn beskriver hur Ankdammen samlar in, använder och skyddar dina personuppgifter, i enlighet med EU:s dataskyddsförordning (GDPR). Den är skriven för att spegla hur appen faktiskt fungerar snarare än att vara en generisk mall — men den är ännu inte juridiskt granskad av en jurist, vilket rekommenderas innan appen lanseras för riktiga användare.',
    sections: [
      { heading: '1. Vem är personuppgiftsansvarig', body: 'Personuppgiftsansvarig för behandlingen av dina personuppgifter i Ankdammen är Ben Eriksson, Esbo (privatperson — inget FO-nummer ännu registrerat). Vid frågor om dataskydd, kontakta oss på [dataskydd@exempel.fi]. Ankdammen behandlar sexuell läggning i stor skala (varje profil kan innehålla uppgiften), vilket enligt GDPR artikel 37.1 c kan innebära en skyldighet att utse ett dataskyddsombud — detta bör bedömas av en jurist innan lansering.' },
      { heading: '2. Vilka uppgifter vi samlar in', body: 'Kontouppgifter: e-postadress och lösenord (lösenordet lagras aldrig i klartext — det hanteras av vår autentiseringsleverantör med branschstandardkryptering). Profiluppgifter: namn, födelsedatum, kön, sexualitet, foton (minst 3 krävs), presentationstext, yrke, utbildning, arbetsplats samt livsstilsuppgifter du själv väljer att fylla i (familjeplanering, husdjur, alkohol, rökning, träning och kost). Kontaktuppgift för vänbekräftelse: telefonnummer, som endast används för att en befintlig medlem ska kunna bekräfta att de känner dig vid registrering (se avsnitt 7 i användarvillkoren) — det används aldrig för att logga in. Platsuppgift: en ungefärlig position (se avsnitt 6 nedan om hur den skyddas) samt den ort du valt att visa. Aktivitetsuppgifter: vilka profiler du gillar eller går vidare från, matchningar, meddelanden du skickar och tar emot, samt eventuella rapporter du lämnar in eller blir föremål för.' },
      { heading: '3. Känsliga personuppgifter — sexuell läggning', body: 'Uppgift om sexuell läggning räknas enligt GDPR artikel 9 som en särskild kategori av personuppgifter som kräver extra skydd. Vi samlar in denna uppgift eftersom den är central för hur matchning fungerar i Ankdammen. Innan du kan spara din profil måste du uttryckligen godkänna behandlingen av denna specifika uppgift via en egen kryssruta, skild från det allmänna godkännandet av användarvillkoren — detta är den rättsliga grunden enligt artikel 9.2 a (uttryckligt samtycke). Du kan när som helst återkalla samtycket genom att rensa fältet under Redigera profil; det påverkar inte behandling som redan skett innan återkallelsen.' },
      { heading: '4. Rättslig grund för behandlingen', body: 'Vi behandlar dina uppgifter på följande grunder: (a) fullgörande av avtal (artikel 6.1 b) — för uppgifter som krävs för att skapa och driva ditt konto, visa din profil för andra medlemmar och möjliggöra matchning och kommunikation; (b) uttryckligt samtycke (artikel 9.2 a) — specifikt för uppgiften om sexuell läggning, se ovan; (c) berättigat intresse (artikel 6.1 f) — för säkerhetsarbete såsom granskning av rapporter, avstängning av medlemmar som bryter mot villkoren, samt skydd mot missbruk (t.ex. gränser för hur ofta vissa åtgärder kan upprepas); (d) rättslig förpliktelse (artikel 6.1 c) — där lag kräver det.' },
      { heading: '5. Hur vi använder uppgifterna', body: 'Uppgifterna används för att: visa din profil för andra medlemmar utifrån dina och deras sökkriterier (avstånd, ålder, kön du söker efter); möjliggöra att ni kan gilla varandra och, vid ömsesidigt intresse, matcha och chatta; skicka bekräftelser och statusuppdateringar (t.ex. att ditt konto väntar på godkännande av din vän, eller att du fått en ny matchning); granska rapporter om olämpligt beteende och vid behov stänga av konton; samt förhindra missbruk av tjänsten, till exempel automatiserade registreringsförsök.' },
      { heading: '6. Plats och ungefärlig position', body: 'Ankdammen visar aldrig din exakta position för andra medlemmar — bara ett avståndsintervall (t.ex. "Inom 10 km" eller "10–25 km"). Den GPS-position du delar avrundas dessutom både i appen och på våra servrar med en slumpmässig förskjutning på ungefär en kilometer innan den sparas, specifikt för att göra det svårt att räkna ut någons exakta position genom att jämföra flera avståndsuppgifter över tid. Denna förskjutning uppdateras varje gång du hämtar en ny position.' },
      { heading: '7. Meddelanden, matchningar och rapporter', body: 'Meddelanden mellan matchade medlemmar sparas så länge matchningen är aktiv, för att chatten ska fungera och för att kunna granskas om en rapport lämnas in om samtalet. Om du avmatchar någon raderas inte automatiskt tidigare skickade meddelanden ur våra system, men chatten blir otillgänglig för båda parter. Rapporter du lämnar in, eller som lämnas in mot dig, sparas oavsett om något av kontona senare raderas — detta är nödvändigt för att kunna utreda ärenden i efterhand och för att skydda andra medlemmar.' },
      { heading: '8. Delning med tredje part', body: 'Vi säljer aldrig dina personuppgifter. Uppgifter delas endast med underleverantörer som behövs för att driva tjänsten, för närvarande Supabase (databas, fillagrings- och autentiseringstjänst, hostat inom EU i Frankfurt, Tyskland), Sentry (felrapportering, så att vi upptäcker och kan åtgärda buggar/krascher), Expo (push-notiser) och, för leverans av push-notiser till Android-enheter, Google Firebase Cloud Messaging. Sentry tar emot tekniska felrapporter — vilken typ av fel som inträffade, i vilken del av appen, och liknande diagnostik — men aldrig meddelandeinnehåll, platsuppgifter eller uppgift om kön/sexuell läggning; sådana fält rensas innan felrapporten skickas. Expo tar emot din enhets push-notis-token samt notisens rubrik och text när vi skickar en notis (t.ex. "Nytt meddelande") — aldrig meddelandets innehåll, vem som skickat det, eller vem som gillat dig; för Android-enheter vidarebefordrar Expo detta till Google Firebase Cloud Messaging för själva leveransen till telefonen, med samma begränsade information. Sentry, Expo och Google Firebase Cloud Messaging kan behandla uppgifter utanför EU/EES; i så fall tillämpas de skyddsåtgärder GDPR kräver för sådana överföringar (t.ex. EU-kommissionens standardavtalsklausuler). Vi delar aldrig uppgift om sexuell läggning, meddelanden eller platsuppgifter med tredje part i marknadsföringssyfte.' },
      { heading: '9. Lagringstid och radering', body: 'Din profil, dina foton, matchningar och meddelanden sparas så länge ditt konto är aktivt. Väljer du att radera ditt konto (Profil → Radera konto) tas kontot och tillhörande data bort permanent och omedelbart — det finns inget sätt att ångra detta i efterhand. Två undantag: rapporter samt uppgifter om vilka villkor du godkänt och när (se avsnitt 4 ovan) sparas även efter att kontot raderats, med kontokopplingen borttagen, eftersom de utgör en oberoende historik som behövs av säkerhets- och redovisningsskäl.' },
      { heading: '10. Automatiserat beslutsfattande', body: 'Ankdammen filtrerar vilka profiler du ser utifrån de sökkriterier du själv ställt in (avstånd, ålder, vem du söker efter), men fattar inga automatiserade beslut med rättslig eller motsvarande betydande effekt om dig, i den mening som avses i GDPR artikel 22. Ett beslut om avstängning fattas alltid efter mänsklig granskning av en rapport, inte automatiskt.' },
      { heading: '11. Dina rättigheter enligt GDPR', body: 'Du har rätt att: få tillgång till de uppgifter vi har om dig (tillgång); få felaktiga uppgifter rättade (rättelse); begära att dina uppgifter raderas (radering — kan i stor utsträckning göras direkt i appen, se avsnitt 9); begära att behandlingen begränsas i vissa fall (begränsning); få ut dina uppgifter i ett maskinläsbart format (dataportabilitet); samt invända mot behandling som grundar sig på berättigat intresse (invändning). För att utöva någon av dessa rättigheter, kontakta oss på [dataskydd@exempel.fi]. Vi svarar normalt inom en månad.' },
      { heading: '12. Rätt att inge klagomål', body: 'Om du anser att vi behandlar dina personuppgifter i strid med gällande dataskyddslagstiftning har du rätt att inge klagomål till Dataombudsmannens byrå (Finlands tillsynsmyndighet för dataskydd), tietosuoja.fi, eller till tillsynsmyndigheten i det EU/EES-land där du bor eller arbetar.' },
      { heading: '13. Åldersgräns', body: 'Ankdammen är endast avsett för användare som fyllt 18 år. Vi samlar in födelsedatum specifikt för att kunna spärra registrering och profilvisning för den som uppgett en ålder under 18 år.' },
      { heading: '14. Ändringar av denna policy', body: 'Om vi gör väsentliga ändringar i hur vi behandlar dina uppgifter uppdaterar vi denna policy och, där det krävs, ber vi om ditt förnyade samtycke. Versionen du senast godkände sparas tillsammans med ditt konto.' },
      { heading: '15. Kontakt', body: 'Frågor om denna policy eller om hur vi behandlar dina uppgifter kan skickas till [dataskydd@exempel.fi].' },
    ],
  },
  terms: {
    title: 'Användarvillkor',
    updated: 'Version 1.0',
    intro:
      'Dessa användarvillkor gäller för ditt konto och din användning av Ankdammen. De är skrivna för att spegla hur appen faktiskt fungerar, men är ännu inte juridiskt granskade av en jurist, vilket rekommenderas innan appen lanseras för riktiga användare.',
    sections: [
      { heading: '1. Godkännande av villkoren', body: 'Genom att skapa ett konto i Ankdammen bekräftar du att du läst, förstått och godkänner dessa villkor samt vår integritetspolicy. Om du inte godkänner villkoren kan du inte skapa ett konto. Godkännandet, tillsammans med tidpunkten och vilken version av villkoren du godkände, sparas i samband med registreringen.' },
      { heading: '2. Ålderskrav', body: 'Ankdammen är endast avsett för dig som fyllt 18 år. Åldern kontrolleras utifrån det födelsedatum du själv anger vid registrering — att medvetet ange en felaktig ålder är ett brott mot dessa villkor och kan leda till att kontot stängs av utan förvarning.' },
      { heading: '3. Kontoansökan via vän', body: 'Ankdammen är en inbjudningsbaserad tjänst. För att registrera dig måste du uppge kontaktuppgifter (e-post och telefonnummer) till en befintlig, godkänd medlem som går i god för dig. Det räcker inte att uppgifterna stämmer — din vän måste också aktivt godkänna din ansökan innan kontot går att använda. Din ansökan syns för din vän under "Väntande ansökningar" tills de godkänner eller avvisar den. En medlem kan gå i god för högst fem personer samtidigt (väntande och godkända sammanräknat) — är gränsen nådd måste någon av dem först godkännas, avvisas eller själv radera sitt konto innan din vän kan gå i god för fler.' },
      { heading: '4. Ditt konto och din profil', body: 'Du ansvarar för att uppgifterna i din profil är sanningsenliga, inklusive namn, ålder, foton och övrig information. Varje konto är personligt — du får inte skapa ett konto åt någon annan eller låta någon annan använda ditt konto. Foton du laddar upp måste faktiskt föreställa dig; minst tre foton krävs för att kunna spara profilen.' },
      { heading: '5. Känsliga uppgifter och samtycke', body: 'Fältet för sexuell läggning kräver ett separat, uttryckligt godkännande utöver dessa villkor (se vår integritetspolicy, avsnitt 3, för mer information om varför och hur). Du kan när som helst dra tillbaka det samtycket genom att rensa fältet under Redigera profil, utan att det påverkar resten av ditt konto.' },
      { heading: '6. Användarens ansvar och uppförandekod', body: 'Du åtar dig att: uppträda respektfullt mot andra medlemmar, både i chatten och vid eventuella fysiska träffar; inte trakassera, hota eller diskriminera andra medlemmar; inte dela olagligt, kränkande eller sexuellt explicit innehåll; inte använda tjänsten i kommersiellt syfte eller för att sprida spam eller bedrägerier; samt inte försöka kringgå tekniska begränsningar i appen, till exempel genom att registrera flera konton eller automatisera interaktioner.' },
      { heading: '7. Rapportering och avstängning', body: 'Om du upplever olämpligt beteende, i chatten eller vid en dejt, kan du rapportera det direkt från chattfönstret. Rapporter granskas manuellt. Bryter en medlem mot dessa villkor kan vi, efter granskning, stänga av kontot. En avstängning gäller omedelbart — vi väntar inte tills en eventuell inloggad session löper ut. Vi förbehåller oss rätten att bedöma varje ärende individuellt och behöver inte ange skälet till en avstängning i detalj.' },
      { heading: '8. Radera konto', body: 'Du kan när som helst radera ditt konto under Profil → Radera konto. Raderingen är permanent och sker omedelbart — din profil, dina foton, matchningar och meddelanden tas bort och kan inte återställas. Rapporter som rör dig, samt uppgifter om vilka villkor du godkänt, sparas dock enligt vad som beskrivs i integritetspolicyn (avsnitt 9), eftersom de utgör en oberoende historik.' },
      { heading: '9. Ansvarsbegränsning', body: 'Ankdammen är en plattform för att komma i kontakt med andra människor — vi varken utför bakgrundskontroller av medlemmar eller kan garantera att någon är den de utger sig för att vara. Du ansvarar själv för din säkerhet vid kontakt med och fysiska möten med andra medlemmar. Vi ansvarar inte för handlingar eller underlåtenhet från enskilda medlemmar, varken i appen eller vid möten som sker utanför den. Vi rekommenderar att du är försiktig, informerar någon du litar på inför en första träff, och väljer en offentlig plats.' },
      { heading: '10. Immateriella rättigheter', body: 'Appens design, funktionalitet och innehåll som inte kommer från användare (t.ex. gränssnitt och grafik) tillhör Ankdammen. Du behåller äganderätten till det innehåll du själv laddar upp (foton, bio, meddelanden), men ger oss den licens som krävs för att lagra, visa och överföra det som en del av tjänsten — till exempel för att visa dina foton för andra medlemmar.' },
      { heading: '11. Uppsägning av tjänsten från vår sida', body: 'Utöver avstängning vid regelbrott (avsnitt 7) förbehåller vi oss rätten att, med rimligt varsel, upphöra att erbjuda tjänsten i sin helhet. Vid en sådan avveckling informeras aktiva medlemmar i förväg där det är praktiskt möjligt.' },
      { heading: '12. Ändringar av villkoren', body: 'Vi kan komma att uppdatera dessa villkor, till exempel när tjänsten utvecklas. Väsentliga ändringar meddelas i appen, och fortsatt användning efter en ändring innebär att du godkänner de uppdaterade villkoren. Vilken version du senast godkände, och när, sparas tillsammans med ditt konto.' },
      { heading: '13. Tillämplig lag', body: 'Dessa villkor regleras av finsk lag. Tvister som inte kan lösas i samförstånd avgörs av behörig domstol i Finland, utan att det påverkar de rättigheter du som konsument kan ha enligt tvingande lagstiftning i ditt hemland.' },
      { heading: '14. Kontakt', body: 'Frågor om dessa villkor kan skickas till [kontakt@exempel.fi].' },
    ],
  },
};

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Wraps [bracketed placeholders] in a highlight span, same convention as
// the in-app legal screens and index.html on this site.
function renderBody(text) {
  return esc(text).replace(/\[([^\]]+)\]/g, '<span class="placeholder">[$1]</span>');
}

function renderDoc(doc, otherSlug, otherTitle) {
  const sections = doc.sections
    .map((s) => `    <section class="doc">\n      <h2>${esc(s.heading)}</h2>\n      <p>${renderBody(s.body)}</p>\n    </section>`)
    .join('\n');

  return `<!doctype html>
<html lang="sv">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>${esc(doc.title)} — Ankdammen</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="wrap">
    <header class="site">
      <div class="logo">A</div>
      <div class="name">Ankdammen</div>
    </header>

    <nav class="crumbs"><a href="index.html">&larr; Support &amp; juridisk information</a> &middot; <a href="${otherSlug}.html">${esc(otherTitle)}</a></nav>

    <h1>${esc(doc.title)}</h1>
    <p class="meta">${esc(doc.updated || '')}</p>

    <div class="notice">
      ⚠ Utkast — bör granskas av en jurist innan appen lanseras för riktiga användare. Fält märkta
      <span class="placeholder">[så här]</span> är ännu inte ifyllda med riktig information.
    </div>

    <p class="intro">${renderBody(doc.intro)}</p>

${sections}

    <footer>
      Ankdammen — Ben Eriksson, Esbo
    </footer>
  </div>
</body>
</html>
`;
}

fs.writeFileSync(path.join(__dirname, 'privacy.html'), renderDoc(DOCS.privacy, 'terms', 'Användarvillkor'));
fs.writeFileSync(path.join(__dirname, 'terms.html'), renderDoc(DOCS.terms, 'privacy', 'Integritetspolicy'));
console.log('Generated privacy.html and terms.html');
