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

La volatilité est l'ampleur des variations du cours d'un actif financier sur une période donnée, et est mesuré par l'écart-type. Il s'agit donc d'un indicateur technique souvent utilisé en trading, mais nous allons voir comment on peut en tirer avantage en tant qu'investisseur.

```
mesure de la volatilité = écart-type
```

## Ratio de Sharpe

Le ratio de Sharpe mesure l'écart de rentabilité d'un portefeuille d'actions par rapport au taux de rendement d'un placement sans risque, divisé par l'écart-type de la rentabilité de ce portefeuille.

```
Ratio de Sharpe = (Rentabilité du portefeuille - Rentabilité d'un placement sans risque) / écart-type

Ratio de Sharpe < 0 => le portefeuille a une moins bonne performance qu'un placement sans risque
Ratio de Sharpe < 1 => le portefeuille est rentable mais avec une volatilité importante
Ratio de Sharpe > 1 => le portefeuille est rentable et avec une volatilité contenue
```

Lorsque l'on compare deux portefeuilles, plus le ratio de Sharpe est élevé et plus le portefeuille sera rentable sans d'importantes fluctuations.

Le point faible du ratio de Sharpe, c'est que la volatilité à la hausse est connotée aussi négativement que la volatilité à la baisse. Nous allons voir prochainement comment le ratio de Sortino résoud ce problème.

## Ratio de Sortino

Le ratio de Sortino est une variante du ratio de Sharpe, ici on ne tiendra compte que de l'écart-type négatif. 

```
Ratio de Sortino = (Rentabilité du portefeuille - Rentabilité d'un placement sans risque) / écart-type à la baisse
```

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

## UPI

## Bandes de Bollinger

## Le VIX pour mesurer la volatilité du marché

## Point de vue de l'investisseur