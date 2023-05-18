---
sidebar_position : 1
---

# Introduction à Git

Dans ce chapitre, nous visons à définir un système de contrôle de version (VCS), à comprendre l'objectif et les fonctionnalités de Git, à apprendre à initialiser un référentiel Git avec "git init", à saisir le concept d'instantanés pour le suivi des modifications de code, à apprécier les avantages collaboratifs de Git et familiarisez-vous avec le dossier '.git'. Git est un système de contrôle de version distribué open source qui permet aux développeurs de suivre les versions de code au fil du temps. Il simplifie la collaboration et fournit un filet de sécurité grâce à des instantanés. En installant Git, vous pouvez initialiser un référentiel avec 'git init', en créant le dossier '.git' essentiel. Si nécessaire, le référentiel peut être supprimé avec 'rm -rf .git'. Ces fondations préparent le terrain pour explorer les commandes Git de base.

## Objectifs

À la fin de ce chapitre, vous devriez être en mesure de :

1. Définir ce qu'est un VCS
2. Initialisez un référentiel git vide et expliquez ce que fait la commande git init
3. Supprimer un dépôt git

## Qu'est-ce que Git ?

Si vous recherchez sur Google "qu'est-ce que git", vous verrez probablement la définition de "une personne désagréable ou méprisable". Heureusement, Git est bien meilleur que cela. Selon la [documentation Git](https://git-scm.com/) :

   `Git est un système de contrôle de version distribué gratuit et open source conçu pour tout gérer, des petits aux très grands projets, avec rapidité et efficacité.`

En clair, Git est un outil qui permet aux développeurs de suivre les versions de leur code au fil du temps. Pour ce faire, il crée des "instantanés" de l'état actuel de la base de code chaque fois que vous le lui demandez. En termes simples, Git est essentiel lors de la collaboration avec d'autres développeurs pour s'assurer que les "instantanés" précédents du code peuvent être revus si nécessaire. Par exemple, si vous travaillez sur le code et cassez accidentellement l'application, c'est beaucoup plus facile si vous utilisez Git et pouvez simplement revenir à une version précédente du code. Sinon, vous devrez vous souvenir de toutes les modifications que vous avez apportées et les annuler manuellement. pour une application de complexité même modérée, ce n'est tout simplement pas faisable.

Lorsque vous découvrez des outils comme Git, vous verrez souvent l'acronyme VCS. Cela signifie **V**ersion **C**ontrol **S**ystem. Git est un VCS car il vous permet de créer différentes versions de votre code et de passer facilement d'une version à l'autre. Bien que Git soit un VCS extrêmement populaire, ce n'est pas le seul. Subversion est un autre exemple (une liste plus complète peut être trouvée [ici](https://en.wikipedia.org/wiki/List_of_version_control_software)).

## Premiers pas avec Git

Avant de pouvoir commencer avec tout ce qui concerne Git, nous devons nous assurer que Git est installé. Dans votre terminal, tapez `git --version` ; si vous ne voyez pas d'erreur, vous êtes prêt à partir. Si vous voyez des erreurs (par exemple, commande introuvable : git), vous devrez peut-être installer Git sur votre ordinateur.

Vous pouvez facilement télécharger git ici [Download Git](https://git-scm.com/download)

Une fois que vous avez installé Git, vous devez « initialiser » un référentiel avec Git avant de pouvoir commencer à l'utiliser. Créez un dossier appelé `learn_git` et `cd` dans ce dossier.

Une fois que vous êtes dans ce dossier, exécutez la commande `git init` et vous verrez quelque chose comme `Initialized empty Git repository in /Users/YOUR_USERNAME/Desktop/learn_git/.git/`. Qu'est-ce que cela signifie? Que pensez-vous qu'il vient de se passer ? Si vous tapez ls, vous verrez qu'il semble qu'il n'y ait rien… mais comment pouvez-vous voir les fichiers cachés ?

Après avoir tapé `ls -a`, vous verrez un dossier appelé `.git`. C'est ce que fait la `commande git init` : elle crée un dossier `.git` pour vous. Heureusement, vous n'aurez presque jamais besoin d'aller dans ce dossier, mais sans lui, vous ne pourrez utiliser aucune des commandes git du chapitre suivant. N'oubliez donc pas que la première étape de tout projet avec Git consiste à vous assurer que vous disposez d'un dossier ".git".

Si vous initialisez accidentellement un dépôt dans le mauvais répertoire (vous ne voulez pas faire de votre dossier Bureau ou Accueil un dépôt git), vous pouvez simplement supprimer le dossier `.git` en utilisant `rm -rf .git`.

Lorsque vous êtes prêt, passez à Basic Git Commands
