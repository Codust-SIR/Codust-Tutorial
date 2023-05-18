---
sidebar_position: 6
---
# Travailler avec des télécommandes

## Objectifs

À la fin de ce chapitre, vous devriez être en mesure de :

1. Créez un référentiel distant sur GitHub
2. Créez une télécommande dans le terminal
3. Poussez le code d'un référentiel local vers un référentiel distant

## Création d'un référentiel distant

Une fois que vous avez un compte GitHub, rendez-vous sur <https://github.com/new> et créez un référentiel. Dans cet exemple, nous allons créer un référentiel appelé `first_repo`. Ne vous souciez pas de la description ou de la case à cocher pour initialiser le référentiel avec un README.

Après avoir créé le dépôt, GitHub vous donnera quelques instructions pour commencer. Les instructions devraient ressembler à ceci (l'URL vers la fin dépendra de votre nom d'utilisateur GitHub) :

``` console
echo "# first_repo" >> LISEZMOI.md
git init
git add LISEZMOI.md
git commit -m "premier commit"
git remote add origin `<https://github.com/elie/first_repo.git>`
git push -u maître d'origine
```

Passons en revue ces commandes une par une.

1. echo "`first_repo`" >> README.md - nous passons du démarquage dans un fichier appelé README.md.
2. git init - assurez-vous que nous avons un référentiel
3. git add README.md – ajoutons le fichier README.md (nous pouvons aussi faire git add . ou git add -A ici)
4. git commit -m "first commit" - ajoute un commit avec le message "first commit"
5. `git remote add origin <https://github.com/elie/first_repo.git>` - c'est là que les choses deviennent amusantes. Cette commande indique à notre référentiel local un référentiel distant situé quelque part. L'emplacement de notre référentiel distant est `<https://github.com/elie/first_repo.git>`. Maintenant, si nous voulons envoyer notre code à GitHub, nous pouvons simplement taper `git push <https://github.com/elie/first_repo.git> master` - mais taper toute cette URL est assez pénible. Au lieu de cela, il serait préférable que nous puissions donner à l'URL un surnom (également appelé alias) - c'est ce qu'est "l'origine" ! En configurant cet alias, nous pouvons simplement taper git push origin master pour envoyer le code de notre branche principale à ce référentiel distant. Donc, pour revenir en arrière, git remote add est la façon dont nous informons notre référentiel local d'un référentiel distant (que nous pouvons envoyer /récupérer le code de). origin est un surnom pour l'emplacement réel du référentiel (sur `<https://github.com/elie/first_repo.git)`. Pour> voir vos télécommandes localement, vous pouvez taper `git remote -v`. Si vous avez besoin de supprimer une télécommande, vous pouvez utiliser `git remote rm NAME_OF_REMOTE`

6. `git push -u origin master` - Nous pouvons maintenant envoyer notre code d'un référentiel local à notre référentiel distant (que nous avons associé à `origin` dans la commande précédente). Le drapeau `-u` nous permettra à l'avenir de n'avoir qu'à taper `git push` au lieu de `git push origin master`.

Donc, pour revoir cette commande - `git push` est la façon dont nous envoyons du code d'un référentiel local à un référentiel distant. `origin` est l'endroit où nous l'envoyons (en particulier à `origin/master` qui est la branche principale de notre référentiel distant). `master` est la branche locale à partir de laquelle nous envoyons notre code.

## Pousser le code jusqu'à GitHub

Maintenant, lorsque vous tapez git push, vous serez invité à entrer votre nom d'utilisateur et votre mot de passe pour GitHub. Bien que ce soit bien une ou deux fois, cela devient assez gênant si vous poussez ou tirez (récupérez du code) fréquemment. Ce serait bien si nous pouvions établir une certaine confiance entre notre ordinateur et GitHub afin que lorsque nous exécutons git push ou git pull, GitHub n'ait pas besoin de nous authentifier. Pour ce faire, nous allons créer une clé SSH.

Lorsque vous êtes prêt, passez aux clés SSH
