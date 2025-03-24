import { useState } from "react";
import css from "./styles.module.css";

export default function Calculator() {
  const [result, setResult] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [livingArea, setLivingArea] = useState(95);
  const [heatingType, setHeatingType] = useState(false);
  const [electricType, setElectricype] = useState(false);
  const [hasNoCar, setHasNoCar] = useState(false);
  const [useNoPublicTransport, setUseNoPublicTransport] = useState(false);
  const [airTravelEurope, setAirTravelEurope] = useState(3);
  const [airTravelTranscontinental, setAirTravelTranscontinental] = useState(0);
  const [eatNoMeat, setEatNoMeat] = useState(false);
  const [eatNoMilk, setEatNoMilk] = useState(false);
  const [income, setIncome] = useState(3000);

  function calculateResult() {
    return "123";
  }

  return (
    <div className={css.calculator}>
      <div className={css.heading}>{"CO₂ Rechner"}</div>
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
          <div className={css.page}>
            <div className={css.subHeading}>Ergebnis</div>
            <div className={css.text}>Haus/Wohnung</div>
            <div className={css.text2}>{result}</div>
            <div className={css.text}>Mobilität</div>
            <div className={css.text2}>{result}</div>
            <div className={css.text}>Ernährung</div>
            <div className={css.text2}>{result}</div>
            <div className={css.text}>
              Sonstiger Konsum/Öffentliche Emmisionen
            </div>
            <div className={css.text2}>{result}</div>
            <div className={css.text} id={css.result}>
              Gesamt/Deutscher Durchschnitt
            </div>
            <div className={css.text2} id={css.result}>
              {result + "/10,41" + " t CO₂/Jahr"}
            </div>
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
        {pageNumber != 4 && (
          <div
            className={css.navButton}
            onClick={() => {
              setPageNumber(pageNumber != 4 ? pageNumber + 1 : pageNumber);
              setResult(calculateResult());
            }}
          >
            {pageNumber >= 3 ? "Ausrechnen" : "Weiter"}
          </div>
        )}
      </div>
    </div>
  );
}
