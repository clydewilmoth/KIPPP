import { useEffect, useState } from "react";
import css from "./styles.module.css";

export default function Calculator() {
  //Alle lokalen Zustandsvariablen
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);
  const [result5, setResult5] = useState(0);
  const [resultAll, setResultAll] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [livingArea, setLivingArea] = useState(95);
  const [heatingType, setHeatingType] = useState(false);
  const [electricType, setElectricype] = useState(false);
  const [hasNoCar, setHasNoCar] = useState(true);
  const [useNoPublicTransport, setUseNoPublicTransport] = useState(false);
  const [airTravelEurope, setAirTravelEurope] = useState(1);
  const [airTravelTranscontinental, setAirTravelTranscontinental] = useState(3);
  const [eatNoMeat, setEatNoMeat] = useState(false);
  const [eatNoMilk, setEatNoMilk] = useState(false);
  const [income, setIncome] = useState(1500);

  //Wenn das Ergebnis feststeht kann die Klimaneutral Differenz berechnet werden
  useEffect(() => {
    calculateResult5();
  }, [resultAll]);

  //Alle Formeln/Rechnungsmethoden für den CO2 Rechner
  //mit Aktualisierung von zugehörigen Zustandsvariablen

  function calculateResult1() {
    const H = heatingType ? 0.01 : 0.0504;
    const S = electricType ? 0.1 : 0.41;
    const result = livingArea * H + numPeople * S;
    setResult1(Math.round(result * 100) / 100);
    return Math.round(result * 100) / 100;
  }

  function calculateResult2() {
    const A = hasNoCar ? 0 : 1;
    const Ö = useNoPublicTransport ? 0 : 1;
    const result =
      A * 1.6 +
      Ö * -0.6 +
      airTravelEurope * 0.21 +
      airTravelTranscontinental * 0.38;
    setResult2(Math.round(result * 100) / 100);
    return Math.round(result * 100) / 100;
  }

  function calculateResult3() {
    const F = eatNoMeat ? 0 : 1.21;
    const M = eatNoMilk ? 0 : 0.31;
    const result = F + M;
    setResult3(Math.round(result * 100) / 100);
    return Math.round(result * 100) / 100;
  }

  function calculateResult4() {
    const result = income * 0.000954;
    setResult4(Math.round(result * 100) / 100);
    return Math.round(result * 100) / 100;
  }

  function calculateResult5() {
    const result = resultAll - 2.5;
    setResult5(Math.round(result * 100) / 100);
    return Math.round(result * 100) / 100;
  }

  function calculateResultAll() {
    const result =
      calculateResult1() +
      calculateResult2() +
      calculateResult3() +
      calculateResult4() +
      1.16;
    setResultAll(Math.round(result * 100) / 100);
  }

  return (
    <div className={css.calculator}>
      <div className={css.heading}>{"CO₂e Rechner"}</div>
      <div className={css.card}>
        {pageNumber == 0 ? (
          <div className={css.page}>
            <div className={css.subHeading}>Haus/Wohnung</div>
            <div className={css.text}>Anzahl der Personen im Haushalt</div>

            <input
              className={css.input}
              id={css.numPeople}
              type="number"
              min="1"
              max="10"
              value={numPeople}
              onChange={(event) => setNumPeople(event.target.value)}
            />

            <div className={css.text}>Wohnfläche</div>
            <div className={css.unitContainer}>
              <input
                className={css.input}
                id={css.middleSizeInput}
                type="number"
                min="1"
                max="10000"
                value={livingArea}
                onChange={(event) => setLivingArea(event.target.value)}
              />
              <div className={css.text}>m²</div>
            </div>
            <div className={css.text}>Art der Heizung</div>
            <div className={css.unitContainer}>
              <div
                className={css.checkbox}
                onClick={() => setHeatingType(false)}
                style={{ backgroundColor: heatingType ? "#7F7EA0" : "#F80469" }}
              >
                Fossil
              </div>

              <div
                className={css.checkbox}
                onClick={() => setHeatingType(true)}
                style={{
                  backgroundColor: !heatingType ? "#7F7EA0" : "#F80469",
                }}
              >
                Erneuerbar
              </div>
            </div>

            <div className={css.text}>Strombezug</div>
            <div className={css.unitContainer}>
              <div
                className={css.checkbox}
                onClick={() => setElectricype(false)}
                style={{
                  backgroundColor: electricType ? "#7F7EA0" : "#F80469",
                }}
              >
                Standarttarif
              </div>
              <div
                className={css.checkbox}
                onClick={() => setElectricype(true)}
                style={{
                  backgroundColor: !electricType ? "#7F7EA0" : "#F80469",
                }}
              >
                Ökostrom
              </div>
            </div>
          </div>
        ) : pageNumber == 1 ? (
          <div className={css.page}>
            <div className={css.subHeading}>Mobilität</div>
            <div className={css.text}>Haben Sie ein Auto?</div>

            <div className={css.unitContainer}>
              <div
                className={css.checkbox}
                onClick={() => setHasNoCar(false)}
                style={{ backgroundColor: hasNoCar ? "#7F7EA0" : "#F80469" }}
              >
                Ja
              </div>
              <div
                className={css.checkbox}
                onClick={() => setHasNoCar(true)}
                style={{
                  backgroundColor: !hasNoCar ? "#7F7EA0" : "#F80469",
                }}
              >
                Nein
              </div>
            </div>

            <div className={css.text}>
              Nutzen Sie öffentliche Verkehrsmittel?
            </div>

            <div className={css.unitContainer}>
              <div
                className={css.checkbox}
                onClick={() => setUseNoPublicTransport(false)}
                style={{
                  backgroundColor: useNoPublicTransport ? "#7F7EA0" : "#F80469",
                }}
              >
                Ja
              </div>
              <div
                className={css.checkbox}
                onClick={() => setUseNoPublicTransport(true)}
                style={{
                  backgroundColor: !useNoPublicTransport
                    ? "#7F7EA0"
                    : "#F80469",
                }}
              >
                Nein
              </div>
            </div>
            <div className={css.text}>Flugreisen Europa</div>
            <div className={css.unitContainer}>
              <input
                className={css.input}
                id={css.middleSizeInput}
                type="number"
                min="0"
                max="1000"
                value={airTravelEurope}
                onChange={(event) => setAirTravelEurope(event.target.value)}
              />
              <div className={css.text}>Stunden/Jahr</div>
            </div>
            <div className={css.text}>Flugreisen Transkontinental</div>
            <div className={css.unitContainer}>
              <input
                className={css.input}
                id={css.middleSizeInput}
                type="number"
                min="0"
                max="10000"
                value={airTravelTranscontinental}
                onChange={(event) =>
                  setAirTravelTranscontinental(event.target.value)
                }
              />
              <div className={css.text}>Stunden/Jahr</div>
            </div>
          </div>
        ) : pageNumber == 2 ? (
          <div className={css.page}>
            <div className={css.subHeading}>Ernährung</div>
            <div className={css.text}>Essen Sie Fleisch, Wurst oder Fisch?</div>

            <div className={css.unitContainer}>
              <div
                className={css.checkbox}
                onClick={() => setEatNoMeat(false)}
                style={{ backgroundColor: eatNoMeat ? "#7F7EA0" : "#F80469" }}
              >
                Ja
              </div>
              <div
                className={css.checkbox}
                onClick={() => setEatNoMeat(true)}
                style={{
                  backgroundColor: !eatNoMeat ? "#7F7EA0" : "#F80469",
                }}
              >
                Nein
              </div>
            </div>

            <div className={css.text}>Essen Sie Milchprodukte?</div>

            <div className={css.unitContainer}>
              <div
                className={css.checkbox}
                onClick={() => setEatNoMilk(false)}
                style={{ backgroundColor: eatNoMilk ? "#7F7EA0" : "#F80469" }}
              >
                Ja
              </div>
              <div
                className={css.checkbox}
                onClick={() => setEatNoMilk(true)}
                style={{
                  backgroundColor: !eatNoMilk ? "#7F7EA0" : "#F80469",
                }}
              >
                Nein
              </div>
            </div>
          </div>
        ) : pageNumber == 3 ? (
          <div className={css.page}>
            <div className={css.subHeading}>Sonstiger Konsum</div>
            <div className={css.text}>Haushaltseinkommen</div>
            <div className={css.unitContainer}>
              <input
                className={css.input}
                id={css.income}
                type="number"
                min="0"
                max="1000000000"
                step="50"
                value={income}
                onChange={(event) => setIncome(event.target.value)}
              />
              <div className={css.text}>€ netto/Monat</div>
            </div>
          </div>
        ) : pageNumber == 4 ? (
          <div className={css.page} style={{ rowGap: "1.2em" }}>
            <div className={css.subHeading}>Ergebnis</div>
            <div className={css.text}>Haus/Wohnung</div>
            <div className={css.text2}>{result1 + " t"}</div>
            <div className={css.text}>Mobilität</div>
            <div className={css.text2}>{result2 + " t"}</div>
            <div className={css.text}>Ernährung</div>
            <div className={css.text2}>{result3 + " t"}</div>
            <div className={css.text}>
              Sonstiger Konsum | Öffentliche Emmisionen
            </div>
            <div className={css.text2}>{result4 + " | 1,16" + " t"}</div>
            <div className={css.text} id={css.result}>
              Gesamt
            </div>
            <div
              className={css.text2}
              id={css.result}
              style={{ textDecoration: "0.2em underline solid #F80469" }}
            >
              {resultAll + " t"}
            </div>
            <div className={css.text} style={{ fontStyle: "italic" }}>
              Differenz zur Klimaneutralität
            </div>
            <div className={css.text2} style={{ fontStyle: "italic" }}>
              {result5 + " t"}
            </div>
            <div className={css.text}>Deutscher Durchschnitt</div>
            <div className={css.text2}>{"10,41 t"}</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={css.nav}>
        {pageNumber != 0 && (
          <div
            className={css.navButton}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Zurück
          </div>
        )}
        {
          //Aufrufen der Rechnermethode zum Aktualisieren der Zusatndsvariablen
          pageNumber != 4 && (
            <div
              className={css.navButton}
              onClick={() => {
                setPageNumber(pageNumber != 4 ? pageNumber + 1 : pageNumber);
                calculateResultAll();
              }}
            >
              {pageNumber >= 3 ? "Ausrechnen" : "Weiter"}
            </div>
          )
        }
      </div>
    </div>
  );
}
