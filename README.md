# Topology - 3D Printed Shelves Website

Nowoczesna strona internetowa prezentująca półki drukowane w technologii 3D.

## 🚀 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **Vercel** - Hosting & deployment

## 📦 Instalacja

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Build produkcyjny
npm run build

# Start produkcyjny
npm start
```

## 🎨 Struktura projektu

```
topology-nextjs/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Strona główna
│   │   ├── privacy/          # Polityka prywatności
│   │   ├── terms/            # Regulamin
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   ├── images/               # Grafiki produktów
│   └── logo.png              # Logo
└── package.json
```

## 🖼️ Grafiki

**UWAGA:** Ze względu na rozmiar (2,794 pliki, ~100MB), wszystkie grafiki z `uploads/` są dostępne LOKALNIE, ale NIE są w repo GitHub.

Aby używać pełnej galerii grafik:
1. Skopiuj folder `wordpress_complete/test/wp-content/uploads/` do `public/images/uploads/` lokalnie
2. Grafiki będą działać na localhost
3. Przed deployem na Vercel - dodaj tylko potrzebne obrazy lub użyj CDN

**W repo są tylko:**
- **Logo** - oryginalne zielone 3D logo (`public/logo.png`)
- **Główne zdjęcia półek** - fioletowa, biała (`public/images/polka-*.jpg`)
- **3 obrazy hero/slider** (`public/images/*.jpg`)

## 🎨 Kolory marki

- **Beżowy/Pomarańczowy**: `#d4a574`, `#e8895f`, `#e8c4a0`
- **Kremowy background**: `#f5f0eb`
- **Czarny/Szary**: `#1f2937`, `#111827`

## 📄 Strony

- `/` - Strona główna z prezentacją produktów
- `/privacy` - Polityka prywatności
- `/terms` - Regulamin

## 🚀 Deploy na Vercel

1. Push kodu na GitHub
2. Import repository w Vercel
3. Deploy automatyczny po każdym pushu do main

## 👨‍💻 Autor

**Karol Sapiolko**
- Website: topology.pl
- Email: kontakt@topology.pl
- Location: Warszawa, Polska

## 📝 Licencja

Copyright © 2025 Topology by Karol Sapiolko. Wszystkie prawa zastrzeżone.

---

**Nowoczesna technologia 3D w służbie designu! 🚀**
