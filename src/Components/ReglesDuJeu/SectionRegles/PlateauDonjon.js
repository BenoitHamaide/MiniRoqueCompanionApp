import { useState } from "react";
import donjon from "../../../assets/donjon.png"

const PlateauDonjon = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

    const handleImageClick = () => {
      setIsImageOpen(!isImageOpen);
    };
  return (
    <div>
      <p>Le Donjon que vous explorez est unique à chaque partie, mais sa structure demeure la même :</p>
    <p>Le Donjon comprend quatre Étages (_). Plus vous descendez profondément dans le Donjon, plus les défis auxquels vous ferez face seront grands. Le Donjon commence au premier étage et s’enfonce jusqu’au quatrième étage. Chaque Étage contient un nombre variable de Zones.</p>
    <p>Chaque tour, vous explorerez une Zone constituée de huit cartes Salle (=), puis vous vous enfoncerez plus profondément vers la prochaine Zone (voir Phase de Descente).</p>
    <div>
        {isImageOpen ? (
          <div
            className="conteneur-image-plein-ecran"
            onClick={handleImageClick} // Ajout du gestionnaire d'événements sur le conteneur d'image
          >
            <img src={donjon} alt="Mise en place" />
          </div>
        ) : (
          <button onClick={handleImageClick}>Voir le donjon</button>
        )}
      </div>
    </div>
  )
}
export default PlateauDonjon