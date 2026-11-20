# 🖥️ Aanchal — 3D Artist, Animator & Creative Designer Portfolio

> A tactile, nostalgic portfolio experience blending a retro 3D computer workstation, mechanical keyboard interactions, and a scrapbook studio desk dossier.

[![Live Website](https://img.shields.io/badge/Live_Portfolio-aanchal11--11.github.io-success?style=for-the-badge&logo=github)](https://aanchal11-11.github.io/portfolio/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/aanchal11-11/portfolio)
[![Tech](https://img.shields.io/badge/Stack-HTML5_•_CSS3_•_JS_•_WebAudio-orange?style=for-the-badge)](https://github.com/aanchal11-11/portfolio)

---

## 🌟 Live Demo
Explore the interactive website live in your browser:  
👉 **[https://aanchal11-11.github.io/portfolio/](https://aanchal11-11.github.io/portfolio/)**

---

## ✨ Design Concept & Visual Experience

This portfolio was designed with an authentic **tactile scrapbook and retro-station aesthetic**, moving away from sterile modern templates to celebrate character, craft, and physical textures:

### 1. 📟 Retro CRT Computer Station (Hero)
* **Custom CRT Monitor**: Curved screen bezel, scanline raster overlay, subtle phosphor glow, and animated pixel typography (`"Port fol i"`).
* **Clickable Mechanical Keyboard**: Chunky pastel keycaps (`esc`, `2`, `0`, `🐱`, `ten.`, `😊`, `2`, `6`, `ctrl`, `↑`).
* **Web Audio Sound Synthesizer**: Every keystroke synthesizes realistic mechanical switch clicks and bottom-out sounds in real-time using the native **Web Audio API** (100% dependency-free, zero audio files required).
* **Phosphor Color Switch**: Clickable knob on the monitor bezel toggles between **Mint Green**, **Vintage Amber**, and **Paper White** phosphor themes.

### 2. 📎 The Scrapbook Desk ("About Me")
* **Silver Bulldog Clipboard**: Unifies the creative dossiers in an aesthetic manila tab layout.
* **Framed Polaroid Photo**: Authentic Polaroid-style photo with subtle glossy glare, masking tape, and embossed Dymo label `this file belongs to aanchal`.
* **Receiptify Widget**: Thermal paper receipt displaying creative focus tracks, study playlists, and production hours.
* **Education Index Card**: Sky-blue card with binder rings and academic milestones.
* **Boarding Pass Ticket Stub**: Perforated ticket with direct social links, SVG QR code, and a 1-click **"Copy Email"** button.

### 3. 🛠️ Creative Toolbox & Pegboard
* Visual skill meters and badges for industry tools:
  * **3D & Rigging**: Autodesk Maya, Blender 3D, Substance 3D Painter
  * **Visual Design & Motion**: Adobe After Effects, Premiere Pro, Photoshop, Illustrator, Procreate

### 4. 📜 Torn-Paper Project Dossiers
* **Yasha & Yuna (Capstone Animation)**: Metadata strip (`Project \`, `Year \`, `Role \`, `Software \`), story synopsis, and an expandable 48-panel storyboard modal.
* **Lumina Grove**: Ghibli-inspired stylized 3D diorama with lighting and wireframe passes.
* **Cyber-Kitsune**: Bipedal/quadruped hybrid rig mechanics and python tool breakdown.
* **Echoes of Rain**: Cinematic 64-board animatic and color script breakdown.
* **Interactive Filter Bar**: Filter projects dynamically by *Animation*, *Character Modeling*, *Environments*, or *Storyboards*.

### 5. 💡 Ambient Controls & Guestbook
* **Desk Lamp Toggle**: Switch between **Daylight Studio** and **Cozy Evening Lamp** ambiance.
* **Audio SFX Toggle**: Mute or enable mechanical keyboard click sounds at any time.
* **Interactive Corkboard**: Visitors can write a custom note and pin it directly onto Aanchal's desk with persistent local storage.

---

## 📂 Project Architecture

```plaintext
potf/
├── index.html            # Semantic HTML5 with accessible structure & SVGs
├── style.css             # Custom CSS: variables, 3D transforms, torn paper deckle edges
├── script.js             # Web Audio synthesizer, CRT terminal logic, modal & filters
├── package.json          # NPM configuration & scripts (npm start, npm run dev)
├── start-local.bat       # 1-click Windows local server launcher
├── push-to-github.bat    # Git push helper script
├── .gitignore            # Git exclusions
├── README.md             # Project documentation
└── assets/
    └── img/
        ├── aanchal-photo.jpg       # Personal polaroid portrait
        ├── hero-workstation.jpg    # 3D desk reference
        ├── about-desk.jpg          # Scrapbook reference
        └── project-yuna.jpg        # Capstone storyboard sheet
```

---

## 🚀 Running Locally

You can run the portfolio locally using **NPM (Node.js)**, the **1-click Windows launcher**, or **Python**.

### Option 1: Using Node.js & NPM (Recommended)
You can launch the local server using `npm` or `npx`:

```bash
# 1. Clone the repository
git clone https://github.com/aanchal11-11/portfolio.git
cd portfolio

# 2. Start the local server with NPM
npm start
```

Or run development mode with live-reloading:
```bash
npm run dev
```

You can also run directly with `npx` without installing anything globally:
```bash
npx serve -l 8080 .
```
Then open **`http://localhost:8080`** in your browser.

---

### Option 2: 1-Click Windows Launcher
Double-click **`start-local.bat`** in the project folder. It starts the local server and automatically pops open the portfolio in your browser at `http://localhost:8080`.

---

### Option 3: Using Python
```bash
# Start Python HTTP server
python -m http.server 8080
```
Then visit **`http://localhost:8080`** in your browser.

---

## 📬 Contact & Connect

* **Author:** Aanchal Gurung
* **Email:** [aanchalgrng@gmail.com](mailto:aanchalgrng@gmail.com)
* **GitHub:** [@aanchal11-11](https://github.com/aanchal11-11)
* **Portfolio:** [https://aanchal11-11.github.io/portfolio/](https://aanchal11-11.github.io/portfolio/)

---

© 2026 Aanchal. Handcrafted with retro passion, tactile textures & modern web craft.
