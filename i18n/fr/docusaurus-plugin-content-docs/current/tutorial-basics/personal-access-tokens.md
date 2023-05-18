---
sidebar_position: 7
---

# Jetons d'accès personnels

## Objectifs

À la fin de ce chapitre, vous devriez être en mesure de :

1. Créez un référentiel distant sur GitHub
2. Créez une télécommande dans le terminal
3. Poussez le code d'un référentiel local vers un référentiel distant

## Introduction

Lorsque vous poussez ou extrayez du code de GitHub, il est essentiel que GitHub puisse vous authentifier avec succès avant de vous permettre d'exécuter ces commandes. Cela signifie que chaque fois que vous essayez de git push ou git pull, GitHub vous demandera votre email et votre mot de passe, et s'ils sont corrects, la commande s'exécutera. Sans authentification, GitHub serait le chaos : n'importe qui pourrait pousser le code de son choix vers n'importe quel référentiel à tout moment !

Il est donc essentiel de pouvoir authentifier les personnes lorsqu'elles poussent ou tirent. Mais cela devient aussi vite fastidieux. Lorsque vous poussez et tirez fréquemment, taper vos informations d'identification à chaque fois est un peu compliqué. Auparavant, il était recommandé par GitHub d'utiliser SSH, mais maintenant la recommandation est d'utiliser un jeton d'accès personnel ou PAT. Pour ce faire, nous devons effectuer les étapes suivantes.

## Création d'un PAT

Cela peut être un peu intimidant, mais si vous suivez attentivement les étapes, vous devriez pouvoir le faire fonctionner. (Si vous êtes bloqué, GitHub fournit également des instructions sur la création de PAT.)

1. Allez sur <https://github.com/settings/tokens/new>
2. Sous Note, entrez "Rithm"
3. Sous Expiration, choisissez "Pas d'expiration"
4. Sous Select scopes, "repo" doit être coché.
5. Cliquez sur Générer un jeton
6. Important enregistrez le jeton dans un fichier. Il ne vous sera plus montré.

La prochaine fois, lorsque vous tirerez/pousserez vers GitHub, il vous sera demandé de vous authentifier auprès de *https://your_<username@github.com>*. Même si l'invite indique d'entrer un mot de passe, vous devez entrer votre nouveau jeton d'accès.

Cela peut sembler pénible, mais heureusement, vous n'avez besoin de le faire qu'une seule fois. Une fois la connexion établie, vous pourrez pousser et tirer sans avoir à vous authentifier à chaque fois.

Lorsque vous êtes prêt, passez à GitHub Workflow
