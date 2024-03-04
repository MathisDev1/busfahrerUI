    let formular = document.getElementById("formular");
    let fahrkartenpreis = document.getElementById("fahrkartenpreis");
    let gezahlterBetrag = document.getElementById("gezahlterBetrag");
    let berechnen = document.getElementById("berechnen");
    let ergebnis = document.getElementById("ergebnis");
    let muenzen = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];


    function wechselgeldAnzeigen() {
      let fahrkartenpreisWert = parseFloat(fahrkartenpreis.value);
      let gezahlterBetragWert = parseFloat(gezahlterBetrag.value);

      if (isNaN(fahrkartenpreisWert) || isNaN(gezahlterBetragWert)) {
        ergebnis.textContent = "Bitte gültige Werte eingeben.";
        return;
      }

      if (gezahlterBetragWert < fahrkartenpreisWert) {
        ergebnis.textContent = "Der gezahlte Betrag muss größer oder gleich dem Fahrkartenpreis sein.";
        return;
      }

      let wechselgeld = gezahlterBetragWert - fahrkartenpreisWert;
      let anzahl = [];

      for (let i = 0; i < muenzen.length; i++) {
        let muenzAnzahl = Math.floor(wechselgeld / muenzen[i]);
        anzahl.push(muenzAnzahl);
        wechselgeld = wechselgeld - muenzAnzahl * muenzen[i];

        if (wechselgeld === 0) {
          break;
        }
      }

      ergebnis.textContent = "Das Wechselgeld ist: ";

      for (let i = 0; i < anzahl.length; i++) {
        if (anzahl[i] > 0) {
          ergebnis.textContent += anzahl[i] + " x " + muenzen[i] + "€, ";
        }
      }
      
      ergebnis.textContent = ergebnis.textContent.slice(0, -2);
      ergebnis.textContent += ". Der Gesamt zurückgegebene Betrag ist " + (gezahlterBetragWert - fahrkartenpreisWert) + "€.";
    }
    berechnen.addEventListener("click", wechselgeldAnzeigen);