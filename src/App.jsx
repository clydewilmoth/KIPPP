import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Facts from "./pages/Facts/Facts";
import Kippp from "./pages/Kippp/Kippp";
import Challenge from "./pages/Challenge/Challenge";
import { useState, useEffect } from "react";

export default function App() {
  const [rollsLeft, setRollsLeft] = useState(4);
  const [challenges, setChallenges] = useState([]);
  const [challenge, setChallenge] = useState("");
  const [facts, setFacts] = useState([]);
  const [fact, setFact] = useState([]);

  useEffect(() => {
    loadChallenges();
  }, []);

  useEffect(() => {
    facts.length == 0 && loadFacts();
  }, [facts]);

  const loadChallenges = async () => {
    try {
      const response = await fetch("/wochenchallenge.csv");
      const text = await response.text();
      const lines = text.split("\n").filter((line) => line.trim() !== "");
      setChallenges(lines);
    } catch (error) {}
  };

  const loadFacts = async () => {
    try {
      const response = await fetch("/klimawissen.csv");
      const text = await response.text();

      const lines = text.split("\n").filter((line) => line.trim() !== "");
      const parsedFacts = lines.map((line) => {
        const [name, fact] = line.split(";");
        return { name, fact };
      });

      setFacts(parsedFacts);
    } catch (error) {}
  };

  return (
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
