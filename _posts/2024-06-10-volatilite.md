---
layout: post
title: La volatilité
date: 2024-06-08 17:10:00-0000
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



## Le VIX pour mesurer la volatilité du marché

## Point de vue de l'investisseur

L'UPI permet d'avoir  une idée de la catégorie de l'action. Par exemple, une action cyclique aura un UPI faible.
L'UPI permet également d'affiner sa stratégie d'acquisition. Un UPI faible signifie que l'action est sûrement cyclique et qu'il est intéressant d'attendre que l'entreprise connaisse une baisse de son activité pour acquérir des actions, car la chutte du cours risque d'être fort si on s'en réfère à son passé. Un UPI fort signifie qu'il ne faut pas s'attendre à un discount extraordinaire sur le prix de l'action, une stratégie d'acquisition à un prix convenable avec une petite marge de sécurité peut convenir.

