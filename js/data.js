/**
 * ============================================================
 * DATA.JS — tout le contenu du portfolio est ici.
 * ============================================================
 * Modifie uniquement ce fichier pour mettre le site à jour.
 *
 * - projects : l'ordre de la liste = l'ordre d'affichage.
 *   Les 6 premiers (valeur « featured ») s'affichent en grandes cartes, les suivants
 *   dans « Autres travaux ».
 * - image : { src, alt, credit, illustration }
 *     illustration: true  = photo libre de droits (Unsplash), créditée en bas de page
 *     illustration: false = ta propre photo ou capture
 *     fit: "contain"      = image affichée entière (rendus sur fond blanc)
 * - gallery : captures supplémentaires de l'étude de cas.
 * - skills : les 6 domaines « Ce que je fais » ; ref = id du projet qui prouve la réalisation.
 * ============================================================
 */

const PORTFOLIO_DATA = {
  identity: {
    name: "Songo Yao Mensah",
    role: "Élève ingénieur en génie électromécanique",
    school: "ENSAM Casablanca",
    heroLine: "Élève ingénieur en génie électromécanique à l'ENSAM Casablanca. Robotique, systèmes embarqués, conception mécanique.",
    heroCaption: "BIRD-X — drone VTOL à aile déformable, rendu de conception",
    location: "Casablanca, Maroc",
    email: "songoyaomensah@gmail.com",
    github: "https://github.com/Songo-Yao-Mensah",
    linkedin: "https://www.linkedin.com/in/yao-mensah-songo-1a8761359",
    cvFile: "assets/cv/CV_Songo_Yao_Mensah.pdf"
  },
  hero: {
    sky: {
      src: "https://images.unsplash.com/photo-1547963802-25f153e14080?auto=format&fit=crop&w=2400&q=80",
      credit: "Matt Palmer"
    },
    drone: "assets/images/projects/birdx-rendu.jpg"
  },
  intro: {
    title: "Concevoir, mesurer, faire voler.",
    paragraphs: [
      "Élève ingénieur en 2e année de génie électromécanique à l'ENSAM Casablanca, étudiant international au Maroc. Je travaille à la jonction de la mécanique, de l'électronique et du logiciel.",
      "Mon projet principal est BIRD-X, un drone VTOL à aile déformable : mécanismes d'articulation modélisés sous SolidWorks, électronique de vol Pixhawk et ESP32-S3, autonomie calculée à 131 minutes.",
      "En août 2026, stage chez Lesieur Cristal : automatisation complète d'un palettiseur sur automate Siemens S7-1200, validée sur jumeau numérique.",
      "Objectif : une double diplomation avec ENSAM ParisTech en robotique et systèmes intelligents, puis un poste en bureau d'études en ingénierie électrique et automatisme."
    ],
    photos: [
      {
        src: "assets/images/profile/portrait.jpg",
        caption: "Lauréat du concours Public Speaking, ENSAM Casablanca, avril 2026"
      },
      { src: "assets/images/projects/startech-africa.jpg", caption: "Comité d'organisation, StarTech Africa 2025" }
    ]
  },
  featured: 6,
  projects: [
    {
      id: "p05",
      title: "BIRD-X — drone VTOL à aile déformable",
      kind: "Projet de prototypage · Club Arts et Métiers Aeronautics",
      status: "En cours",
      summary: "Drone hybride qui décolle à la verticale sur quatre rotors puis vole comme un planeur. L'aile se vrille et se plie comme celle d'un oiseau ; des cellules solaires prolongent le vol.",
      metric: { value: "131 min", label: "d'autonomie calculée sans soleil, contre 43 min en V2" },
      problem: "Un multirotor d'observation classique vole 20 à 40 minutes : trop peu pour la surveillance agricole, la recherche de personnes ou l'exploration de zones reculées. Besoin : décoller et atterrir sans piste, tout en volant plusieurs heures. Objectif directeur de tous les arbitrages : l'efficacité énergétique.",
      built: "Démarche de l'ingénieur en cinq étapes (problème, IDEF, conception, étude, réalisation). Géométrie figée : 1,80 m d'envergure, 2,45 kg, profil NACA 4412 → 4410, winglets de 85 mm. Deux articulations par demi-aile — épaule (vrillage ±10°) et poignet (dièdre ±10°) — logées dans 17 à 23 mm d'épaisseur d'aile et modélisées pièce par pièce sous SolidWorks.",
      pipeline: [
        "Besoin",
        "IDEF",
        "Dimensionnement",
        "CAO SolidWorks",
        "CFD ANSYS Fluent",
        "Impression 3D",
        "Essais au banc"
      ],
      results: [
        "Autonomie portée de 43 min (V2) à 131 min (V3), 187 min avec le solaire en été — six leviers : allongement de 6,9 à 10,79, flèche de 25° à 6°, hélices repliables, nacelles carénées, Li-ion, surface solaire",
        "Croisière à 14,6 m/s pour 47,7 W, soit 7,6 fois moins qu'en vol stationnaire (362 W) ; finesse 15,8 en croisière, 16,6 maximale",
        "Poignet : réduction de 5:1 au neutre à 11:1 en butée — à 1 g, le servo n'utilise que 13 % de son couple",
        "Arbre d'épaule en tube carbone Ø 8 mm (6,3 g) : flexion à 226 MPa pour 600 MPa admissibles",
        "Électronique : Pixhawk 2.4.8 (ArduPlane QuadPlane) pour le vol, ESP32-S3 pour l'énergie et le morphing — 12 algorithmes, 46 tests automatiques validés en simulation"
      ],
      method: "Un moteur brushless nu a un Cx de 0,42 ; enfermé dans une nacelle en goutte d'eau, il tombe à 0,20. Sur quatre moteurs, cela vaut 19 minutes d'autonomie pour 64 g de PETG. Toutes les valeurs sont issues du dimensionnement analytique : aucun essai en vol à ce jour, et chaque pièce CAO est contrôlée par son volume et son centre de gravité.",
      stack: ["SolidWorks", "ANSYS Fluent", "Pixhawk / ArduPlane", "ESP32-S3", "MAVLink", "Impression 3D"],
      image: {
        src: "assets/images/projects/birdx-rendu.jpg",
        alt: "Rendu du drone BIRD-X : aile solaire, quatre rotors de sustentation, empennage en V",
        credit: "",
        illustration: false,
        fit: "contain"
      },
      gallery: [
        {
          src: "assets/images/projects/birdx-articulations.jpg",
          caption: "Emplacement des articulations : épaule (vrillage) et poignet (dièdre) sur chaque demi-aile"
        },
        {
          src: "assets/images/projects/birdx-plan.jpg",
          caption: "Vue en plan : 1 800 mm d'envergure, 1 030 mm de longueur"
        },
        {
          src: "assets/images/projects/birdx-epaule.jpg",
          caption: "Épaule : le panneau interne pivote sur un arbre carbone, entraîné par pignons 2:1"
        },
        {
          src: "assets/images/projects/birdx-poignet.jpg",
          caption: "Poignet : tube de torsion, excentrique, languette — loi tan θ = 0,200 × sin φ"
        },
        {
          src: "assets/images/projects/birdx-panneau-fixe.jpg",
          caption: "Panneau fixe P01 sous SolidWorks : profil lissé, rainures, logements de modules"
        },
        {
          src: "assets/images/projects/birdx-ferrure-externe.jpg",
          caption: "Ferrure externe P04b : enlèvement de matière par balayage"
        },
        {
          src: "assets/images/projects/birdx-ferrure-interne.jpg",
          caption: "Ferrure interne P04a, modélisée sous SolidWorks"
        },
        {
          src: "assets/images/projects/birdx-aile-filaire.jpg",
          caption: "Aile assemblée, vue filaire : ferrures et liaisons entre panneaux"
        }
      ],
      tagline: "Aile déformable, VTOL, énergie solaire",
      year: "En cours · 2026"
    },
    {
      id: "stage",
      title: "Stage Lesieur Cristal — automatisation d'un palettiseur",
      kind: "Stage d'initiation · Lesieur Cristal",
      status: "Stage",
      year: "Août 2026",
      tagline: "Siemens S7-1200, TIA Portal, WinCC, Factory I/O",
      summary: "Automatisation complète d'un palettiseur sur automate Siemens S7-1200, validée sur un jumeau numérique avant toute mise en service.",
      metric: { value: "96 réseaux", label: "LADDER, 4 GRAFCET, 10 défauts surveillés" },
      problem: "Automatiser entièrement un palettiseur de ligne de production, en intégrant la surveillance des défauts et la sécurité machine.",
      built: "Programme de commande sur automate S7-1200 sous TIA Portal V17 : séquences décrites en GRAFCET puis programmées en LADDER, mode manuel et pupitre opérateur WinCC. L'ensemble a été validé sur un jumeau numérique Factory I/O.",
      pipeline: ["GRAFCET", "LADDER (TIA Portal V17)", "Automate S7-1200", "Pupitre WinCC", "Jumeau numérique Factory I/O"],
      results: [
        "4 GRAFCET et 96 réseaux LADDER",
        "10 défauts surveillés",
        "Mode manuel et pupitre WinCC",
        "Fonctionnement validé sur jumeau numérique Factory I/O"
      ],
      method: "",
      stack: ["Siemens S7-1200", "TIA Portal V17", "GRAFCET", "LADDER", "WinCC", "Factory I/O", "Sécurité machine"],
      image: { src: "https://images.unsplash.com/photo-1706098632847-10287a332e0f?auto=format&fit=crop&w=1600&q=80", alt: "Ligne de production industrielle", credit: "Giacomo Folli", illustration: true }
    },
    {
      id: "p08",
      title: "Smart Home Monitoring System",
      kind: "Projet personnel · ESP32 & Firebase",
      status: "",
      summary: "Surveillance en temps réel du débit d'eau, de la consommation électrique, de la température et de l'humidité, avec alertes locales et commande à distance.",
      metric: { value: "4 grandeurs", label: "eau, courant, température, humidité — suivies en temps réel" },
      problem: "Suivre la consommation d'eau et d'électricité d'un logement en temps réel, à bas coût, et être alerté dès qu'un seuil est dépassé.",
      built: "Un ESP32 lit un débitmètre (eau), une pince de courant SCT013 (électricité) et un DHT11 (température, humidité). Les mesures s'affichent sur un écran LCD I2C et sont synchronisées dans Google Firebase Realtime Database.",
      pipeline: [
        "Débitmètre · SCT013 · DHT11",
        "ESP32",
        "Écran LCD I2C",
        "Firebase Realtime Database",
        "Alertes LED · commande à distance"
      ],
      results: [
        "Acquisition et affichage des mesures en temps réel",
        "Synchronisation des données dans le cloud via Firebase",
        "Alerte LED locale au dépassement du seuil d'eau et du seuil électrique",
        "Commande à distance d'un équipement (LED) depuis Firebase",
        "Architecture IoT à bas coût"
      ],
      method: "",
      stack: ["ESP32", "MicroPython", "Firebase", "SCT013", "DHT11", "LCD I2C"],
      image: {
        src: "assets/images/projects/smarthome-montage.jpg",
        alt: "Montage ESP32 : débitmètre, LED d'alerte, écran LCD affichant Eau 9.0 L, T 19 °C, H 83 %",
        credit: "",
        illustration: false
      },
      gallery: [
        {
          src: "assets/images/projects/smarthome-banc.jpg",
          caption: "Banc complet : pince SCT013 sur la ligne d'une lampe, débitmètre, ESP32 et écran LCD"
        },
        {
          src: "assets/images/projects/smarthome-montage.jpg",
          caption: "Écran LCD : volume d'eau mesuré, température et humidité"
        }
      ],
      tagline: "ESP32, Firebase, capteurs eau / courant / climat",
      year: "2025"
    },
    {
      id: "p04",
      title: "Chaîne IIoT capteur → tableau de bord",
      kind: "Projet académique",
      status: "",
      summary: "Du capteur au tableau de bord Grafana rafraîchi toutes les 5 secondes, réalisée et documentée de bout en bout.",
      metric: { value: "3,73 m", label: "portée validée, montage réduit à 4 fils" },
      problem: "Faire remonter une mesure physique jusqu'à un tableau de bord exploitable, sans maillon manquant.",
      built: "Chaîne complète capteur → ESP32 → MQTT (broker public) → Node-RED → MySQL → Grafana, rafraîchie toutes les 5 secondes. Documentation de 20 pages.",
      pipeline: ["Capteur", "ESP32", "MQTT", "Node-RED", "MySQL", "Grafana"],
      results: [
        "Tableau de bord rafraîchi toutes les 5 s",
        "Montage réduit à quatre fils",
        "Portée validée à 3,73 m",
        "20 pages de documentation"
      ],
      method: "Capteur alimenté en 3,3 V plutôt qu'en 5 V : le pont diviseur habituellement nécessaire sur l'entrée de l'ESP32 disparaît. Le problème est éliminé à sa source au lieu d'être corrigé après coup.",
      stack: ["ESP32", "MQTT", "Node-RED", "MySQL", "Grafana"],
      image: {
        src: "assets/images/projects/iiot-node-red.jpg",
        alt: "Flux Node-RED : abonnement MQTT, fonction, insertion MySQL",
        credit: "",
        illustration: false
      },
      gallery: [
        {
          src: "assets/images/projects/iiot-mqtt.jpg",
          caption: "Nœud MQTT abonné au sujet ensam/gem/songo51/distance (broker EMQX public)"
        },
        {
          src: "assets/images/projects/iiot-fonction-sql.jpg",
          caption: "Fonction Node-RED qui construit la requête d'insertion SQL"
        },
        {
          src: "assets/images/projects/iiot-mysql.jpg",
          caption: "Table valeur_capteur dans MySQL : une mesure horodatée par seconde"
        },
        {
          src: "assets/images/projects/iiot-grafana-mysql.jpg",
          caption: "Source de données MySQL déclarée dans Grafana"
        }
      ],
      tagline: "ESP32, MQTT, Node-RED, MySQL, Grafana",
      year: "2026"
    },
    {
      id: "p06",
      title: "Banc hydraulique industriel 5,5 kW",
      kind: "Projet académique",
      status: "En cours",
      summary: "Schéma, dimensionnement, commande LADDER et simulation d'un banc didactique IDSystem SHCO V2-4.0.",
      metric: { value: "140 bar", label: "5,5 kW · 400 V · 15 L/min calés" },
      problem: "Banc didactique IDSystem SHCO V2-4.0 : 5,5 kW, 400 V, pompe 18 cm³/tr, 15 L/min calés, 140 bar. Produire un dossier complet dont la simulation doit prouver les calculs.",
      built: "Schéma fluidique ISO 1219-1:2012 sous Automation Studio, dossier de dimensionnement, programme de commande en LADDER, simulation de validation.",
      pipeline: ["Schéma ISO 1219", "Dimensionnement", "Commande LADDER", "Simulation"],
      results: [
        "Schéma fluidique conforme ISO 1219-1:2012",
        "Trois distributeurs identifiés par leurs références constructeur"
      ],
      method: "Le choix des tiroirs des trois distributeurs a été redémontré à partir de la fonction : centre fermé pour tenir le vérin sous charge, tiroir de moteur pour éviter la cavitation à l'arrêt. La déduction a ensuite été confirmée par les catalogues.",
      stack: ["Automation Studio", "ISO 1219", "LADDER", "CETOP"],
      image: {
        src: "https://images.unsplash.com/photo-1682268294094-5c68969ea23a?auto=format&fit=crop&w=1600&q=80",
        alt: "Pompe et raccords hydrauliques",
        credit: "David Birozy",
        illustration: true
      },
      tagline: "Schéma ISO 1219, dimensionnement, LADDER",
      year: "En cours · 2026"
    },
    {
      id: "cad",
      title: "Atelier CAO — SolidWorks & CATIA V5",
      kind: "Travaux de conception mécanique",
      status: "",
      year: "2026",
      tagline: "Pièces, assemblages, mises en plan",
      summary: "Pièces et assemblage de l'aile de BIRD-X sous SolidWorks, et pièces mécaniques modélisées sous CATIA V5 avec leurs mises en plan.",
      metric: { value: "", label: "" },
      problem: "Passer d'une fonction mécanique à une pièce fabricable : géométrie, liaisons, usinages, puis vérification de chaque pièce.",
      built: "Sous SolidWorks : panneaux d'aile lissés sur profils, ferrures interne et externe, rainures, logements de modules, assemblage contraint de l'aile de BIRD-X. Sous CATIA V5 (Part Design et mises en plan) : levier, plaque d'orientation, fourchette, palier de guidage, clip plastique, support symétrique, guide de calage, volant à boutonnière.",
      pipeline: [
        "Esquisse",
        "Volume (extrusion, lissage, balayage)",
        "Enlèvements de matière",
        "Assemblage contraint",
        "Mise en plan"
      ],
      results: [
        "Chaque pièce de l'aile contrôlée par son volume et son centre de gravité",
        "Mises en plan produites sous CATIA V5 pour le palier de guidage, le support symétrique et le guide de calage"
      ],
      method: "",
      stack: ["SolidWorks", "CATIA V5", "Part Design", "Assemblage", "Mise en plan"],
      image: {
        src: "assets/images/projects/birdx-ferrure-externe.jpg",
        alt: "Ferrure externe de l'aile de BIRD-X sous SolidWorks",
        credit: "",
        illustration: false
      },
      gallery: [
        {
          src: "assets/images/projects/birdx-panneau-fixe.jpg",
          caption: "Panneau fixe de l'aile : profil lissé, rainures, logements de modules — SolidWorks"
        },
        { src: "assets/images/projects/birdx-ferrure-interne.jpg", caption: "Ferrure interne — SolidWorks" },
        { src: "assets/images/projects/birdx-aile-filaire.jpg", caption: "Aile assemblée, vue filaire — SolidWorks" },
        {
          src: "assets/images/projects/catia-support-symetrique.jpg",
          caption: "Support symétrique — CATIA V5, Part Design"
        }
      ]
    },
    {
      id: "p01",
      title: "Boîtier de mesure non intrusif d'une machine",
      kind: "Projet personnel · mesure électrique",
      status: "En cours",
      summary: "Une pince ampèremétrique clipsée sur le câble d'alimentation : l'ESP32 traite le signal de courant et reconnaît l'état de la machine, sans ouvrir l'armoire ni arrêter la production.",
      metric: { value: "50,0 Hz", label: "fréquence réseau retrouvée" },
      problem: "Le TRS (taux de rendement synthétique) est l'indicateur central de la performance industrielle. Dans une PME sans système MES, il est relevé à la main, sur papier, heure par heure : en retard, approximatif, souvent incomplet.",
      built: "Un boîtier qui se clipse sur le câble d'alimentation d'une machine. La signature du courant permet de distinguer quatre états : production, marche à vide, changement de série, panne.",
      pipeline: [
        "Pince ampèremétrique",
        "Conditionnement",
        "ESP32",
        "Échantillonnage & traitement du signal",
        "Valeur efficace",
        "Classification de l'état",
        "MQTT",
        "Base de données",
        "Tableau de bord"
      ],
      results: [
        "Fréquence réseau retrouvée à 50,0 Hz exactement",
        "Polarisation à 0,1 %",
        "Chaîne de mesure validée en 6 étapes, chacune avec son critère de réussite",
        "23 pages de documentation technique"
      ],
      method: "",
      stack: ["ESP32", "Traitement du signal", "MQTT", "Base de données", "Tableau de bord"],
      image: {
        src: "https://images.unsplash.com/photo-1780034766312-73825064806c?auto=format&fit=crop&w=1600&q=80",
        alt: "Armoire électrique industrielle ouverte",
        credit: "Raymond Sime",
        illustration: true
      },
      tagline: "Pince ampèremétrique, ESP32, traitement du signal",
      year: "En cours · 2026"
    },
    {
      id: "p02",
      title: "Ordonnancement d'une ligne de conditionnement",
      kind: "Projet académique adossé à un stage industriel",
      status: "",
      summary: "Sur la même ligne, à travail, machines et quantités identiques, seul l'ordre des campagnes fait varier l'arrêt de 632 minutes par semaine.",
      metric: { value: "632 min", label: "d'écart par semaine entre la meilleure et la pire séquence" },
      problem: "Une ligne de 9 postes conditionne trois formats (500 ml, 1 L, 2 L). Changer de format impose une reconfiguration complète, dont la durée dépend du couple de formats enchaînés : temps de préparation dépendants de la séquence (SDST).",
      built: "Modélisation en flow shop à m machines, une campagne de production valant un job. Développement d'un logiciel d'ordonnancement en Python et énumération exhaustive des 120 séquences possibles de cinq campagnes.",
      pipeline: [],
      results: [
        "632 min d'écart entre la meilleure et la pire séquence, soit 10 h 32 de ligne arrêtée par semaine",
        "Équivalent de 63 200 bouteilles de 1 L non produites — seul l'ordre change",
        "Goulot identifié par le taux d'occupation : remplisseuse chargée à 100 %, contre 82,5 % pour le poste suivant"
      ],
      method: "",
      stack: ["Python", "Flow shop", "SDST", "Taux d'occupation"],
      image: {
        src: "https://images.unsplash.com/photo-1530037335614-e68828dcf258?auto=format&fit=crop&w=1400&q=80",
        alt: "Ligne de conditionnement de bouteilles",
        credit: "Waldemar Brandt",
        illustration: true
      },
      tagline: "Python, flow shop, 120 séquences",
      year: "2026"
    },
    {
      id: "p03",
      title: "Modélisation ERP sous Odoo",
      kind: "Projet académique",
      status: "",
      summary: "Modèle de production complet sous Odoo — et identification chiffrée de ce que l'ERP ne sait pas représenter.",
      metric: { value: "120 → 1", label: "séquences distinctes → un seul total calculé par l'ERP" },
      problem: "Représenter la ligne dans un ERP pour piloter l'exécution de la production.",
      built: "Modèle de production complet : 14 articles, 9 postes de travail, nomenclatures multi-niveaux, gammes opératoires, ordres de fabrication. Rapport technique de 12 pages.",
      pipeline: [],
      results: [
        "14 articles, 9 postes de travail, nomenclatures multi-niveaux",
        "Gammes opératoires et ordres de fabrication complets",
        "Rapport technique de 12 pages"
      ],
      method: "Odoo pose le temps de préparation par poste, et non par couple de formats. L'ERP est donc incapable de distinguer les 120 séquences : il compte le même total pour toutes. Cette limite a été identifiée, chiffrée et documentée — c'est elle qui justifie le logiciel du projet d'ordonnancement.",
      stack: ["Odoo", "Nomenclatures", "Gammes", "Ordres de fabrication"],
      image: {
        src: "https://images.unsplash.com/photo-1694885156873-6a0823e14848?auto=format&fit=crop&w=1400&q=80",
        alt: "Rayonnages d'un entrepôt",
        credit: "Brian Wangenheim",
        illustration: true
      },
      tagline: "14 articles, 9 postes de travail",
      year: "2026"
    },
    {
      id: "p07",
      title: "Science des données — maintenance prédictive",
      kind: "Projets académiques",
      status: "",
      summary: "Maintenance prédictive sur le jeu AI4I 2020 (10 000 observations) : préparation, régression, classification, clustering.",
      metric: { value: "93 %", label: "des pannes réelles détectées par le modèle retenu" },
      problem: "Exploiter le jeu AI4I 2020 Predictive Maintenance (10 000 observations de maintenance industrielle) pour anticiper les pannes.",
      built: "Contrôle et préparation des données, régression linéaire, classification supervisée (arbres de décision, KNN), clustering non supervisé (K-Means, DBSCAN, ACP).",
      pipeline: ["Préparation", "Régression", "Classification", "Clustering"],
      results: [
        "Le modèle retenu a une exactitude inférieure au modèle trivial « aucune panne » — c'est pourtant lui qu'il faut choisir : il détecte 93 % des pannes réelles",
        "Sans l'étiquette, aucun algorithme de clustering ne retrouve ces pannes : elles forment une population rare et diffuse, pas une région dense"
      ],
      method: "Densité et classe sont deux choses différentes : un indicateur global flatteur (l'exactitude) peut masquer le seul résultat qui compte en maintenance.",
      stack: ["Python", "pandas", "scikit-learn", "matplotlib", "Jupyter"],
      image: {
        src: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1400&q=80",
        alt: "Graphiques d'analyse sur papier",
        credit: "Isaac Smith",
        illustration: true
      },
      tagline: "Python, scikit-learn, 10 000 observations",
      year: "2026"
    }
  ],
  earlierWork: [
    {
      title: "Distributeur automatique de café",
      detail: "Machine à états finis pour la distribution et la monnaie",
      stack: "VHDL · Quartus · ModelSim",
      period: "Fév. — mars 2026"
    },
    {
      title: "Programmation PIC16F887A",
      detail: "Interruptions, afficheurs 7 segments, pilotage de LEDs",
      stack: "PIC16F887A · MikroC · Proteus",
      period: "Janv. — avr. 2026"
    }
  ],
  skills: [
    {
      title: "Robotique & drones",
      text: "Mécanismes de l'aile déformable de BIRD-X et architecture de commande d'un drone VTOL.",
      subcategories: [
        {
          name: "Mécanismes",
          tools: ["Servo", "Pignons 2:1", "Tube de torsion", "Excentrique"],
          achievements: [
            { text: "Épaule (vrillage ±10°) et poignet (dièdre ±10°) logés dans 17 à 23 mm d'épaisseur d'aile", ref: "p05" },
            { text: "Réduction de 5:1 à 11:1 au poignet : le servo utilise 13 % de son couple à 1 g", ref: "p05" }
          ]
        },
        {
          name: "Commande & énergie",
          tools: ["Pixhawk / ArduPlane", "ESP32-S3", "MAVLink"],
          achievements: [
            { text: "12 algorithmes, 46 tests automatiques validés en simulation", ref: "p05" },
            { text: "Autonomie calculée de 43 min (V2) à 131 min (V3)", ref: "p05" }
          ]
        }
      ]
    },
    {
      title: "Systèmes embarqués & IoT",
      text: "Du capteur au cloud : acquisition, transmission, stockage et affichage des mesures.",
      subcategories: [
        {
          name: "Microcontrôleurs",
          tools: ["ESP32", "Arduino", "PIC16F887A", "MikroC", "VHDL"],
          achievements: [
            { text: "ESP32 + débitmètre, SCT013 et DHT11, alertes LED et commande via Firebase", ref: "p08" },
            { text: "Interruptions, afficheurs 7 segments et PWM sur PIC16F887A", ref: "" },
            { text: "Machine à états finis en VHDL simulée sous ModelSim", ref: "" }
          ]
        },
        {
          name: "Chaîne de données",
          tools: ["MQTT", "Node-RED", "MySQL", "Grafana", "Firebase"],
          achievements: [
            { text: "Chaîne capteur → Grafana rafraîchie toutes les 5 s", ref: "p04" },
            { text: "Pont diviseur supprimé en alimentant le capteur en 3,3 V", ref: "p04" }
          ]
        }
      ]
    },
    {
      title: "Électrotechnique & automatisme",
      text: "Mesure électrique, électronique de puissance, programmation d'automatismes.",
      subcategories: [
        {
          name: "Mesure & puissance",
          tools: ["Pince ampèremétrique", "SCT013", "Redressement", "Thyristors", "Harmoniques"],
          achievements: [
            { text: "Fréquence réseau retrouvée à 50,0 Hz, polarisation à 0,1 %", ref: "p01" },
            { text: "Reconnaissance de 4 états machine à partir du courant", ref: "p01" },
            { text: "Calcul des puissances active, réactive et déformante", ref: "" }
          ]
        },
        {
          name: "Automatisme",
          tools: ["Siemens S7-1200", "TIA Portal", "LADDER", "GRAFCET", "WinCC", "Factory I/O", "Automation Studio"],
          achievements: [
            { text: "Palettiseur automatisé sur S7-1200 : 4 GRAFCET, 96 réseaux LADDER, pupitre WinCC", ref: "stage" },
            { text: "Validation sur jumeau numérique Factory I/O", ref: "stage" },
            { text: "Programme de commande LADDER d'un banc hydraulique de 5,5 kW", ref: "p06" }
          ]
        }
      ]
    },
    {
      title: "Hydraulique & pneumatique",
      text: "Schémas normalisés, dimensionnement et choix des composants d'un circuit industriel.",
      subcategories: [
        {
          name: "Circuits",
          tools: ["ISO 1219", "Distributeurs CETOP", "Limiteurs de pression et de débit"],
          achievements: [
            { text: "Schéma fluidique ISO 1219-1:2012 d'un banc 140 bar", ref: "p06" },
            { text: "Choix des tiroirs redémontré à partir de la fonction, puis confirmé par catalogue", ref: "p06" }
          ]
        },
        {
          name: "Dimensionnement",
          tools: ["Vérins", "Moteurs hydrauliques", "Pompes"],
          achievements: [
            { text: "Dossier de dimensionnement validé par simulation", ref: "p06" }
          ]
        }
      ]
    },
    {
      title: "CAO & simulation",
      text: "Conception de pièces et d'assemblages, puis vérification par le calcul et la simulation.",
      subcategories: [
        {
          name: "Conception",
          tools: ["SolidWorks", "CATIA V5"],
          achievements: [
            { text: "Pièces de l'aile de BIRD-X : boîtier, arbre, moyeu, butée, ferrures, excentrique", ref: "cad" },
            { text: "Pièces et mises en plan sous CATIA V5", ref: "cad" }
          ]
        },
        {
          name: "Simulation",
          tools: ["ANSYS Fluent", "MATLAB / Simulink / Simscape", "Proteus", "FlexSim"],
          achievements: [
            { text: "Demi-aile préparée pour la CFD, avec et sans winglet", ref: "p05" }
          ]
        }
      ]
    },
    {
      title: "Données & production",
      text: "Analyse de données de maintenance et outils d'organisation de la production.",
      subcategories: [
        {
          name: "Données",
          tools: ["Python", "pandas", "scikit-learn", "Jupyter"],
          achievements: [
            { text: "Classification : 93 % des pannes réelles détectées", ref: "p07" }
          ]
        },
        {
          name: "Production",
          tools: ["Ordonnancement", "Odoo", "TRS", "SMED"],
          achievements: [
            { text: "Logiciel d'ordonnancement en Python, 120 séquences comparées", ref: "p02" },
            { text: "Modèle de production complet sous Odoo", ref: "p03" }
          ]
        }
      ]
    }
  ],
  timeline: [
    {
      period: "2025 — 2028",
      status: "En cours · 2e année",
      title: "Cycle ingénieur — Génie Électromécanique",
      place: "ENSAM Casablanca"
    },
    {
      period: "2022 — 2025",
      status: "",
      title: "DEUST Génie Électrique & Génie Mécanique",
      place: "Faculté des Sciences et Techniques — Béni Mellal"
    },
    {
      period: "2022",
      status: "",
      title: "Baccalauréat série D — mention Très Bien (17,77 / 20)",
      place: "Mathématiques et sciences de la vie et de la terre"
    }
  ],
  cursus: {
    title: "Contenu du cursus GEM",
    subtitle: "Modules par semestre",
    semesters: [
      {
        label: "S1",
        modules: [
          "Électrotechnique",
          "Régulation industrielle",
          "Programmation embarquée",
          "Méthodes numériques & optimisation",
          "Algorithmique & Python"
        ]
      },
      {
        label: "S2",
        modules: [
          "Automation industrielle",
          "Automatique avancée",
          "Machines électriques",
          "Systèmes embarqués"
        ]
      },
      {
        label: "S3",
        modules: [
          "Capteurs intelligents & IoT",
          "Électronique de puissance",
          "Conception mécanique CAO & prototypage",
          "Hydraulique & pneumatique industrielles",
          "Techniques d'IA",
          "Ingénierie de la production"
        ]
      },
      {
        label: "S4",
        modules: [
          "Maintenance industrielle & 4.0",
          "IA & TinyML",
          "Installations & sécurité électriques",
          "Gestion de projets",
          "Industrialisation des produits"
        ]
      },
      {
        label: "S5 visé",
        modules: [
          "Robots industriels & systèmes mécatroniques",
          "Modélisation des systèmes robotiques",
          "Robotique mobile & computer vision"
        ]
      }
    ]
  },
  languages: [
    { name: "Français", level: "C2", percent: 100 },
    { name: "Anglais", level: "B1 / B2", percent: 62 },
    { name: "Allemand", level: "A1 — en cours", percent: 20 },
    { name: "Éwé", level: "Langue maternelle", percent: 100 }
  ],
  interests: [
    "Robotique",
    "Aéronautique",
    "Énergies renouvelables",
    "Lecture scientifique",
    "Kickboxing",
    "Basketball"
  ],
  engagement: [
    {
      icon: "users",
      title: "Chargé socioculturel — CISEC",
      org: "Club des étudiants internationaux de l'ENSAM Casablanca",
      date: "En cours",
      points: [
        "Définition de la vision et de la feuille de route annuelle",
        "Calendrier des activités coordonné avec les autres clubs et le calendrier académique",
        "Recensement des étudiants internationaux par formulaire bilingue",
        "Communication du club"
      ]
    },
    {
      icon: "users",
      title: "Comité d'organisation — StarTech Africa 2025",
      org: "4e édition, ENSAM Casablanca · « Startups, Deeptech & IA : catalyseurs d'une Afrique digitale souveraine et inclusive »",
      date: "16 et 17 décembre 2025",
      image: {
        src: "assets/images/projects/startech-africa.jpg",
        alt: "Songo Yao Mensah, badge du comité d'organisation, devant les drapeaux africains à l'ENSAM Casablanca"
      },
      points: [
        "Coordination et gestion du déroulement des activités",
        "Accompagnement des intervenants et soutien logistique",
        "Échanges avec des panélistes, porteurs de projets et acteurs de l'écosystème du Maroc et d'autres pays africains"
      ]
    },
    {
      icon: "mic",
      title: "1er prix — Concours Public Speaking, ENSAM Casablanca",
      org: "Concours de prise de parole organisé par l'ENSAM Casablanca · art oratoire et compétitions inter-écoles d'éloquence",
      date: "16 avril 2026",
      image: {
        src: "assets/images/projects/eloquence-trophee.jpg",
        alt: "Trophée Public Speaking Winner 2025-2026 de l'ENSAM Casablanca"
      },
      quote: "Une solution que tout le monde ne peut pas utiliser n'est pas une solution.",
      points: [
        "Discours sur l'ingénierie inclusive, construit autour d'une question : « Qui est exclu par ma conception ? »",
        "Argumentation et présentation devant jury et public"
      ]
    },
    {
      icon: "award",
      title: "Programme Ashinaga Africa Initiative",
      org: "Programme de leadership",
      date: "Décembre 2024",
      points: ["Excellence académique reconnue"]
    },
    {
      icon: "cog",
      title: "Membre — Club de mécatronique ENSAM Casablanca",
      org: "Projets techniques collaboratifs",
      date: "Depuis nov. 2025",
      points: ["Capteurs, systèmes embarqués, initiation à la robotique"]
    },
    {
      icon: "medal",
      title: "2e prix — Compétition de culture générale",
      org: "",
      date: "",
      points: ["Analyse et synthèse sous contrainte de temps"]
    }
  ]
};
