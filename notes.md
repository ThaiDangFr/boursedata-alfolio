al-folio
========
- https://github.com/alshedivat/al-folio
- exemple : https://alshedivat.github.io/al-folio/

git
===
- push vers master => redeploie automatiquement et met à jour la branche gh-pages
- j'ai protégé la branche master, et créé une branche develop

merger avec les nouveautés de la version originale
```bash
git remote add template git@github.com:alshedivat/al-folio.git
git fetch template
git checkout develop
git merge template/master --allow-unrelated-histories
=> ouvrir sublime merge pour choisir theirs ou ours
```


dev en local
============
http://localhost:8080
```
$ docker compose pull
$ docker compose up
$ docker compose up --build
```

- pour exclure des fichiers du rebuild automatique, voir dans \_config.yml dans la section "exclude:"



analyse de l'existant
=====================
- about             => _pages/about.md et utilise le _layouts/about.liquid
- blog              => _pages/blog.md et _posts/*.md
- publications      => supprimer publications.md
- projects          => supprimer projects.md
- repositories      => supprimer repositories.md
- cv                => supprimer cv.md
- teaching          => transformer en "Stocks"
- people            => supprimer profiles.md et about_einstein.md
- submenus          => supprimer dropdown.md





cible
=====
- stocks
    - tableau avec "ticker" et "nom"
        - "ticker" renvoie sur une page avec "description" et "sector"
- faq
- blog



