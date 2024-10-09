## Virkni

Setja upp virkni sem greinir strengi og gefur ýmsar upplýsingar um þá. Notkun á forritinu er í gegnum `console` í vafra, sjá lýsingu í `index.html`, en útfæra skal gefin föll (sjá nánar í athugasemdum) í `scripts.js`:

- `longest(str)`
  - Skilar lengsta orðinu í `str`.
  - Ekki þarf að fjarlægja bil, tölustafi eða önnur tákn.
  - Orð eru aðskilin með bilum.
  - Greinarmerki er partur af orðinu, t.d. ætti `longest('halló heimur!')` að skila `heimur!`.
  - Skilar fyrsta orðinu ef annað/önnur jafn löng finnast.
  - Ef `str` er tómur strengur skal skila tómum streng.
  - Ef `str` er ekki strengur skal skila `null`.
- `shortest(str)`
  - Eins og `longest` nema skilar stysta orðinu í `str`.
- `reverse(str)`
  - Skilar `str` í öfugri röð.
  - Ef `str` er ekki strengur skal skila `null`.
  - Ef `str` er tómur strengur skal skila tómum streng.
- `vowels(str)`
  - Skilar fjölda sérhljóða í `str`.
  - Ef engir sérhljóðar eða ekki strengur skal skila `0`.
  - Sérhljóðar eru allir íslenskir sérhljóðar: `a, e, i, o, u, y, á, é, ý, ú, í, ó, ö, æ`.
- `consonants(str)`
  - Skilar fjölda samhljóða í `str`.
  - Ef engir samhljóðar eða ekki strengur skal skila `0`.
  - Samhljóða eru allir íslenskir samhljóðar: `b, d, ð, f, g, h, j, k, l, m, n, p, r, s, t, v, x, þ`.
- `palindrome(str)`
  - Samhverfur strengur er lesin eins frá vinstri til hægri og hægri til vinstri.
  - Skilar `true` ef `str` er samhverfur (palindrome), annars `false`.
  - Skilar `false` ef `str` er ekki strengur.
  - Ekki skiptir máli hvort stafir séu hástafir eða lágstafir.
  - Ekki þarf að fjarlægja bil, tölustafi eða önnur tákn.
  - Tómur strengur er ekki samhverfur.

Í `scripts.js` er merkt það sem þarf að útfæra með athugasemdum.

Fyrir inntak og til að birta notendum gögn skal nota `alert` `confirm` og `prompt` föllin ásamt `console` hlutinn til að birta upplýsingar með `console.info()` og `console.error()`.

### Hjálparföll

Í öllum tilfellum skal nota gefin hjálparföll. Sjá nánar í skjölun `scripts.js`.

Fyrir útfærslu á svipaðri virkni ætti að skoða að útbúa hjálparföll.

### Leiðbeint ferli

Í `scripts.js` skal útfæra fallið `start()`. Það skal:

- Birta leiðbeiningar með `alert` um hvernig forritið er notað.
- Biðja um inntak (streng) með `prompt`.
- Ef löglegt inntak og ekki ýtt á „cancel“ skal kalla á `longest`, `shortest`, `reverse`, `vowels`, `consonants` og `palindrome` föllin.
- Birta niðurstöður í `alert` með upplýsingum um hvað kom út úr hverju kalli, hver niðurstaða i nýjum streng.
- Ef „cancel“ eða tómi strengur, ekki gera neitt.
- Eftir að niðurstöður hafa verið birt skal bjóða notanda að gera aftur eða hætta.

### Prófanir

Fyrir hvert af föllunum, fyrir utan `start`, skal skilgreina a.m.k. tvö próf með `console.assert()` sem sýna að fallið virki rétt. Prófin skulu vera skilgreind í `scripts.js`. Sjá dæmi í `scripts.js`.

## Netlify

Skila skal verkefninu keyrandi á Netlify. Gefið er `build` script í `package.json` og nota build ferli þ.a. mappa sem verður til í `build` ferli sé notuð fyrir vef. Þetta verður til þess að þau gögn sem eru i möppu og eru ekki fyrir almenning (t.d. `package.json`) eru ekki birt, heldur aðeins:

- `index.html`
- `scripts.js`

## Mat

- 10% Verkefni sett upp GitHub og á Netlify og `build` scripta notuð.
- 40% Föll útfærð og virka.
- 10% Hjálparföll notuð.
- 20% Leiðbeint ferli útfært gegnum `start` fallið.
- 20% Prófanir á föllum.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 17. október 2024.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `digitalsigga`
  - `ofurtumi`
  - `osk`
  - `polarparsnip`
  - `reynirjr`

Skila má eins oft og þið viljið þar til skilafrestur rennur út.


