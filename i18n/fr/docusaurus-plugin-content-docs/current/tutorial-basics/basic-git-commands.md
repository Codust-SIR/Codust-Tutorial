---
sidebar_position : 2
---

# Commandes Git de base

Dans ce chapitre, nos objectifs sont de comprendre et d'utiliser efficacement les commandes Git de base. Nous apprendrons le but de commandes telles que git add, git commit et git status, et explorerons les différentes étapes impliquées dans l'ajout et la validation de fichiers. En ajoutant des fichiers à la zone de préparation et en les validant, nous pouvons créer des instantanés de notre code. Nous nous exercerons également à utiliser git log pour afficher l'historique des commits et apprendre à le parcourir. Grâce à des exercices, tels que la création de fichiers, le suivi des modifications et l'exécution de validations, nous acquerrons une expérience pratique des opérations fondamentales de Git.

## Objectifs

À la fin de ce chapitre, vous devriez être en mesure de :

1. Expliquez ce que fait `git add`
2. Expliquez ce que fait `git commit`
3. Expliquez ce que fait `git status`
4. Expliquez les différentes étapes lors de l'ajout et de la validation

## Ajouter et valider des fichiers

Afin de prendre un instantané de votre code (ce que nous appellerons un "commit"), vous devez d'abord ajouter votre code de votre répertoire de travail à ce qu'on appelle la zone "staging". Git veut que vous soyez prudent et que vous ne preniez pas simplement des instantanés au hasard, il ajoute donc une zone intermédiaire appelée la zone de staging où votre code va avant qu'il ne soit "validé" (c'est-à-dire avant qu'un instantané ne soit pris). Pour voir à quel stade en est votre code, vous pouvez utiliser la commande `git status`.

Si vous n'avez ajouté, supprimé ou modifié aucun fichier, vous serez averti qu'il n'y a rien à valider et que votre répertoire de travail est propre (rien qui doit être transféré ou validé).

Jetons un coup d'œil à un exemple rapide. Créez un répertoire appelé `working_with_git` et `cd` dedans. Une fois dans ce répertoire, initialisez un dépôt git. Si vous tapez ensuite `git status`, on vous dira qu'il n'y a rien à valider (dans ce cas, car il n'y a pas encore de fichiers).

Si vous ajoutez un nouveau fichier qui n'a jamais été validé auparavant, ce fichier sera "non suivi" par git. Si vous modifiez ou supprimez des fichiers que git a déjà vus, vous verrez "modifié" ou "supprimé" lorsque vous examinerez `git status`.

Voyons cela en action. À partir de votre répertoire `working_with_git`, créez un fichier appelé example.txt. Si vous exécutez `git status` maintenant, vous devriez voir que ce nouveau fichier n'est pas encore suivi. Alors suivons-le !

Pour suivre ce fichier, nous pouvons taper `git add example.txt`. Plus communément, vous pouvez également taper `git add .`, qui indique à git d'ajouter tout ce qui a changé dans le répertoire courant à la zone de staging. Vous pouvez également taper `git add -A` ; Si vous souhaitez en savoir plus sur les différences entre les différentes façons d'ajouter, consultez ce post Stack Overflow.

Une fois que vous avez ajouté tous les fichiers que vous souhaitez dans la zone de préparation, l'étape suivante consiste à valider avec un message (vous en avez toujours besoin). Ceci est fait en utilisant la commande git commit avec le drapeau -m. Ainsi, une fois que vous avez ajouté, vous pouvez ensuite taper `git commit -m` "initial commit" et vous ferez votre premier commit. Essayez-le avec votre référentiel git à l'intérieur de `working_with_git`.

Pour voir à quoi ressemble votre historique de validation, vous pouvez taper `git log`. Cela vous montrera chaque commit et le message de commit qui lui a été attaché. Pour fermer le journal git, vous pouvez appuyer sur q.

Pour voir vos commits d'une manière un peu plus claire, vous pouvez ajouter le drapeau `--oneline` à la commande `git log`. Donc, si vous tapez `git log --oneline` vous verrez chaque commit sur une ligne, ce qui peut être plus facile à lire pour vous.

Vous devriez vous entraîner à suivre plusieurs fois le processus d'ajout et de validation. Essayez d'ajouter un deuxième fichier ou d'ajouter du texte dans `example.txt`. Ajoutez les modifications à la zone de préparation, puis validez !

## Exercice 1.0

Cela ne fait jamais de mal de s'entraîner davantage lorsque vous apprenez Git pour la première fois. Maintenant que vous savez comment initialiser un dépôt git local (à l'aide de `git init`), ajouter des fichiers à la zone de staging et les valider, essayez de suivre ces étapes :

1. Créez un dossier appelé `learn_git`. (Assurez-vous de le faire à partir d'un dossier qui n'est pas un référentiel git !)
2. cd dans le dossier `learn_git`.
3. Créez un fichier appelé `first.txt`.
4. Initialisez un référentiel git vide.
5. Ajoutez `first.txt` à la zone de staging.
6. Validez avec le message `“adding first.txt”`.
7. Vérifiez votre commit avec `git log`.
8. Créez un autre fichier appelé `second.txt`.
9. Ajoutez `second.txt` à la zone de préparation.
10. Validez avec le message `“adding second.txt”`.
11. Supprimez le fichier `first.txt`.
12. Ajoutez cette modification à la zone de préparation.
13. Validez avec le message `“removing first.txt”`.
14. Vérifiez vos commits à l'aide de git log.

Bien joué! Vous venez de parcourir un workflow git local très simple. Même si ces exemples peuvent sembler relativement simples, c'est presque identique à la façon dont vous travaillez avec git dans un environnement professionnel !

Lorsque vous êtes prêt, passez à Configuration de Git
