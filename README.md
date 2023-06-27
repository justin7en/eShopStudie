# eShopStudie
Diese Webseite wird für die Studie meiner Bachelorarbeit verwendet. Ziel der Studie ist es, zwei verschiedene Positionen des Navigationsmenüs (in diesem Fall links vertikal und oben horizontal) zu vergleichen und zu untersuchen, welche von beiden eine bessere Performance aufweist. Dabei liegt der Fokus auf der Navigation und weniger auf der Komplexität der einzelnen Seiten.

# Technologien
- NextJS 13
- Typescript
- Tailwindcss
- shadcn (unstyled components)
- Backend: Firebase mit Firestore(für die Daten) und Storage(für die Bilder)

# Details
- ca. 29 verschiedene Seiten
- Navbar Hersteller in den  Kategorien werden aus der Datenbank gelesen
- Kategorie, Hersteller und Artikel sind dynamisch geroutet, wobei der Name der Kategorie und des Herstellers, sowie für den Artikel die ID verwendet wird
- Homepage zeigt Highlight Artikel an, diese können mittels Boolean bei jedem Artikel einzeln eingestellt werden
- Artikel besteht aus: ID(String), Name(String), Hersteller(String), Kategorie(String), Preis(Number) und Highlight(Boolean)
- HerstellerInKategorie -> Kategoriename(String) -> Hersteller(String Array)

# Struktur
- Homepage
    - Smartphone
        - Apple
            - iPhone 20
                - Preis: 1199
                - Beschreibung: 
                    Das iPhone 20 von Apple ist ein High-End-Smartphone mit einem Preis von 1199 Euro. Es bietet eine herausragende Kameraqualität, eine leistungsstarke Prozessorleistung und ein beeindruckendes OLED-Display.
            - iPhone 19 Pro
                - Preis: 1350
                - Beschreibung:
                    Das iPhone 19 Pro von Apple ist ein Spitzenmodell mit einem Preis von 1350 Euro. Es verfügt über eine beeindruckende Kamera mit fortschrittlichen Fotofunktionen, eine lange Akkulaufzeit und eine elegante, hochwertige Verarbeitung.  
        - Google
            - Pixel 9
                - Preis: 500
                - Beschreibung:
                    Das Google Pixel 9 ist ein erschwingliches Smartphone für 500 Euro. Es zeichnet sich durch seine reine Android-Benutzeroberfläche, eine gute Kameraqualität und regelmäßige Software-Updates aus.
            - Pixel 10 Pro
                - Preis: 750
                - Beschreibung:
                    Das Google Pixel 10 Pro ist ein Premium-Smartphone für 750 Euro. Es bietet eine erstklassige Kamera mit beeindruckender Low-Light-Performance, eine schnelle Ladezeit und eine nahezu unveränderte Android-Benutzeroberfläche.
        - Samsung
            - S25
                - Preis: 899
                - Beschreibung:
                    Das Samsung S25 ist ein erschwingliches Smartphone für 899 Euro. Es bietet eine leistungsstarke Hardware, ein großes Display und eine solide Kameraqualität.
            - S26
                - Preis: 1000
                - Beschreibung:
                    Das Samsung S26 ist ein High-End-Smartphone für 1000 Euro. Es verfügt über eine beeindruckende Kamera mit 8K-Videoaufnahme, einen schnellen Prozessor und ein helles, hochauflösendes Display.
    - Tablet
        - Apple
            - iPad 20
                - Preis: 1099
                - Beschreibung:
                    Das iPad 20 von Apple ist ein leistungsstarkes Tablet für 1099 Euro. Es verfügt über einen schnellen Prozessor, ein hochauflösendes Retina-Display und unterstützt den Apple Pencil für präzises Zeichnen und Notizen.
            - iPad 19
                - Preis: 999
                - Beschreibung:
                    Das iPad 19 von Apple ist ein vielseitiges Tablet für 999 Euro. Es bietet eine lange Akkulaufzeit, eine gute Leistung und ermöglicht das nahtlose Multitasking von Apps für produktives Arbeiten oder Unterhaltung.
        - Samsung
            - Tab S11
                - Preis: 700
                - Beschreibung:
                    Das Samsung Tab S11 ist ein erschwingliches Tablet für 700 Euro. Es bietet ein beeindruckendes AMOLED-Display, eine gute Leistung und ermöglicht den Einsatz des S Pen für präzise Eingabe und kreatives Arbeiten.
            - Tab S12
                - Preis: 850
                - Beschreibung:
                    Das Samsung Tab S12 ist ein Premium-Tablet für 850 Euro. Es verfügt über ein hochwertiges Metallgehäuse, ein großes Display und bietet eine hervorragende Leistung für anspruchsvolle Aufgaben wie Bildbearbeitung oder Spiele.
    - Laptop
        - Apple
            - Macbook 2029
                - Preis: 1799
                - Beschreibung:
                    Das Macbook 2029 von Apple ist ein leistungsstarker Laptop für 1799 Euro. Es verfügt über ein schlankes Design, eine lange Akkulaufzeit und eine schnelle SSD-Speicherung, um reibungsloses Multitasking und schnelles Arbeiten zu ermöglichen.
            - Macbook 2030
                - Preis: 2000
                - Beschreibung:
                    Das Macbook 2030 von Apple ist ein Premium-Laptop für 2000 Euro. Es bietet eine beeindruckende Retina-Anzeige, einen leistungsstarken Prozessor und eine hohe Speicherkapazität, um selbst anspruchsvollste Aufgaben mühelos zu bewältigen.
        - Microsoft
            - Surface 13
                - Preis: 1150
                - Beschreibung:
                    Das Surface 13 von Microsoft ist ein eleganter Laptop für 1150 Euro. Es bietet eine hochwertige Verarbeitung, ein helles Display und eine lange Akkulaufzeit, um Produktivität unterwegs zu fördern.
            - Surface 14
                - Preis: 1350
                - Beschreibung:
                    Das Surface 14 von Microsoft ist ein leistungsstarker Laptop für 1350 Euro. Es verfügt über eine schnelle SSD-Speicherung, eine komfortable Tastatur und einen präzisen Touchscreen für eine effiziente Nutzung und intuitive Bedienung.
        - Samsung
            - Book 4
                - Preis: 1400
                - Beschreibung:
                    Das Samsung Book 4 ist ein vielseitiger Laptop für 1400 Euro. Er bietet eine gute Leistung, eine solide Akkulaufzeit und ein helles Display, um sowohl für berufliche Aufgaben als auch für Multimedia-Anwendungen geeignet zu sein.
            - Book 5 Pro
                - Preis: 1499
                - Beschreibung:
                    Das Samsung Book 5 Pro ist ein Premium-Laptop für 1499 Euro. Es verfügt über ein hochauflösendes Display, eine schnelle CPU und eine dedizierte Grafikkarte, um anspruchsvolle Aufgaben wie Video- und Fotobearbeitung zu bewältigen.
    - Über Uns
