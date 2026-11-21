# Portfolio — Songo Yao Mensah

Site statique (HTML / CSS / JavaScript, sans framework ni étape de compilation),
hébergé gratuitement sur GitHub Pages : https://songo-yao-mensah.github.io/

---

## Mettre à jour le site en ligne (méthode sans ligne de commande)

1. Ouvre le dépôt `Songo-Yao-Mensah.github.io` sur GitHub.
2. Supprime l'ancien contenu OU écrase les fichiers : bouton **Add file → Upload files**.
3. Glisse le **contenu** du dossier `Songo-Yao-Mensah-portfolio` (pas le dossier lui-même) :
   les fichiers `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, `README.md`
   et les **dossiers** `css`, `js`, `assets` en entier (pour garder la structure).
4. En bas de page : message du commit, puis **Commit changes**.
5. Attends 1 à 2 minutes, puis ouvre le site et fais **Ctrl + F5** (vide le cache).

Structure attendue à la racine du dépôt :

```
index.html   404.html   robots.txt   sitemap.xml   README.md
css/style.css
js/data.js   js/main.js
assets/favicon.svg   assets/apple-touch-icon.png   assets/og-image.png
assets/cv/CV_Songo_Yao_Mensah.pdf
assets/images/profile/portrait.jpg
assets/images/projects/   (tes photos de projets, facultatif)
```

Hébergement : GitHub Pages, gratuit, sans limite de durée tant que le dépôt est public.

---

## Modifier le contenu

**Tout le texte du site est dans un seul fichier : `js/data.js`.**
Tu ne touches ni à `index.html`, ni à `css/`, ni à `js/main.js`.

| Pour…                              | Modifie dans `data.js`         |
|------------------------------------|--------------------------------|
| Ajouter ou réordonner un projet    | `projects` (les 6 premiers = grandes cartes) |
| Changer le texte d'ouverture       | `identity.heroLine`, `intro`   |
| Ajouter une compétence réalisée    | `skills` → `achievements`      |
| Ajouter une responsabilité / prix  | `engagement` (champ `image` facultatif) |
| Changer le ciel ou le drone du haut | `hero`                        |

Règle d'écriture : chaque projet = problème → réalisation → chiffre vérifiable.

Après une modification sur GitHub (icône crayon sur `js/data.js` → **Commit changes**),
le site se met à jour en 1 à 2 minutes.

## Photos

- **Tes propres captures** (SolidWorks, CATIA, Node-RED, MySQL…) sont dans `assets/images/projects/`.
- **Photos d'illustration** : certaines cartes utilisent des photos libres de droits Unsplash
  (licence Unsplash), chargées depuis le site d'Unsplash. Elles portent la mention
  « Photo d'illustration » et leurs auteurs sont crédités en bas de page.
- Pour remplacer une photo d'illustration par TA photo : dépose l'image dans
  `assets/images/projects/`, puis dans `js/data.js` remplace le champ `image` du projet par :
  `image: { src: "assets/images/projects/mon-image.jpg", alt: "Description", credit: "", illustration: false }`
- Pour ajouter des captures dans l'étude de cas d'un projet : ajoute-les dans son champ `gallery`.
- Pour ajouter une pièce à l'Atelier CAO : ajoute une image dans la `gallery` du projet `cad`.

## Remplacer le CV

Dépose le nouveau PDF dans `assets/cv/` avec exactement le nom `CV_Songo_Yao_Mensah.pdf`.

## Aperçu LinkedIn

`assets/og-image.png` est l'image affichée quand le lien est partagé sur LinkedIn,
WhatsApp ou par e-mail. Si l'aperçu LinkedIn reste ancien après une mise à jour,
utilise l'outil gratuit LinkedIn Post Inspector pour le rafraîchir.

## Technique

HTML5, CSS3 (variables, Grid, animations), JavaScript sans dépendance.
Polices Google Fonts : Space Grotesk (titres), DM Sans (texte). Grain léger généré en SVG (aucune image lourde).
Accessibilité : navigation clavier, lien d'évitement, contrastes, respect du réglage
« réduire les animations ». Version imprimable propre (Ctrl + P).

## Cache des navigateurs

Dans `index.html`, les fichiers CSS et JS sont appelés avec `?v=5`.
Après une grosse modification de `css/style.css`, `js/data.js` ou `js/main.js`,
augmente ce numéro (`?v=6`, etc.) pour que les visiteurs chargent bien la nouvelle version.
