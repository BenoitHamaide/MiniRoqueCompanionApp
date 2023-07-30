import { useState } from "react";
import personnage from "../../../assets/personnage.png"

const PlateauPersonnage = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

    const handleImageClick = () => {
      setIsImageOpen(!isImageOpen);
    };
  return (
    <div>
      <p>Votre personnage possède plusieurs caractéristiques. Elles ne peuvent
jamais être plus élevées que les valeurs maximales indiquées sur
votre plateau.</p>
    <p>XP (points d’expérience) : gagner des XP augmente le niveau
de votre personnage et lui permet ainsi de débloquer des dés
Personnage supplémentaires.</p>
    <p>Armure : chaque point d’Armure permet de réduire de 1 les
dégâts d’une attaque ennemie. </p>
<p>PV (points de vie) : ils représentent la vie de votre personnage.
Si vos PV tombent à zéro, vous perdez la partie</p>
<p>Rations : chaque fois que votre personnage termine d’explorer une
Zone, il doit se nourrir. Si vous êtes à court de Rations, la faim
vous fait perdre 3 PV. </p>
<p>Pièces d’or : utilisez-les pour faire des achats chez les Marchands et
effectuer des offrandes au Sanctuaire.</p>
<p>Potions : votre personnage peut transporter un maximum de deux
Potions. Ces potions possèdent divers effets dont vous pourrez
vous servir durant les combats ou l’exploration (voir Potions).</p>
<p>Si vous devez perdre une ressource (Armure, Pièces d’or, etc.) que
vous ne possédez pas, perdez 1 PV par ressource manquante.</p>
    <div>
        {isImageOpen ? (
          <div
            className="conteneur-image-plein-ecran"
            onClick={handleImageClick} // Ajout du gestionnaire d'événements sur le conteneur d'image
          >
            <img src={personnage} alt="plateau du personnage" />
          </div>
        ) : (
          <button onClick={handleImageClick}>Voir le plateau personnage</button>
        )}
      </div>
    </div>
  )
}
export default PlateauPersonnage