Documentation du Modèle `Area`
==============================

Le modèle `Area` est un schéma Mongoose destiné à représenter des zones géographiques ou des secteurs dans une application Node.js. Ce modèle inclut des informations de base sur chaque zone, telles que son nom et son prix.

Schéma Mongoose : `areaSchema`
------------------------------

### Champs du Schéma

Le schéma `areaSchema` comprend les champs suivants :

1.  **name**:

    *   **Type**: `String`
    *   **Description**: Le nom de la zone.
    *   **Requis**: Oui
    *   **Détails**: Ce champ est obligatoire et stocke le nom de la zone en tant que chaîne de caractères.
2.  **price**:

    *   **Type**: `Number`
    *   **Description**: Le prix associé à la zone.
    *   **Requis**: Oui
    *   **Détails**: Ce champ est obligatoire et représente le prix associé à la zone. Il doit être un nombre.