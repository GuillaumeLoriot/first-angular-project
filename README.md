## Cmmantaires

dans le projet, on retrouve plusieurs composants gérer avec un router. pour l'affichage des card j'ai fais un composant announcement item que j'importe dans home.component et les donnée de cette card viennes du composant home via un @imput afin d'afficher toutes les annonces.Dans la navbar, annonce redirige sur la même page que home pour le moment.
Sur chaque card affiché j'ai mis un lien vers le composant qui affiche le détail d'une announce (announcement-detail.component) et sur ce détail, j'ai fais un pipe personalisé afin d'ajouter les icones sur les équipements.

Sur les card j'ai ajouter du syle dynamique en fonction du prix (le bouton aparait en vert si le prix est inférieur à 50)

j'ai fais un système de filtre dynamique pour une barre de recherche. j'ai découper ce système avec une interface spécifique pour les filtres de recherche, une méthode ajouter dans mon announcement.service et composant searh.component dans lequel on trouve mon formulaire avec sa validation. J'ai ensuite utilisé @output pour transmettre les donnée à son parent home afin de les affichées dedans via le même mécanisme de card importé de announcement-item.
Par rapport à l'interface de filtre, je pense que j'aurais pu utilisé mon interface announcement en Partial déja faite mais je me suis dis qu'avec un interface spécifique pour les filtres on voyait mieux les filtres disponibles. 

j'ai fais le formulaire de login avec ses erreurs ainsi que la logique de conexion via le jwt token en local storage et ça me redirige vers une mini page de profil ou je récupère les info du user connecté.
j'ai fais un mécanisme de loading avec un gif pendant le chargement lors des requètes API

pour finir, le système de gestion des erreur lors du chargement n'est pas fini, et le loading n'est pas implémenté partout. il fonctionne bien dans home mais demanderai à être fini pour trié les différentes erreurs si api ok mais pas d'annonce ou si erreur api, etc...

je pense avoir listé l'essentiel, désolé si il n'y a pas beacoup de commentaire dans le code, j'ai pris la mauvaise habitude de ne pas en mettre beaucoup..

Bonne lecture :)


