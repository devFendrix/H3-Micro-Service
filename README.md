# H3-Micro-Service

## Description du Projet

Pour notre projet de deuxième année du module Microservices, nous avons entrepris de développer une API en backend utilisant une architecture microservices. 
L'objectif de ce projet est de fournir un tableau de bord interactif pour les utilisateurs, tout en respectant les normes techniques spécifiées permettant de configurer le prix de zones.

## Architecture Prévue

Notre architecture microservices est composée des éléments suivants :

1. **Backend :** Notre API backend est développée avec NodeJs pour créer des microservices qui gèrent la récupération et la mise à jour des données sur des zones avec leurs prix.

2. **Conteneurs Docker :** Notre projet comprend au moins deux fichiers Dockerfile, l'un pour le frontend et l'autre pour le backend. Nous utilisons Docker Compose pour orchestrer ces conteneurs.

3. **Déploiement et Production :** Nous utilisons Nginx comme serveur proxy inversé pour gérer les requêtes HTTP. SSL et HTTPS sont configurés pour garantir la sécurité des données.

## Documentation

- Notre code est bien documenté, et chaque endpoint de l'API et type de requête est expliqué de manière concise.
- Des commentaires sont présents dans tous nos fichiers de code pour faciliter la compréhension.
- Notre README.md à la racine du projet contient des instructions claires pour construire et exécuter le projet, ainsi qu'une démo en ligne sans erreurs.

## Launch

To deploy this project run

```bash
  docker-compose up -d
```
## Schéma

![Schema](https://image.noelshack.com/fichiers/2023/42/7/1697982478-project-micro.png)


## Screenshots

1. **Get all Areas :**

![App Screenshot](https://image.noelshack.com/fichiers/2023/42/7/1697982790-micro-create-areas.png)

2. **Create an area :**

![App Screenshot](https://image.noelshack.com/fichiers/2023/42/7/1697982790-micro-get-areas.png)
