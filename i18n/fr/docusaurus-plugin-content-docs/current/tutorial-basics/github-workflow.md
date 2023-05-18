---
sidebar_position: 8
---
# Flux de travail GitHub

## Objectifs

À la fin de ce chapitre, vous devriez être en mesure de :

1. Forker un référentiel sur GitHub
2. Cloner un référentiel distant
3. Émettez une pull request
4. Expliquez ce qu'est un amont et configurez un référentiel en amont

## Fourchette

Maintenant que nous savons comment pousser le code jusqu'à GitHub, discutons d'un concept spécifique à GitHub : le forking.

Lorsque vous travaillez avec d'autres, vous ne pourrez parfois pas pousser directement vers ce référentiel (imaginez si nous pouvions simplement pousser notre code vers certains des plus grands projets open source au monde... ce serait assez fou). Donc, ce que nous devons faire, c'est faire une copie du référentiel distant de quelqu'un d'autre et nous assurer qu'il est sous notre nom d'utilisateur afin que nous puissions lui envoyer du code.

Pour pratiquer le fork, rendez-vous [ici](https://github.com/Codust-SIR/learn-fork) et en haut à droite, vous verrez un bouton avec le texte Fork. Cliquez sur ce bouton et vous aurez une copie du référentiel sous votre nom !

N'oubliez pas que le "forking" est un concept **GitHub**, et non quelque chose de directement lié à Git. C'est simplement le moyen de faire votre propre copie d'un référentiel sur votre compte où vous avez la permission de pousser votre code vers GitHub.

## Cloner

Une fois que vous avez forké le référentiel, vous devez prendre ce référentiel (celui distant que vous venez de créer) et télécharger le code sur votre ordinateur local (créer un référentiel local). Au lieu de créer un dossier et de suivre tout le processus `git init` et d'ajouter une télécommande, vous pouvez utiliser la commande `git clone`, qui accepte un lien vers le référentiel et le télécharge dans un dossier (avec git et une télécommande déjà installation!)

Rendez-vous sur votre copie fourchue du référentiel et vous verrez un bouton défini sur `HTTPS` ou `SSH`. Lorsque vous cliquez sur ce bouton, il devrait afficher "Choisir une URL de clonage" - **Assurez-vous que vous utilisez SSH.** La sélection de "HTTPS" vous obligera à saisir vos informations d'identification chaque fois que vous poussez ou tirez, ce qui est tout à fait évitable. problème depuis que nous avons mis en place SSH ! Vous pouvez copier le lien soit en le sélectionnant et en le copiant, soit en cliquant sur l'icône à côté du lien (lorsque vous le survolez - il devrait indiquer "copier dans le presse-papiers").

Dans le terminal (vous pouvez démarrer dans votre répertoire personnel) exécutez la commande `git clone PASTE_URL_HERE`

Maintenant que vous avez le référentiel localement, ajoutez un nouveau fichier ou apportez des modifications, ajoutez-les et validez-les et exécutez `git push origin master` et vous devriez voir vos modifications mises à jour dans votre copie forkée.

## Demande d'extraction

Supposons maintenant que vous collaborez avec l'organisation `Codust-SIR` (à partir de laquelle vous avez forké le référentiel) et que vous souhaitez fusionner vos modifications avec le référentiel d'origine que vous avez forké (rappelez-vous que vous ne pouvez pas simplement y accéder, car vous n'êtes pas autorisé à le faire). Vous pouvez émettre une demande d'extraction et quelqu'un qui en a l'autorisation peut soit la fusionner, soit la rejeter.

Pour ce faire, cliquez sur le bouton « Nouvelle demande de tirage » puis cliquez sur le bouton « Créer une demande de tirage ». Vous devriez alors pouvoir accéder au référentiel d'origine et voir votre demande d'extraction ou "PR".

## Récupération du code depuis Github + Configuration en amont

Maintenant, que se passe-t-il si quelqu'un d'autre fait une demande d'extraction qui est fusionnée dans le référentiel d'origine de `Codust-SIR` ? Comment pouvons-nous obtenir ce code sur notre ordinateur? Devons-nous de nouveau bifurquer et cloner ? Non! Au lieu de cela, nous utiliserons un flux de travail différent et plus facile.

1. Assurez-vous que tout est d'abord engagé localement
2. Tirez le dernier code de GitHub (à partir d'une nouvelle télécommande que nous appellerons en amont)
3. Corrigez les conflits de fusion s'il y en a
4. Repoussez le code dans notre référentiel d'origine

Alors que se passe-t-il à l'étape 2 ? De quoi parle-t-on en amont ? Eh bien, nous avons notre télécommande appelée origin qui correspond au référentiel forké, mais si une modification a été apportée au référentiel d'origine que nous avons forké, origin ne se mettra pas automatiquement à jour avec ces modifications ! Pour obtenir les modifications, nous devrons revenir au référentiel d'origine à partir duquel nous avons dérivé.

Même si nous ne pouvons pas pousser vers ce référentiel de référentiel d'origine, nous pouvons tirer pour obtenir les dernières modifications. Mais pour ce faire, nous devons indiquer à Git de quel référentiel distant extraire le code. Ajoutons donc une nouvelle télécommande appelée en amont :

``` console
git remote ajouter en amont git@github.com:Codust-SIR/learn-fork.git
```

Notez que l'URL pointe vers le référentiel `Codust-SIR`, et non vers un référentiel associé à notre compte GitHub. Une fois l'amont défini, nous pouvons exécuter git pull amont master pour obtenir le dernier code du référentiel d'origine, puis nous pouvons exécuter git push origin master pour mettre à jour notre copie forkée avec le dernier code.

La commande git pull est en fait une combinaison de deux commandes git fetch + git merge. Si vous remarquez qu'un référentiel distant a de nouvelles branches, vous pouvez utiliser la commande git fetch pour les récupérer et les voir à l'aide de git branch -a. Pour en savoir plus sur l'extraction, la récupération et la fusion, consultez cette question sur Stack Overflow.

Lorsque vous êtes prêt, passez aux exercices GitHub
