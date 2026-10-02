// One-off generator: renders privacy.html and terms.html from the same
// content as src/data/legal-content.ts in the main app, kept in sync by hand
// (this is a separate public repo, so it can't import the private repo's
// TS module directly).
const fs = require('fs');
const path = require('path');

const DOCS = {
  "privacy": {
    "title": "Integritetspolicy",
    "updated": "Version 1.18.1",
    "intro": "Den här integritetspolicyn beskriver hur Ankdammen samlar in, använder och skyddar dina personuppgifter, i enlighet med EU:s dataskyddsförordning (GDPR). Den är skriven för att spegla hur appen faktiskt fungerar snarare än att vara en generisk mall.",
    "sections": [
      {
        "heading": "1. Vem är personuppgiftsansvarig",
        "body": "Personuppgiftsansvarig för behandlingen av dina personuppgifter i Ankdammen är Ben Eriksson, Esbo (privatperson). Vid frågor om dataskydd, kontakta oss på support@ankdammenapp.com. Inget dataskyddsombud (DPO) är utsett. Ankdammen frågar inte efter sexuell läggning och är en liten, inbjudningsbaserad tjänst, och vår bedömning är därför att skyldigheten att utse ett dataskyddsombud enligt GDPR artikel 37 inte gäller. Bedömningen ses över om tjänsten växer."
      },
      {
        "heading": "2. Vilka uppgifter vi samlar in",
        "body": "Kontouppgifter: e-postadress och lösenord (lösenordet lagras aldrig i klartext — det hanteras av vår autentiseringsleverantör med branschstandardkryptering). Profiluppgifter: namn, födelsedatum, kön, vem du söker efter, foton (minst 3 krävs), presentationstext, yrke, utbildning, arbetsplats samt livsstilsuppgifter du själv väljer att fylla i (familjeplanering, husdjur, alkohol, rökning, träning och kost). Kontaktuppgift för vänbekräftelse: telefonnummer, som endast används för att en befintlig medlem ska kunna bekräfta att de känner dig vid registrering (se avsnitt 3 i användarvillkoren) — det används aldrig för att logga in. Din väns kontaktuppgifter: vid registrering anger du även din väns e-postadress och telefonnummer. Dessa uppgifter skickas till våra servrar enbart för att kontrollera att de matchar ett befintligt, godkänt medlemskonto — vi sparar inga nya uppgifter om din vän utöver den koppling (sponsorskap) som visar att de gått i god för dig; hittas ingen matchning sparas inget om det angivna numret, utöver att e-postadressen tillsammans med din IP-adress sparas i högst ett dygn för att begränsa upprepade försök (skydd mot missbruk). Platsuppgift: en ungefärlig position (se avsnitt 7 nedan om hur den skyddas) samt den ort du valt att visa. Aktivitetsuppgifter: vilka profiler du gillar eller går vidare från, matchningar, meddelanden du skickar och tar emot, samt eventuella rapporter och blockeringar du gör eller blir föremål för."
      },
      {
        "heading": "3. Vilka uppgifter som krävs för att använda tjänsten",
        "body": "Följande är obligatoriskt för att kunna skapa ett konto och en profil: e-postadress, telefonnummer, lösenord, din väns kontaktuppgifter (se ovan), födelsedatum (för åldersverifiering), kön, vem du söker efter samt minst tre foton. Utan dessa uppgifter kan kontot inte skapas eller profilen inte sparas — tjänsten fungerar helt enkelt inte utan dem. Övriga profil- och livsstilsuppgifter (presentationstext, yrke, utbildning, arbetsplats, familjeplanering, husdjur, alkohol, rökning, träning, kost, intressen) är frivilliga; att låta bli att fylla i dem hindrar dig inte från att använda tjänsten, men kan göra det svårare för andra medlemmar att bedöma om ni passar ihop."
      },
      {
        "heading": "4. Känsliga personuppgifter — kön och vem du söker efter",
        "body": "Ankdammen frågar inte efter din sexuella läggning. Ditt kön tillsammans med vem du söker efter kan dock avslöja den, och vi behandlar därför dessa två uppgifter som en särskild kategori av personuppgifter enligt GDPR artikel 9, med extra skydd. De används enbart för att avgöra vilka profiler som visas för dig och för vem din profil visas, och de visas aldrig på din profil. Innan du kan spara din profil måste du uttryckligen godkänna detta via en egen kryssruta, skild från det allmänna godkännandet av användarvillkoren — detta är den rättsliga grunden enligt artikel 9.2 a (uttryckligt samtycke). Eftersom matchningen inte fungerar utan uppgifterna återkallar du samtycket genom att radera ditt konto (Profil → Radera konto); det påverkar inte behandling som redan skett innan återkallelsen. Skriver du själv något om din sexuella läggning i din presentationstext visas det för andra medlemmar som en del av din profil."
      },
      {
        "heading": "5. Rättslig grund för behandlingen",
        "body": "Vi behandlar dina uppgifter på följande grunder: (a) fullgörande av avtal (artikel 6.1 b) — för uppgifter som krävs för att skapa och driva ditt konto, verifiera din väns bekräftelse, visa din profil för andra medlemmar och möjliggöra matchning och kommunikation; (b) uttryckligt samtycke (artikel 9.2 a) — specifikt för ditt kön och vem du söker efter, se avsnitt 4; (c) berättigat intresse (artikel 6.1 f) — för säkerhetsarbete såsom granskning av rapporter, avstängning av medlemmar som bryter mot villkoren, samt skydd mot missbruk (t.ex. gränser för hur ofta vissa åtgärder kan upprepas); (d) rättslig förpliktelse (artikel 6.1 c) — där lag kräver det."
      },
      {
        "heading": "6. Hur vi använder uppgifterna",
        "body": "Uppgifterna används för att: visa din profil för andra medlemmar utifrån dina och deras sökkriterier (avstånd, ålder, kön du söker efter); bekräfta att e-postadressen du registrerar dig med verkligen är din, genom en engångskod som skickas dit innan din ansökan når din vän (samma sorts kod används om du återställer ditt lösenord); kontrollera att en uppgiven vän faktiskt är en godkänd medlem innan en ansökan kan skickas in; möjliggöra att ni kan gilla varandra och, vid ömsesidigt intresse, matcha och chatta; skicka bekräftelser och statusuppdateringar (t.ex. att ditt konto väntar på godkännande av din vän, eller att du fått en ny matchning); granska rapporter om olämpligt beteende och vid behov stänga av konton; samt förhindra missbruk av tjänsten, till exempel automatiserade registreringsförsök."
      },
      {
        "heading": "7. Plats och ungefärlig position",
        "body": "Ankdammen visar aldrig din exakta position för andra medlemmar — bara ett avståndsintervall (t.ex. \"Inom 10 km\" eller \"10–25 km\"). Appen använder bara ungefärlig plats: när du hämtar din position avrundas den redan i telefonen till ett område på minst cirka 4 km² innan den skickas, och på våra servrar förskjuts den dessutom slumpmässigt ungefär en kilometer innan den sparas — specifikt för att göra det svårt att räkna ut någons exakta position genom att jämföra flera avståndsuppgifter över tid. Ortnamnet tas fram med telefonens egen platstjänst (Google på Android, Apple på iPhone). Flyttar du dig mindre än cirka 3 km behålls den sparade positionen, och positionen kan ändras högst tio gånger per dygn."
      },
      {
        "heading": "8. Meddelanden, matchningar och rapporter",
        "body": "Meddelanden mellan matchade medlemmar sparas så länge matchningen är aktiv, för att chatten ska fungera och för att kunna granskas om en rapport lämnas in om samtalet. Om du avmatchar någon raderas inte automatiskt tidigare skickade meddelanden ur våra system, men chatten blir otillgänglig för båda parter. Rapporter du lämnar in, eller som lämnas in mot dig, sparas oavsett om något av kontona senare raderas — detta är nödvändigt för att kunna utreda ärenden i efterhand och för att skydda andra medlemmar."
      },
      {
        "heading": "9. Cookies och lokal lagring",
        "body": "Ankdammen använder inga cookies eller liknande spårningsteknik för analys eller marknadsföring — appen har ingen analys- eller annonsintegration av något slag. Viss information sparas lokalt på din enhet: dels sådant som krävs för att appen ska fungera (bland annat din inloggningssession, hanterad via operativsystemets säkra, krypterade lagring, samt en kopia av din egen profil medan du är inloggad, som raderas från enheten när du loggar ut), dels — om du godkänner det i bannern om lokal lagring — dina notisinställningar, så att de kommer ihåg vad du valt mellan sessioner. Den lagring som krävs för att appen ska fungera kan inte stängas av; den funktionella delen kan du när som helst ändra under inställningarna för lokal lagring."
      },
      {
        "heading": "10. Delning med tredje part",
        "body": "Vi säljer aldrig dina personuppgifter. Uppgifter delas endast med underleverantörer som behövs för att driva tjänsten, för närvarande Supabase (databas, fillagrings- och autentiseringstjänst, hostat inom EU i Frankfurt, Tyskland), Sentry (felrapportering, så att vi upptäcker och kan åtgärda buggar/krascher), Expo (push-notiser), Resend (utskick av e-post med engångskoder), Cloudflare (kontroll av att det är en människa och inte ett automatiserat program som registrerar sig eller loggar in) och, för leverans av push-notiser till Android-enheter, Google Firebase Cloud Messaging. Sentry tar emot tekniska felrapporter — vilken typ av fel som inträffade, i vilken del av appen, och liknande diagnostik — men aldrig meddelandeinnehåll, platsuppgifter eller uppgift om kön eller vem du söker efter; sådana fält rensas innan felrapporten skickas. Expo tar emot din enhets push-notis-token samt notisens rubrik och text när vi skickar en notis (t.ex. \"Nytt meddelande\") — aldrig meddelandets innehåll, vem som skickat det, eller vem som gillat dig; för Android-enheter vidarebefordrar Expo detta till Google Firebase Cloud Messaging för själva leveransen till telefonen, med samma begränsade information. Resend tar emot din e-postadress och innehållet i de e-postmeddelanden vi skickar till dig, det vill säga engångskoden för att bekräfta din e-postadress eller återställa ditt lösenord — aldrig några profil-, meddelande- eller platsuppgifter. Cloudflare tar emot din IP-adress och tekniska uppgifter om enheten och anslutningen (till exempel webbläsarversion) när du registrerar dig, loggar in, bekräftar ditt lösenord, ber om en ny kod eller återställer ditt lösenord — bara i de stunderna, och enbart för att upptäcka och stoppa automatiserat missbruk, aldrig för reklam — men aldrig din e-postadress, ditt lösenord eller några profil-, meddelande- eller platsuppgifter. Sentry lagrar felrapporterna inom EU, i Frankfurt, Tyskland (kontrollerat 2026-09-27); i USA hanteras endast vårt eget administratörskonto hos Sentry, aldrig uppgifter om dig. Var och en av de övriga fyra underleverantörerna behandlar viss data i USA (kontrollerat 2026-09-19): Expo behandlar och lagrar push-notisdata på servrar i USA under samma Data Privacy Framework; Google är på motsvarande sätt självcertifierat enligt Data Privacy Framework för sin behandling av push-notisdata via Firebase Cloud Messaging; Resend behandlar och lagrar e-postdata i USA under sin självcertifiering enligt Data Privacy Framework (kontrollerat 2026-09-26), med EU-kommissionens standardavtalsklausuler i sitt personuppgiftsbiträdesavtal; Cloudflare är självcertifierat enligt Data Privacy Framework och tillämpar EU-kommissionens standardavtalsklausuler om certifieringen skulle upphöra (kontrollerat 2026-09-30). EU-kommissionens standardavtalsklausuler tillämpas som komplement där så krävs. Vi delar aldrig uppgift om kön eller vem du söker efter, meddelanden eller platsuppgifter med tredje part i marknadsföringssyfte."
      },
      {
        "heading": "11. Lagringstid och radering",
        "body": "Din profil, dina foton, matchningar och meddelanden sparas så länge ditt konto är aktivt. Väljer du att radera ditt konto (Profil → Radera konto) tas kontot och tillhörande data bort permanent och omedelbart — det finns inget sätt att ångra detta i efterhand. Några undantag: uppgifter om vilka villkor och samtycken du godkänt och när — inklusive samtycket till att ditt kön och vem du söker efter används för matchning (se avsnitt 4) — sparas även efter att kontot raderats, med kontokopplingen borttagen, eftersom de utgör en oberoende historik som behövs av redovisningsskäl. Var kontot godkänt sparas dessutom, under kontots ID-nummer men utan namn, e-postadress eller andra profiluppgifter: vem som gick i god för dig och vilka du själv gick i god för, när kontot godkändes och raderades, om det var avstängt och hur många rapporter som gjorts mot det, samt rapporter som gjorts av eller om dig. Det används enbart för att upptäcka mönster av missbruk, till exempel att någon upprepade gånger går i god för konton som rapporteras eller stängs av (berättigat intresse), och raderas automatiskt två år efter att kontot raderats. Den som raderar sitt konto kan inte längre kontaktas om rapporter den har gjort. Har en annan medlem blockerat dig sparas dessutom din e-postadress, ditt telefonnummer och ditt förnamn i den blockeringen även om du raderar ditt konto, så att blockeringen fortsätter att gälla om du registrerar dig på nytt — detta sker för att skydda den som blockerat (berättigat intresse) och uppgifterna visas aldrig för någon annan. Blockeringen tas bort om medlemmen som gjort den häver den eller raderar sitt eget konto. När ett godkänt konto raderas sparar vi dessutom ett så kallat fingeravtryck av e-postadressen och telefonnumret — en kod som känner igen samma uppgifter om de används igen men som inte går att omvandla tillbaka till adressen eller numret — tillsammans med vem som gick i god för kontot. Så länge fingeravtrycket finns kvar kan e-postadressen och telefonnumret inte användas för att registrera ett nytt konto: 30 dagar efter en vanlig radering, ett år om det fanns rapporter mot kontot som inte avfärdats, och två år om kontot var avstängt. Syftet är enbart att förhindra att någon raderar och återskapar sitt konto för att undgå rapporter eller avstängning (berättigat intresse). Fingeravtrycket raderas automatiskt när tiden gått ut och används aldrig till något annat."
      },
      {
        "heading": "12. Automatiserat beslutsfattande",
        "body": "Ankdammen filtrerar vilka profiler du ser utifrån de sökkriterier du själv ställt in (avstånd, ålder, vem du söker efter), men fattar inga automatiserade beslut med rättslig eller motsvarande betydande effekt om dig, i den mening som avses i GDPR artikel 22. Ett beslut om avstängning fattas alltid efter mänsklig granskning av en rapport, inte automatiskt."
      },
      {
        "heading": "13. Dina rättigheter enligt GDPR",
        "body": "Du har rätt att: få tillgång till de uppgifter vi har om dig (tillgång); få felaktiga uppgifter rättade (rättelse); begära att dina uppgifter raderas (radering — kan i stor utsträckning göras direkt i appen, se avsnitt 11); begära att behandlingen begränsas i vissa fall (begränsning); få ut dina uppgifter i ett maskinläsbart format (dataportabilitet); samt invända mot behandling som grundar sig på berättigat intresse (invändning). För att utöva någon av dessa rättigheter, kontakta oss på support@ankdammenapp.com. Vi svarar normalt inom en månad."
      },
      {
        "heading": "14. Rätt att inge klagomål",
        "body": "Om du anser att vi behandlar dina personuppgifter i strid med gällande dataskyddslagstiftning har du rätt att inge klagomål till Dataombudsmannens byrå (Finlands tillsynsmyndighet för dataskydd), tietosuoja.fi, eller till tillsynsmyndigheten i det EU/EES-land där du bor eller arbetar."
      },
      {
        "heading": "15. Åldersgräns",
        "body": "Ankdammen är endast avsett för användare som fyllt 18 år. Vi samlar in födelsedatum specifikt för att kunna spärra registrering och profilvisning för den som uppgett en ålder under 18 år."
      },
      {
        "heading": "16. Säkerhetsåtgärder",
        "body": "Vi vidtar tekniska och organisatoriska åtgärder för att skydda dina uppgifter, bland annat: kryptering av all trafik mellan appen och våra servrar (HTTPS/TLS); åtkomstkontroll på databasnivå (Row Level Security) som begränsar vilka uppgifter varje konto kan se och ändra, med extra begränsningar för känsliga fält som telefonnummer och platsuppgifter; hastighetsbegränsning (rate limiting) mot missbruk av inloggning och registrering, lösenordsbyten (högst två per dygn), byten av e-postadress (högst ett per dygn), koder som skickas per e-post (högst två per timme och tre per dygn per e-postadress — för att räkna dem sparas ett fingeravtryck av e-postadressen, som inte går att omvandla tillbaka till adressen, i högst ett dygn), e-post från appen (högst sju per konto och dygn; meddelanden om att ditt lösenord eller din e-postadress har ändrats skickas alltid), gilla-markeringar, meddelanden och rapporter; en kontroll av att det är en människa och inte ett automatiserat program vid registrering och inloggning (Cloudflare, se avsnitt 10); slumpmässig förskjutning av platsuppgifter för att förhindra triangulering (se avsnitt 7); samt att ingen databasnyckel som kringgår dessa skydd finns i appens kod eller på klientsidan. Ingen lösning är helt riskfri, men det här är de konkreta åtgärder som finns på plats idag."
      },
      {
        "heading": "17. Ändringar av denna policy",
        "body": "Om vi gör väsentliga ändringar i hur vi behandlar dina uppgifter uppdaterar vi denna policy och, där det krävs, ber vi om ditt förnyade samtycke. Versionen du senast godkände sparas tillsammans med ditt konto."
      },
      {
        "heading": "18. Kontakt",
        "body": "Frågor om denna policy eller om hur vi behandlar dina uppgifter kan skickas till support@ankdammenapp.com."
      }
    ]
  },
  "terms": {
    "title": "Användarvillkor",
    "updated": "Version 1.5",
    "intro": "Dessa användarvillkor gäller för ditt konto och din användning av Ankdammen. De är skrivna för att spegla hur appen faktiskt fungerar.",
    "sections": [
      {
        "heading": "1. Godkännande av villkoren",
        "body": "Genom att skapa ett konto i Ankdammen bekräftar du att du läst, förstått och godkänner dessa villkor samt vår integritetspolicy. Om du inte godkänner villkoren kan du inte skapa ett konto. Godkännandet, tillsammans med tidpunkten och vilken version av villkoren du godkände, sparas i samband med registreringen."
      },
      {
        "heading": "2. Ålderskrav",
        "body": "Ankdammen är endast avsett för dig som fyllt 18 år. Åldern kontrolleras utifrån det födelsedatum du själv anger vid registrering — att medvetet ange en felaktig ålder är ett brott mot dessa villkor och kan leda till att kontot stängs av utan förvarning."
      },
      {
        "heading": "3. Kontoansökan via vän",
        "body": "Ankdammen är en inbjudningsbaserad tjänst. För att registrera dig måste du uppge kontaktuppgifter (e-post och telefonnummer) till en befintlig, godkänd medlem som går i god för dig. Det räcker inte att uppgifterna stämmer — din vän måste också aktivt godkänna din ansökan innan kontot går att använda. Din ansökan syns för din vän under \"Väntande ansökningar\" tills de godkänner eller avvisar den. En medlem kan godkänna högst fem nya medlemmar per tre dagar, och högst fem ansökningar kan vänta på samma medlem samtidigt."
      },
      {
        "heading": "4. Ditt konto och din profil",
        "body": "Du ansvarar för att uppgifterna i din profil är sanningsenliga, inklusive namn, ålder, foton och övrig information. Varje konto är personligt — du får inte skapa ett konto åt någon annan eller låta någon annan använda ditt konto. Foton du laddar upp måste faktiskt föreställa dig; minst tre foton krävs för att kunna spara profilen."
      },
      {
        "heading": "5. Känsliga uppgifter och samtycke",
        "body": "Att Ankdammen använder ditt kön och vem du söker efter för matchning kräver ett separat, uttryckligt godkännande utöver dessa villkor (se vår integritetspolicy, avsnitt 4, för mer information om varför och hur). Eftersom matchningen bygger på dessa uppgifter drar du tillbaka samtycket genom att radera ditt konto."
      },
      {
        "heading": "6. Användarens ansvar och uppförandekod",
        "body": "Du åtar dig att: uppträda respektfullt mot andra medlemmar, både i chatten och vid eventuella fysiska träffar; inte trakassera, hota eller diskriminera andra medlemmar; inte dela olagligt, kränkande eller sexuellt explicit innehåll; inte använda tjänsten i kommersiellt syfte eller för att sprida spam eller bedrägerier; samt inte försöka kringgå tekniska begränsningar i appen, till exempel genom att registrera flera konton eller automatisera interaktioner."
      },
      {
        "heading": "7. Rapportering och avstängning",
        "body": "Om du upplever olämpligt beteende, i chatten eller vid en dejt, kan du rapportera det direkt från chattfönstret. Rapporter granskas manuellt. Bryter en medlem mot dessa villkor kan vi, efter granskning, stänga av kontot. En avstängning gäller omedelbart — vi väntar inte tills en eventuell inloggad session löper ut. Vi förbehåller oss rätten att bedöma varje ärende individuellt och behöver inte ange skälet till en avstängning i detalj."
      },
      {
        "heading": "8. Radera konto",
        "body": "Du kan när som helst radera ditt konto under Profil → Radera konto. Raderingen är permanent och sker omedelbart — din profil, dina foton, matchningar och meddelanden tas bort och kan inte återställas. Rapporter som rör dig, samt uppgifter om vilka villkor du godkänt, sparas dock enligt vad som beskrivs i integritetspolicyn (avsnitt 11), eftersom de utgör en oberoende historik. Samma e-postadress och telefonnummer kan därefter inte användas för att registrera ett nytt konto under en viss tid — 30 dagar, eller längre om kontot har rapporterats eller stängts av (se integritetspolicyn, avsnitt 11)."
      },
      {
        "heading": "9. Ansvarsbegränsning",
        "body": "Ankdammen är en plattform för att komma i kontakt med andra människor — vi varken utför bakgrundskontroller av medlemmar eller kan garantera att någon är den de utger sig för att vara. Du ansvarar själv för din säkerhet vid kontakt med och fysiska möten med andra medlemmar. Vi ansvarar inte för handlingar eller underlåtenhet från enskilda medlemmar, varken i appen eller vid möten som sker utanför den. Vi rekommenderar att du är försiktig, informerar någon du litar på inför en första träff, och väljer en offentlig plats. I den utsträckning det är tillåtet enligt tillämplig lag tillhandahålls tjänsten \"i befintligt skick\" utan garantier av något slag, och vårt ansvar gentemot dig är begränsat till direkta skador orsakade av vår egen grova vårdslöshet eller uppsåt — vi ansvarar inte för indirekta skador, förlorad data eller följdskador. Ingenting i detta avsnitt begränsar rättigheter som inte kan begränsas enligt tvingande konsumentlagstiftning."
      },
      {
        "heading": "10. Skadeslöshet",
        "body": "Du åtar dig att hålla Ankdammen skadeslöst för krav, kostnader eller skador som uppstår till följd av att du bryter mot dessa villkor, missbrukar tjänsten, eller genom din egen handling eller underlåtenhet orsakar skada för en annan medlem eller tredje part — utom i den mån skadan beror på vår egen grova vårdslöshet eller uppsåt."
      },
      {
        "heading": "11. Force majeure",
        "body": "Vi ansvarar inte för förseningar eller avbrott i tjänsten som beror på omständigheter utanför vår rimliga kontroll, till exempel driftstörningar hos våra underleverantörer (se integritetspolicyn, avsnitt 10), naturkatastrofer, myndighetsbeslut eller andra force majeure-händelser."
      },
      {
        "heading": "12. Immateriella rättigheter",
        "body": "Appens design, funktionalitet och innehåll som inte kommer från användare (t.ex. gränssnitt och grafik) tillhör Ankdammen. Du behåller äganderätten till det innehåll du själv laddar upp (foton, bio, meddelanden), men ger oss den licens som krävs för att lagra, visa och överföra det som en del av tjänsten — till exempel för att visa dina foton för andra medlemmar."
      },
      {
        "heading": "13. Uppsägning av tjänsten från vår sida",
        "body": "Utöver avstängning vid regelbrott (avsnitt 7) förbehåller vi oss rätten att, med rimligt varsel, upphöra att erbjuda tjänsten i sin helhet. Vid en sådan avveckling informeras aktiva medlemmar i förväg där det är praktiskt möjligt."
      },
      {
        "heading": "14. Ändringar av villkoren",
        "body": "Vi kan komma att uppdatera dessa villkor, till exempel när tjänsten utvecklas. Väsentliga ändringar meddelas i appen, och fortsatt användning efter en ändring innebär att du godkänner de uppdaterade villkoren. Vilken version du senast godkände, och när, sparas tillsammans med ditt konto."
      },
      {
        "heading": "15. Tillämplig lag",
        "body": "Dessa villkor regleras av finsk lag. Tvister som inte kan lösas i samförstånd avgörs av behörig domstol i Finland, utan att det påverkar de rättigheter du som konsument kan ha enligt tvingande lagstiftning i ditt hemland."
      },
      {
        "heading": "16. Salvatorisk klausul",
        "body": "Om någon bestämmelse i dessa villkor skulle anses ogiltig eller overkställbar av en domstol, påverkar det inte giltigheten av villkorens övriga bestämmelser, som fortsätter att gälla fullt ut."
      },
      {
        "heading": "17. Kontakt",
        "body": "Frågor om dessa villkor kan skickas till support@ankdammenapp.com."
      }
    ]
  }
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
