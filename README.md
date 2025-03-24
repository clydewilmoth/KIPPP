# KIPPP

**KIPPP** ist ein modernes Desktop-Anwendungsprojekt, das auf **Tauri**, **Vite** und **React** basiert. Die Anwendung soll die aktuellen Klimakipppunkte der Welt auf einer Karte verdeutlichen und spielerisch dabei helfen den eigenen CO₂ Fußabdruck zu verringern. Die App zeigt schockierende Klima Fakten und stellt dem Nutzer vor wöchentlichen Herausforderungen, welche einfach in den Alltag integriert werden können. Ebenfalls ist ein sorgfältig ausgesuchter CO₂ Rechner verlinkt.

## Technologien

- **Frontend**: React (JavaScript)
- **Build-Basis**: Rust
- **Build-Tool/Framework**: Tauri/Vite
- **Datenverarbeitung**: CSV-Dateien

## Team

- **Mustafa**
- **Felix**
- **Hannah**
- **Marc**
- **Selim**

## Installation

**Vorraussetzung für lokalen Build**:

- **Node.js**
- **Rust**
- **Git**

**Windows Betriebssystem**:

1. **Repository klonen und builden**:
   ```bash
   git clone https://github.com/dein-repository/kippp.git
   cd kippp
   npm i
   npm run tauri build
   ```
2. **Executable ausführen**:
   ```bash
   & .\src-tauri\target\release\kippp.exe
   ```
