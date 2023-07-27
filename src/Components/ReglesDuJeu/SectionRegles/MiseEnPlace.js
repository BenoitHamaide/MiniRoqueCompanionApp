import React, { useState } from "react";
import miseEnPlace from "../../../assets/miseEnPlace.png"
import "./MiseEnPlace.scss"

const MiseEnPlace = () => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    const handleImageClick = () => {
      setIsImageOpen(!isImageOpen);
    };
  return (
    <div>

      <p>
        Pour vous préparer à affronter le donjon et chercher le Sang d’Og, suivez
        ces étapes :
      </p>
      <ol>
        <li>Choisissez une carte Personnage et placez-la face visible, à gauche de votre plateau Personnage.</li>
        <li>
        Ajustez vos valeurs de départ en fonction des caractéristiques indiquées en haut à droite de votre carte Personnage. Lorsque la valeur d’une caractéristique n’est pas indiquée, mettez-la à 0. Vous suivrez l’évolution de vos caractéristiques avec les cubes en bois.  
        </li>
        <p>Si vous voulez rendre le jeu plus difficile, nous vous suggérons ces modes de difficulté. </p>
          <ul>
          <li>Difficile : commencez avec -1 Ration et -1 PV </li>
          <li>Extrême : commencez avec -1 Ration et -2 PV</li>
          <li>Roguelike : commencez avec -1 Ration, -2 PV et -3 Pièces d’or.</li>
            </ul>
        <li>
        Placez la carte de référence Fantôme/Récompenses à droite de votre plateau Personnage.
        </li>
        <li>
        Prenez un dé Donjon et un dé Personnage et gardez-les près de vous. Vous commencez la partie avec un seul dé Personnage qui vous servira à résoudre les rencontres. Plus vous gagnerez d’expérience, plus vous obtiendrez de dés Personnage (voir Expérience et Niveaux). Conservez les autres dés à proximité.
        </li>
        <li>
        Placez le cube gris foncé sur la première Zone du plateau Donjon, marquée « 1 ». C’est le cube d’aventurier et il représente la position de votre personnage dans le Donjon. Pour suivre les PV des Ennemis, placez un cube rouge sur l’icône de crâne.
        </li>
        <li>
        Mettez en place la Zone : mélangez toutes les cartes Salle. Disposez ensuite les huit premières cartes, face cachée, comme indiqué sur l’image.
        </li>
        <li>
        Les cartes restantes sont mises à part, face cachée.
        </li>
        <li>
        Placez la carte Gardien Les Restes d’Og, face cachée, dans le coin inférieur droit de la Zone. Mélangez les cartes Gardien restantes et placez-en trois, face cachée, par-dessus Les Restes d’Og.
        </li>
        <li>
        Pour terminer, dévoilez la carte dans le coin supérieur gauche de la Zone et placez-y votre jeton Personnage (ou le meeple de votre choix). Il s’agit de l’Entrée.
        </li>
      </ol>
      <div>
        {isImageOpen ? (
          <div
            className="conteneur-image-plein-ecran"
            onClick={handleImageClick} // Ajout du gestionnaire d'événements sur le conteneur d'image
          >
            <img src={miseEnPlace} alt="Mise en place" />
          </div>
        ) : (
          <button onClick={handleImageClick}>Voir la mise en place</button>
        )}
      </div>
    </div>
  );
};

export default MiseEnPlace;
