import { createI18n } from "vue-i18n";

const messages = {
  sr: {
    locale: {
      en: "EN ",
      sr: "SR",
      de: "DE",
    },
    nav: {
      home: "NASLOVNA",
      about: "O NAMA",
      services: "USLUGE",
      equipment: "OPREMA",
      gallery: "GALERIJA",
      contact: "KONTAKT",
    },
    hero: {
      headerTop: "CNC PRECIZNA",
      headerBottom: "OBRADA METALA",
    },
    about: {
      title: "O NAMA",
      description:
        "CNC MILL s.p. osnovan je u septembru 2020. godine u Čelincu, Bosni i Hercegovini. Naša osnovna djelatnost je precizna CNC obrada metala. Našu prednost vidimo kao mogućnost maksimalnog prilagođavanja potrebama kupaca prilikom proširenja kapaciteta proizvodnje i asortimana usluga, a serijska proizvodnja srednjeg i velikog obima je naš dugoročni cilj. Uspješno posujemo sa kupcima iz Njemačke, Austrije, Švicarske i Bosne i Hercegovine.",
    },
    info: {
      employees: "Radnika",
      workspace: "Radnog prostora",
      facilities: "CNC obradna mjesta",
    },
    services: {
      title: "CNC glodanje",
      description:
        "Vršimo usluge preciznog CNC glodanja i struganja metala na visoko kvalitetnim obradnim centrima. Naša stručnost u oba područja obrade metala, kao i dugogodišnje iskustvo na europskom tržištu, izdvajaju nas od konkurencije. Fokusirani smo na pružanje vrhunske usluge kroz preciznost i efikasnost u procesu glodanja i struganja metala, zadovoljavajući tako i najzahtjevnije potrebe naših klijenata.",
    },
    equipment: {
      title: "OPREMA",
      machine_1: {
        paragraph_1: "Max. X osa 1060mm",
        paragraph_2: "Max. Y osa 610mm",
        paragraph_3: "Max. Z osa 610mm",
        paragraph_4: "Max nosivost stola - 500Kg",
        paragraph_5: "Dimenzije stola - 1270x610mm",
      },
      machine_2: {
        paragraph_1: "Max. X osa 650mm",
        paragraph_2: "Max. Y osa 350mm",
        paragraph_3: "Max. Z osa 450mm",
        paragraph_4: "Max nosivost stola - 150Kg",
        paragraph_5: "Dimenzije stola - 650x350mm",
      },
      machine_3: {
        paragraph_1: "Max. prečnik 254mm",
        paragraph_2: "Max. dužina fija 405mm",
      },
      machine_4: {
        paragraph_1: "Max. X osa 1067mm",
        paragraph_2: "Max. Y osa 610mm",
        paragraph_3: "Max. Z osa 610mm",
        paragraph_4: "Max nosivost stola - 1746Kg",
        paragraph_5: "Dimenzije stola - 1067x610mm",
      },
    },
    gallery: {
      title: "GALERIJA",
    },
    contact: {
      title: "Kontaktirajte nas",
      form: {
        name: "Ime i prezime",
        phone: "Broj telefona",
        email: "E-mail",
        message: "Poruka",
        chooseFile: "Izaberi datoteku",
        submutButton: "Pošalji poruku",
      },
    },
    footer: {
      menu: "Meni",
      home: "Naslovna",
      about: "O nama",
      services: "Usluge",
      equipment: "Oprema",
      gallery: "Galerija",
      contact: "Kontakt",
      contactUs: "Kontaktirajte nas",
    },
    sidebar: {
      description:
        "Naša specijalnost leži u visokoj preciznosti i širokom spektru usluga prilagođenih zahtevima svakog klijenta.",
    },
  },
  en: {
    locale: {
      sr: "SR",
      en: "EN",
      de: "DE",
    },
    nav: {
      home: "HOME",
      about: "ABOUT US",
      services: "SERVICES",
      equipment: "EQUIPMENT",
      gallery: "GALLERY",
      contact: "CONTACT",
    },
    hero: {
      headerTop: "CNC PRECISE",
      headerBottom: "METAL PROCESSING",
    },
    about: {
      title: "ABOUT US",
      description:
        "CNC MILL s.p. was founded in September 2020 in Čelinac, Bosnia and Herzegovina. Our core activity is precision CNC metal processing. We see our advantage in the ability to fully adapt to customers' needs when expanding production capacities and service offerings, with serial production of medium and large volumes being our long-term goal. We have successfully collaborated with customers from Germany, Austria, Switzerland, and Bosnia and Herzegovina.",
    },
    info: {
      employees: "Employees",
      workspace: "Working space",
      facilities: "CNC machining stations",
    },
    services: {
      title: "CNC milling",
      description:
        "We provide precise CNC milling and metal turning services using high-quality machining centers. Our expertise in both metal milling and turning, along with years of experience in the European market, sets us apart from the competition. We are dedicated to delivering top-notch service through precision and efficiency in metal milling and turning processes, meeting even the most demanding needs of our clients.",
    },
    equipment: {
      title: "EQUIPMENT",
      machine_1: {
        paragraph_1: "Max. X-axis 1060mm",
        paragraph_2: "Max. Y-axis 610mm",
        paragraph_3: "Max. Z-axis 610mm",
        paragraph_4: "Max table load capacity - 500kg",
        paragraph_5: "Table dimensions - 1270x610mm",
      },

      machine_2: {
        paragraph_1: "Max. X-axis 650mm",
        paragraph_2: "Max. Y-axis 350mm",
        paragraph_3: "Max. Z-axis 450mm",
        paragraph_4: "Max table load capacity - 150kg",
        paragraph_5: "Table dimensions - 650x350mm",
      },
      machine_3: {
        paragraph_1: "Max diameter - 254mm",
        paragraph_2: "Max. phi length 405mm",
      },
      machine_4: {
        paragraph_1: "Max. X-axis 1067mm",
        paragraph_2: "Max. Y-axis 610mm",
        paragraph_3: "Max. Z-axis 610mm",
        paragraph_4: "Max table load capacity - 1746kg",
        paragraph_5: "Table dimensions - 1067x610mm",
      },
    },
    gallery: {
      title: "GALLERY",
    },
    contact: {
      title: "Contact Us",
      form: {
        name: "Full Name",
        phone: "Phone",
        email: "E-mail",
        message: "Message",
        chooseFile: "Choose File",
        submutButton: "Send Message",
      },
    },
    footer: {
      menu: "Menu",
      home: "Home",
      about: "About Us",
      services: "Services",
      equipment: "Equipment",
      gallery: "Gallery",
      contact: "Contact",
      contactUs: "Contact Us",
    },
    sidebar: {
      description:
        "Our specialty lies in high precision and a wide range of services tailored to the requirements of each client.",
    },
  },
  de: {
    locale: {
      sr: "SR",
      en: "EN",
      de: "DE",
    },
    nav: {
      home: "STARTSEITE",
      about: "ÜBER UNS",
      services: "DIENSTLEISTUNGEN",
      equipment: "AUSRÜSTUNG",
      gallery: "GALERIE",
      contact: "KONTAKT",
    },
    hero: {
      headerTop: "CNC PRÄZISE",
      headerBottom: "METALLBEARBEITUNG",
    },
    about: {
      title: "ÜBER UNS",
      description:
        "CNC MILL d.o.o. wurde im September 2020 in Čelinac, Bosnien und Herzegowina, gegründet. Unsere Kernaktivität ist die präzise CNC-Metallverarbeitung. Unser Vorteil liegt darin, uns vollständig an die Bedürfnisse unserer Kunden anpassen zu können, indem wir Produktionskapazitäten und Serviceangebote erweitern. Die Serienproduktion von mittleren und großen Stückzahlen ist unser langfristiges Ziel. Wir haben erfolgreich mit Kunden aus Deutschland, Österreich, der Schweiz und Bosnien und Herzegowina zusammengearbeitet.",
    },
    info: {
      employees: "Mitarbeiter",
      workspace: "Arbeitsplatz",
      facilities: "CNC-Bearbeitungsstationen",
    },
    services: {
      title: "CNC-Fräsen",
      description:
        "Wir bieten präzise CNC-Fräs- und Metalldrehdienstleistungen auf hochwertigen Bearbeitungszentren an. Unsere Expertise sowohl im Metallfräsen als auch im Drehen, zusammen mit jahrelanger Erfahrung auf dem europäischen Markt, hebt uns von der Konkurrenz ab. Wir sind darauf spezialisiert, erstklassigen Service durch Präzision und Effizienz bei den Metallfräs- und Drehprozessen zu bieten und selbst den anspruchsvollsten Anforderungen unserer Kunden gerecht zu werden.",
    },
    equipment: {
      title: "AUSRÜSTUNG",
      machine_1: {
        paragraph_1: "Max. X-Achse 1060mm",
        paragraph_2: "Max. Y-Achse 610mm",
        paragraph_3: "Max. Z-Achse 610mm",
        paragraph_4: "Maximale Tischlastkapazität - 500kg",
        paragraph_5: "Maße des Tisches - 1270x610mm",
      },

      machine_2: {
        paragraph_1: "Max. X-Achse 650mm",
        paragraph_2: "Max. Y-Achse 350mm",
        paragraph_3: "Max. Z-Achse 450mm",
        paragraph_4: "Maximale Tischlastkapazität - 150kg",
        paragraph_5: "Maße des Tisches - 650x350mm",
      },
      machine_3: {
        paragraph_1: "Max Durchmesser - 254mm",
        paragraph_2: "Max. Länge φ 405 mm",
      },
      machine_4: {
        paragraph_1: "Max. X-Achse 1067mm",
        paragraph_2: "Max. Y-Achse 610mm",
        paragraph_3: "Max. Z-Achse 610mm",
        paragraph_4: "Maximale Tischlastkapazität - 1746kg",
        paragraph_5: "Maße des Tisches - 1067x610mm",
      },
    },
    gallery: {
      title: "GALERIE",
    },
    contact: {
      title: "Kontaktiere uns",
      form: {
        name: "Vollständiger Name",
        phone: "Telefon",
        email: "E-mail",
        message: "Nachricht",
        chooseFile: "In Datei auswählen",
        submutButton: "Nachricht senden",
      },
    },
    footer: {
      menu: "Menu",
      home: "Startseite",
      about: "Über uns",
      services: "Dienstleistungen",
      equipment: "Ausrüstung",
      gallery: "Galerie",
      contact: "Kontakt",
      contactUs: "Kontaktiere uns",
    },
    sidebar: {
      description:
        "Unsere Spezialität liegt in hoher Präzision und einem breiten Spektrum an Dienstleistungen, die auf die Anforderungen jedes Kunden zugeschnitten sind.",
    },
  },
};
export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages,
});
