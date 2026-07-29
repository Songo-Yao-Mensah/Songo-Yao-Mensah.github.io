/**
 * ============================================================
 * DATA.JS — Tout le contenu du portfolio est ici.
 * ============================================================
 * Pour mettre à jour ton portfolio (nouveau projet, nouvelle
 * compétence, nouvelle distinction...), modifie UNIQUEMENT ce
 * fichier. Le design ne bouge pas.
 *
 * Règles simples :
 * - Chaque tableau ci-dessous est une liste d'entrées.
 * - Pour ajouter une entrée : copie un bloc { ... } existant,
 *   colle-le juste après (n'oublie pas la virgule), et modifie
 *   le texte à l'intérieur.
 * - Pour supprimer une entrée : supprime le bloc { ... }
 *   correspondant (et sa virgule si c'est le dernier).
 * ============================================================
 */

const PORTFOLIO_DATA = {

  // ----------------------------------------------------------
  // IDENTITÉ / HERO
  // ----------------------------------------------------------
  identity: {
    name: "Songo Yao Mensah",
    role: "Élève Ingénieur en Génie Électromécanique",
    tags: ["Automatisation Industrielle", "Systèmes Embarqués", "Robotique", "Industrie 4.0"],
    location: "Casablanca, Maroc",
    heroLead: "Formé à l'ENSAM Casablanca à la croisée de l'ingénierie électrique, mécanique et numérique.",
    heroSub: "Prêt à intégrer un stage d'initiation pour mettre en pratique mes connaissances en milieu industriel.",
    cvFile: "assets/cv/CV_Songo_Yao_Mensah.pdf",
    github: "https://github.com/Songo-Yao-Mensah",
    linkedin: "https://www.linkedin.com/in/yao-mensah-songo-1a8761359",
    email: "songoyaomensah@gmail.com",
    phone: "+212 6 21 63 29 38"
  },

  // ----------------------------------------------------------
  // À PROPOS
  // ----------------------------------------------------------
  about: {
    paragraphs: [
      "Élève ingénieur en Génie Électromécanique à l'ENSAM Casablanca, une formation pluridisciplinaire qui allie ingénierie électrique, ingénierie mécanique, ingénierie numérique et management industriel — pensée pour répondre aux défis de l'Industrie 4.0.",
      "Intérêt particulier pour l'automatisation industrielle, les systèmes embarqués, la robotique et la maintenance prédictive. Chaque projet, du drone VTOL au monitoring énergétique IoT, est une occasion de faire dialoguer le matériel et le logiciel."
    ]
  },

  // ----------------------------------------------------------
  // PARCOURS ACADÉMIQUE (timeline, du plus récent au plus ancien)
  // ----------------------------------------------------------
  academicTimeline: [
    {
      period: "2025 — 2028",
      status: "En cours",
      title: "Cycle Ingénieur — Génie Électromécanique",
      place: "École Nationale Supérieure des Arts et Métiers (ENSAM Casablanca)",
      detail: ""
    },
    {
      period: "2022 — 2025",
      status: "",
      title: "DEUST Génie Électrique & Génie Mécanique",
      place: "Faculté des Sciences et Techniques — Béni Mellal",
      detail: ""
    },
    {
      period: "2019 — 2022",
      status: "",
      title: "Baccalauréat Série D — Mention Très Bien (17,77/20)",
      place: "Mathématiques et Sciences de la Vie et de la Terre",
      detail: ""
    }
  ],

  // Aperçu du cursus ENSAM — carte dépliable dans "Parcours académique"
  cursusApercu: {
    title: "Aperçu du cursus ENSAM",
    subtitle: "Modules clés par semestre",
    semesters: [
      {
        label: "S1",
        modules: ["Électrotechnique", "Régulation industrielle", "Programmation embarquée", "Algorithmique & Python", "Mécanique des fluides & simulation numérique"]
      },
      {
        label: "S2",
        modules: ["Automatisation industrielle", "Automatique avancée", "Machines électriques", "Systèmes embarqués"]
      },
      {
        label: "S3",
        modules: ["Capteurs intelligents & IoT", "Électronique de puissance", "CAO & prototypage", "Techniques d'intelligence artificielle"]
      },
      {
        label: "S4",
        modules: ["Maintenance industrielle & maintenance 4.0", "Intelligence artificielle & TinyML", "Installations et sécurité électriques", "Gestion de projets"]
      }
    ],
    next: "Prochaine étape — spécialisation S5 en Systèmes Intelligents & Robotique Industrielle."
  },

  // ----------------------------------------------------------
  // COMPÉTENCES — HARD SKILLS (grille Bento)
  // Chaque catégorie a une "size" pour la grille : "wide" (2 colonnes) ou "normal" (1 colonne)
  // Chaque catégorie contient des SOUS-CATÉGORIES.
  // Chaque sous-catégorie a :
  //   - "tools"        → les outils/technos (badges)
  //   - "achievements" → 2-4 compétences concrètes / choses réellement faites
  // Pour ajouter une compétence : ajoute une ligne dans "achievements".
  // Pour ajouter une sous-catégorie : copie un bloc { name, tools, achievements }.
  // ----------------------------------------------------------
  hardSkills: [
    {
      icon: "cpu",
      title: "Systèmes Embarqués",
      size: "wide",
      subcategories: [
        {
          name: "Microcontrôleurs",
          tools: ["Arduino", "ESP32", "PIC16F887A"],
          achievements: [
            "Identification et configuration des ports E/S",
            "Génération de signaux PWM (pilotage LEDs, moteurs)",
            "Gestion des interruptions et afficheurs 7 segments (MikroC)"
          ]
        },
        {
          name: "Connectivité & Cloud",
          tools: ["Firebase", "MicroPython", "IoT"],
          achievements: [
            "Connexion ESP32 → Firebase pour acquisition temps réel",
            "Mise en place d'un système d'alerte à seuil",
            "Visualisation de données de consommation énergétique"
          ]
        }
      ]
    },
    {
      icon: "sliders",
      title: "Automatisme",
      size: "normal",
      subcategories: [
        {
          name: "Automates & Régulation",
          tools: ["TIA Portal", "GRAFCET", "PID"],
          achievements: [
            "Modélisation GRAFCET d'un processus séquentiel",
            "Réglage de boucles de régulation PID",
            "Programmation d'automates sur TIA Portal (Siemens)"
          ]
        }
      ]
    },
    {
      icon: "box",
      title: "CAO & Simulation",
      size: "normal",
      subcategories: [
        {
          name: "Conception mécanique",
          tools: ["SolidWorks"],
          achievements: [
            "Modélisation CAO d'un drone VTOL biomimétique",
            "Conception d'assemblages et mise en plan"
          ]
        },
        {
          name: "Simulation numérique",
          tools: ["MATLAB/Simulink", "ANSYS", "Proteus", "PSIM"],
          achievements: [
            "Simulation de circuits électroniques sous Proteus",
            "Modélisation de systèmes sous MATLAB/Simulink"
          ]
        }
      ]
    },
    {
      icon: "code",
      title: "Programmation",
      size: "normal",
      subcategories: [
        {
          name: "Langages",
          tools: ["Python", "C / C++", "SQL", "HTML / CSS"],
          achievements: [
            "Algorithmique et scripts en Python",
            "Requêtes et gestion de bases de données SQL"
          ]
        },
        {
          name: "Description matérielle (HDL)",
          tools: ["VHDL", "Quartus", "ModelSim"],
          achievements: [
            "Conception d'une machine à états finis (FSM) en VHDL",
            "Simulation sous ModelSim, synthèse sous Quartus"
          ]
        }
      ]
    },
    {
      icon: "bolt",
      title: "Électromécanique",
      size: "wide",
      subcategories: [
        {
          name: "Machines & Réseaux électriques",
          tools: ["Machines électriques", "Réseaux triphasés"],
          achievements: [
            "Analyse de machines électriques (moteurs, transformateurs)",
            "Étude et dimensionnement de réseaux triphasés"
          ]
        },
        {
          name: "Maintenance industrielle",
          tools: ["Maintenance 4.0", "Sécurité électrique"],
          achievements: [
            "Bases de la maintenance préventive, corrective et prédictive",
            "Installations et sécurité électriques industrielles"
          ]
        }
      ]
    },
    {
      icon: "layout",
      title: "Outils Bureautiques & Créatifs",
      size: "normal",
      subcategories: [
        {
          name: "Outils courants",
          tools: ["Word / Excel / PowerPoint", "Canva", "CapCut"],
          achievements: []
        }
      ]
    }
  ],

  // ----------------------------------------------------------
  // COMPÉTENCES — SOFT SKILLS
  // ----------------------------------------------------------
  softSkills: [
    {
      icon: "mic",
      title: "Leadership & Communication",
      skills: ["Prise de parole en public", "Argumentation", "Animation de projets d'équipe"]
    },
    {
      icon: "target",
      title: "Esprit d'analyse & de synthèse",
      skills: ["Résolution de problèmes complexes", "Gestion du stress", "Travail sous contrainte de temps"]
    },
    {
      icon: "users",
      title: "Travail d'équipe",
      skills: ["Collaboration technique", "Initiation à la robotique collective", "Adaptabilité"]
    }
  ],

  // ----------------------------------------------------------
  // PROJETS — le premier est le projet phare (mis en avant)
  // image : chemin du fichier que Songo ajoutera lui-même
  // ----------------------------------------------------------
  projects: [
    {
      featured: true,
      title: "Drone Hybride VTOL Biomimétique",
      period: "Mai 2026 — En cours",
      description: "Modélisation CAO sous SolidWorks d'un drone à décollage vertical et vol plané. Participation à la conception mécanique et à l'intégration des composants.",
      stack: ["SolidWorks", "Conception mécanique", "CAO"],
      image: "assets/images/projects/drone-vtol.jpg",
      link: ""
    },
    {
      featured: false,
      title: "Smart Energy Monitoring System",
      period: "Nov — Déc 2025",
      description: "Système de suivi de consommation énergétique basé sur ESP32 et Firebase. Acquisition et visualisation des données en temps réel avec système d'alerte.",
      stack: ["ESP32", "MicroPython", "Firebase", "IoT"],
      image: "assets/images/projects/smart-energy.jpg",
      link: ""
    },
    {
      featured: false,
      title: "Distributeur Automatique de Café",
      period: "Fév — Mars 2026",
      description: "Conception d'une machine à états finis (FSM) pour la gestion de la distribution et de la monnaie. Développement et simulation sous Quartus et ModelSim.",
      stack: ["VHDL", "Quartus", "ModelSim"],
      image: "assets/images/projects/fsm-cafe.jpg",
      link: ""
    },
    {
      featured: false,
      title: "Programmation PIC16F887A",
      period: "Jan — Avr 2026",
      description: "Mini-projets utilisant interruptions, afficheurs 7 segments et pilotage de LEDs.",
      stack: ["PIC16F887A", "MikroC", "Proteus"],
      image: "assets/images/projects/pic16f887a.jpg",
      link: ""
    }
  ],

  // ----------------------------------------------------------
  // DISTINCTIONS & VIE ASSOCIATIVE
  // ----------------------------------------------------------
  distinctions: [
    {
      icon: "trophy",
      title: "1er Prix — Concours d'Éloquence ENSAM Casablanca",
      date: "16 avril 2026",
      detail: "Argumentation et prise de parole en public devant jury."
    },
    {
      icon: "award",
      title: "Programme Ashinaga Africa Initiative",
      date: "Décembre 2024",
      detail: "Excellence académique reconnue. Développement du leadership et de la communication."
    },
    {
      icon: "medal",
      title: "2e Prix — Compétition de Culture Générale",
      date: "",
      detail: "Esprit d'analyse et de synthèse, gestion du stress."
    },
    {
      icon: "users",
      title: "Membre — Club de Mécatronique ENSAM Casablanca",
      date: "Nov. 2025 — en cours",
      detail: "Projets techniques collaboratifs, manipulation de capteurs et systèmes embarqués."
    },
    {
      icon: "sun",
      title: "Formation complémentaire — Énergie Solaire",
      date: "Décembre 2018",
      detail: "Principes des systèmes photovoltaïques, production et gestion de l'énergie solaire."
    }
  ],

  // ----------------------------------------------------------
  // LANGUES (level en % pour la barre animée)
  // ----------------------------------------------------------
  languages: [
    { name: "Français", level: "C2", percent: 100 },
    { name: "Anglais", level: "B1 / B2", percent: 62 },
    { name: "Allemand", level: "A1", percent: 20 },
    { name: "Éwé", level: "Langue maternelle", percent: 100 }
  ],

  // ----------------------------------------------------------
  // CENTRES D'INTÉRÊT
  // ----------------------------------------------------------
  interests: ["Robotique", "Aéronautique", "Énergies renouvelables", "Lecture scientifique", "Kickboxing", "Basketball"]

};
