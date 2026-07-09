# Portfolio — Songo Yao Mensah

Site vitrine statique (HTML/CSS/JS pur, aucun framework, aucune installation
nécessaire) pour candidatures ingénieur en France, Allemagne et USA.

---

## 🚀 Mise en ligne gratuite sur GitHub Pages

Ton compte GitHub : `Songo-Yao-Mensah`

1. Crée un **nouveau repository public** qui s'appelle **exactement** :
   ```
   Songo-Yao-Mensah.github.io
   ```
   (Le nom doit correspondre pile à `<ton-pseudo>.github.io` — c'est ce nom
   précis qui active le mode "site personnel" gratuit de GitHub.)

2. Mets tous les fichiers de ce dossier (`index.html`, `css/`, `js/`,
   `assets/`, ce `README.md`) à la racine de ce repository.

   Depuis ton ordinateur, dans le dossier du projet :
   ```bash
   git init
   git add .
   git commit -m "Premier déploiement du portfolio"
   git branch -M main
   git remote add origin https://github.com/Songo-Yao-Mensah/Songo-Yao-Mensah.github.io.git
   git push -u origin main
   ```

3. Sur GitHub → onglet **Settings** du repo → section **Pages** (menu de
   gauche) → vérifie que la source est bien `main` / dossier `/ (root)`.

4. Après 1 à 2 minutes, ton portfolio est en ligne sur :
   ```
   https://songo-yao-mensah.github.io/
   ```
   → C'est ce lien que tu mets sur ton CV et LinkedIn.

Aucune carte bancaire, aucun abonnement, hébergement gratuit à vie tant que
le repo reste public.

---

## ✏️ Mettre à jour le contenu (nouveau projet, compétence, etc.)

**Tu ne touches jamais à `index.html`, `css/` ou `main.js`.**
Tout le texte du site vit dans un seul fichier :

```
js/data.js
```

Ouvre-le, repère la section concernée (ex: `projects`, `hardSkills`,
`distinctions`...), copie un bloc `{ ... }` existant, colle-le, modifie le
texte. Sauvegarde, puis :

```bash
git add .
git commit -m "Ajout du projet X"
git push
```

Le site se met à jour automatiquement en 1-2 minutes, sans rien casser.

## 🖼️ Ajouter tes images / ton CV

Chaque dossier `assets/images/...` et `assets/cv/` contient un fichier
`LISEZ-MOI.txt` qui indique le nom exact de fichier attendu. Dépose ton
image ou ton CV avec ce nom précis, et il apparaîtra automatiquement à la
bonne place (sinon un placeholder discret s'affiche en attendant).

## 🗂️ Structure du projet

```
index.html          → structure du site (à ne pas modifier)
css/style.css        → design (thème dark industriel / blueprint)
js/data.js            → TOUT le contenu texte — c'est ici que tu travailles
js/main.js             → logique de rendu + interactions (à ne pas modifier)
assets/cv/             → ton CV en PDF
assets/images/projects/→ tes visuels de projets
assets/images/certifications/ → visuels de futures certifications
assets/images/profile/ → optionnel, si tu remplaces le schéma hero par une photo
```

## 🔧 Stack technique

HTML5, CSS3 (variables CSS, Grid, animations natives), JavaScript vanilla
(aucune dépendance). Polices via Google Fonts (Rajdhani, Inter, JetBrains
Mono). Aucune étape de build : tu ouvres `index.html` dans un navigateur et
ça marche déjà en local.
