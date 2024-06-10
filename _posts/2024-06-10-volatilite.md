---
layout: post
title: La volatilité
date: 2024-06-10 12:00:00-0100
description: Les différentes façon de mesurer la volatilité
tags: investir
categories: education
giscus_comments: true
related_posts: false
toc:
  beginning: true
---

## Introduction

La volatilité est l'ampleur des variations du cours d'un actif financier sur une période donnée, et est généralement mesuré par l'écart-type, mais nous verrons aussi que l'Ulcer Index peut également le quantifier avec plus de justesse.

La mesure de la volatilité est donc un indicateur technique, car basé sur les variations de prix, et est souvent utilisé en trading, mais nous allons voir comment on peut en tirer avantage en tant qu'investisseur.


> L'écart-type ou l'Ulcer Index peuvent mesurer la volatilité
{: .block-tip }

## Ratio de Sharpe

Le ratio de Sharpe mesure l'écart de rentabilité d'un portefeuille d'actions par rapport au taux de rendement d'un placement sans risque, divisé par l'écart-type de la rentabilité de ce portefeuille.

$$
\text{Ratio de Sharpe} = \frac{\text{Rentabilité du portefeuille} - \text{Rentabilité d'un placement sans risque}} {\text{Ecart-type à la hausse et à la baisse}}
$$

```
Ratio de Sharpe < 0 => le portefeuille a une moins bonne performance qu'un placement sans risque
Ratio de Sharpe < 1 => le portefeuille est rentable mais avec une volatilité importante
Ratio de Sharpe > 1 => le portefeuille est rentable et avec une volatilité contenue
```

Lorsque l'on compare deux portefeuilles, plus le ratio de Sharpe est élevé et plus le portefeuille sera rentable sans d'importantes fluctuations.

Le point faible du ratio de Sharpe, c'est que la volatilité à la hausse est connotée aussi négativement que la volatilité à la baisse. Nous allons voir prochainement comment le ratio de Sortino résoud ce problème.

## Ratio de Sortino

Le ratio de Sortino est une variante du ratio de Sharpe car on ne tiendra compte que de l'écart-type à la baisse. 

$$
\text{Ratio de Sortino} = \frac{\text{Rentabilité du portefeuille} - \text{Rentabilité d'un placement sans risque}} {\text{Ecart-type uniquement à la baisse}}
$$

Lorsque l'on compare deux portefeuilles, celui qui a le ratio de Sortino le plus élevé, est celui qui a présenté le moins de volatilité à la baisse et donc de chute de son cours, le "drawdown" en anglais.

Un exemple
```
Portefeuille P1 : rendement annualisé de 10%, écart-type à la baisse de 4%
Portefeuille P2 : rendement annualisé de 15%, écart-type à la baisse de 12%
Le taux sans risque est de 6%

Sortino P1 = (10-6)/4 = 1
Sortino P2 = (15-6)/12 = 0.75

P1 est donc un portefeuille offrant moins de volatilité à la baisse malgré son rendement inférieur
```

> Le ratio de Sortino mesure la volatilité à la baisse
{: .block-tip }

## UPI

L'UPI est également une variante du ratio de Sharpe, au lieu de prendre l'écart-type comme mesure de la volatilité, ici on prendra l'Ulcer Index.

$$
UPI = \frac{\text{Rentabilité du portefeuille} - \text{Rentabilité d'un placement sans risque}} {\text{Ulcer Index}}
$$

Avec $$ \text{Ulcer Index} = \sqrt { \frac {D(1)^2 + D(2)^2 + D(3)^2 + ... + D(n)^2}{n} } $$

Et $$ D(i) = 100 * \frac {\text{Cours de clôture}(i) - \text{Cours le plus haut sur la période}} {\text{Cours le plus haut sur la période}} $$, D(i) se calculant par période de 14 jours 

Donc :
- D(i) sera positif si il y a un drawdown sur la période
- D(i) se rapprochera de 0 si le cours de clôture est proche du top sur la période
- Plus la baisse est importante et plus $$ D(i)^2 $$ sera élevé

Ainsi, plus le drawdown est fort et plus la durée pour s'en remettre est long, plus l'Ulcer Index sera élevé, et par conséquent, plus l'UPI sera faible.

> L'UPI mesure la volatilité à la baisse en tenant compte de sa profondeur et de sa durée
{: .block-tip }

Vous trouverez [ici](/assets/pdf/ui.pdf) un article en anglais expliquant en détail l'Ulcer Index.

## Bandes de Bollinger

Les bandes de Bollinger sont constituées de trois lignes :
- une moyenne mobile simple, généralement calculée sur 20 jours
- une bande supérieure située à deux écarts-types au dessus de la moyenne mobile simple
- une bande inférieure située à deux écarts-types en dessous de la moyenne mobile simple

Théoriquement, il y a 95% de chance que l'évolution du cours s'établisse à l'intérieur des bandes supérieure et inférieure. Ainsi, plus les bandes sont larges, plus il y a de volatilité.

En analyse technique, nous observons généralement que :
- il y a une alternance de bande serrée et de bandes larges
- il y un début de tendance par un élargissement des bandes, la moyenne mobile indiquant la direction à la baisse ou à la hausse
- il y a un essouflement par un resserrement des bandes
- une action aura un potentiel de hausse ou de baisse important à la sortie d'un canal serré avec une moyenne mobile horizontale

> L'écartement des bandes de Bollinger donne une indication sur l'importance de la volatilité, et la direction de la moyenne mobile donne une indication sur la tendance haussière ou baissière
{: .block-tip }

## Le VIX pour mesurer la volatilité du marché

Jusqu'à présent, nous avons vu des indicateurs qui mesure la volatilité sur les prix passés, nous parlons de volatilité historique.

Le VIX permet quand à lui de mesurer la volatilité implicite, ou volatilité attendue. Cette méthode est tournée vers le futur car elle repose sur le prix des options.

Les options sont une sorte d'assurance qu'un investisseur peut acheter pour :
- protéger une position d'une forte baisse, 
- lui éviter de manquer une opportunité d'achat en cas de forte hausse du cours

Le prix des options est fixé par le marché, et plus une hypothèse à de chance de se produire, par exemple qu'une action atteigne un certain prix, et plus le prix de l'option est élevé.

> Le VIX, également appelé indice de la peur, est un indicateur de la nervosité des marchés financiers.
> Basé sur une moyenne pondérée du prix des options, elle reflète les attentes des investisseurs à se protéger face à une forte volatilité.
> Plus le VIX est élevé et plus le prix des options est élevé.
{: .block-tip }

## Point de vue de l'investisseur

#### Profiter de la nervosité lorsque le VIX passe au-dessus de 30
Un investisseur peut en profiter pour :
- acquérir des actions d'entreprises florissantes à prix bradé
- vendre des options pour profiter de l'envolée des cours des options

#### Affiner sa stratégie d'acquisition grâce à l'UPI
Une action dont l'UPI est faible indique que l'action a connu dans le passé des périodes de baisse forte et durable, cela est généralement le cas pour une entreprise cyclique. Ainsi, il conviendra d'accumuler des actions lors du cycle baissier, sans se précipiter.

Au contraire, une action avec un UPI élevé, indique que l'action n'a connu seulement que des baisses modérées. La plupart du temps, il s'agit d'entreprises florissantes capable de passer les tempêtes. Ainsi l'investisseur voulant accumuler des actions, peut commencer même avec juste un léger discount sur sa valeur intrinsèque.

#### Identifier un bas de marché
Un marché peut parfois se transformer en une véritable braderie où de nombreuses actions subissent une décôte importante. Cet état arrive soit en période de récession, soit lors d'épisode de panique générale. Il est impossible de dire ou de prédire un point bas de marché mais il est possible d'estimer si nous sommes dans une zone basse de marché.

> Une zone basse de marché peut être identifié par ces indicateurs statistiques :
> - SPXA200R < 30%
> - Ulcer Index sur le SP500 > 40
{: .block-tip }

SPXA200R = Pourcentage d'actions du SP500 au dessus de la moyenne mobile 200 jours. En d'autres terme, SPXA200R représente un pourcentage d'actions avec un momentum positif.

La concordance de ces deux indicateurs peut confirmer le signal statistique d'un bas de marché. Un bon investisseur, ayant laissé accumuler des liquidités, peut profiter de cette occasion pour accumuler ou construire des positions.

#### Les autres indicateurs
Il existe de nombreux indicateurs techniques. Ils sont souvent utilisé en trading mais offrent peu d'intérêt pour un profil investisseur long terme.
Le ratio de Sharpe par exemple, bien que connu, ne nous sera pas utile. Le ratio de Sortino, donne une indication plus intéressante, mais reste moins précis que l'UPI. Et quand aux bandes de Bollinger, elles sont intéressantes seulement dans le cadre de l'analyse technique.