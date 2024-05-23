git
===
- push vers master => redeploie automatiquement et met à jour la branche gh-pages
- j'ai protégé la branche master, et créé une branche develop


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
- publications      => supprimer
- projects          => supprimer
- repositories      => supprimer
- cv                => supprimer
- teaching
- people            => supprimer
- submenus          => supprimer


cible
=====
- stocks
    - tableau avec "ticker" et "nom"
        - "ticker" renvoie sur une page avec "description" et "sector"
- faq
- blog



