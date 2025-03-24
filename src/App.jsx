import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Facts from "./pages/Facts/Facts";
import Kippp from "./pages/Kippp/Kippp";
import Challenge from "./pages/Challenge/Challenge";
import { useState, useEffect } from "react";

//Gesamte App Komponente (Überkomponente)
export default function App() {
  //Globale Zustandsvariablen für die Wochenchallenge und Klimawissen Komponenten
  const [rollsLeft, setRollsLeft] = useState(4);
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState("");
  const [facts, setFacts] = useState([]);
  const [fact, setFact] = useState([]);

  //Bei erstem Render der gesamten App wird die hinterlegte wochenchallenge CSV Datei eingelesen und in Zustandsvariable abgespeichert
  useEffect(() => {
    loadCsv(setChallenges, "/wochenchallenge.csv");
  }, []);

  //Bei erstem Render der gesamten App wird die hinterlegte klimawissen CSV Datei eingelesen und in Zustandsvariable abgespeichert
  //Wenn alle Fakten bereits ausgelesen wurden, wird die Zustandsvariable facts erneut gefüllt
  useEffect(() => {
    facts.length == 0 && loadCsv(setFacts, "/klimawissen.csv");
  }, [facts]);

  //Eingabeparameter sind Zustandsvariablen Funktion zum ändern der Zustandsvariable und der Dateipfad der CSV Datei
  //Oben ausgeführte Methode zum Einlesen der CSV Datei und abspeichern in globaler Zustandsvariable
  const loadCsv = async (setState, path) => {
    try {
      const response = await fetch(path);
      const text = await response.text();
      const lines = text.split("\n").filter((line) => line.trim() !== "");
      setState(lines);
    } catch (error) {}
  };

  return (
    //Der benötigte Router Browser für die Navigierbarkeit der gesamten App
    //Unten aufgeführt alle Komponenten mit eigener Route -> Hauptkomponenten der App
    //Relevante globale Zustandsvariablen werden als Parameter an die Komponenten weitergegeben
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="klimawissen"
            element={
              <Facts
                facts={facts}
                setFacts={setFacts}
                fact={fact}
                setFact={setFact}
              />
            }
          />
          <Route path="klimakipppunkte" element={<Kippp />} />
          <Route
            path="wochenchallenge"
            element={
              <Challenge
                rollsLeft={rollsLeft}
                setRollsLeft={setRollsLeft}
                challenges={challenges}
                setChallenges={setChallenges}
                challenge={challenge}
                setChallenge={setChallenge}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
