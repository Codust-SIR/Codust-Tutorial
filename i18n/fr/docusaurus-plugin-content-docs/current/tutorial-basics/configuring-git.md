---
sidebar_position : 3
---

# Configurer Git

Dans ce chapitre, nos objectifs sont de configurer Git efficacement. Nous apprendrons comment modifier les paramètres de configuration globaux de Git, tels que la spécification du nom de l'auteur et de l'e-mail pour les commits. De plus, nous explorerons le concept des alias Git, qui nous permettent de créer des raccourcis pour les commandes Git fréquemment utilisées. En personnalisant notre configuration Git, nous pouvons améliorer notre flux de travail et gagner en efficacité. Les paramètres de configuration globaux sont stockés dans le fichier .gitconfig du répertoire de base. Grâce à des exemples pratiques, nous acquerrons une expérience pratique de la configuration de Git.

## Objectifs

À la fin de ce chapitre, vous devriez être en mesure de :

1. Modifier les paramètres de configuration globale de git
2. Créez des alias temporaires et permanents

## `.gitconfig` Paramètres

Si vous jetez un coup d'œil à git log, vous ne verrez peut-être aucune information sur l'auteur et l'e-mail. Pour changer cela (vous le voudrez absolument pour GitHub, assurez-vous donc que l'e-mail que vous spécifiez est le même que celui que vous avez utilisé pour vous inscrire à GitHub), tapez :

``` console
git config --global user.name "VOTRE NOM"
git config --global user.email "VOTRE EMAIL"
```

Si vous trouvez également ennuyeux d'appuyer sur q à chaque fois dans git log, vous pouvez également modifier cela

``` console
git config --global --replace-all core.pager chat
```

Ces paramètres de configuration globaux résident dans un fichier appelé .gitconfig qui se trouve généralement dans votre répertoire personnel. Essayez d'exécuter `cat ~/.gitconfig` pour voir tous vos paramètres !

## Alias Git

Plusieurs fois, vous pouvez vous retrouver à taper des commandes `git` encore et encore. Des choses comme `git add`, `git ini`t et `git status` sont des commandes que vous taperez plusieurs fois, il peut donc être utile de créer un raccourci, ou `alias`, que vous pouvez taper pour ne pas besoin de taper la commande entière. Pour créer un alias temporaire, qui durera tant que votre session de terminal est ouverte, vous pouvez taper :

``` console
git config alias.COMMANDE KEYBOARD_SHORTCUT
```

Donc, si nous voulions taper `git st` et que ce soit le même que `git status` nous taperions `git config alias.st status`. Maintenant, nous pouvons taper git st et il devrait afficher le même résultat que `git status`.

Si vous souhaitez que votre `alias` fasse partie de votre configuration globale, ajoutez la commande `--global` après `git config`. Par exemple, pour alias `git i` à `git init` globalement, vous devez taper `git config --global alias.i init`.

Lorsque vous êtes prêt, passez aux exercices de base de Git
