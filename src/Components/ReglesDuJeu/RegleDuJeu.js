import React, { useState } from "react";
import MiseEnPlace from "./SectionRegles/MiseEnPlace";
import PlateauDonjon from "./SectionRegles/PlateauDonjon";
import ButtonHome from "../ButtonHome/ButtonHome";
import SectionRegles from "./SectionRegles/SectionRegles";
import PlateauPersonnage from "./SectionRegles/PlateauPersonnage";

const ReglesDuJeu = () => {
  const [sectionActive, setSectionActive] = useState(0);

  const sectionsRegles = [
    { titre: "Mise en place", contenu: <MiseEnPlace /> },
    { titre: "Plateau Donjon", contenu: <PlateauDonjon /> },
    { titre: "Plateau Personnage", contenu: <PlateauPersonnage /> },
    // Add other sections here
  ];

  const handleSectionClick = (index) => {
    setSectionActive(index);
  };

  const sectionCourante =
    sectionsRegles.length > 0 ? sectionsRegles[sectionActive] : null;

  return (
    <div>
      <ButtonHome />
      <h1>Règles du jeu</h1>
      <div className="onglets">
        {sectionsRegles.map((section, index) => (
          <button
            key={index}
            onClick={() => handleSectionClick(index)}
            className={sectionActive === index ? "actif" : ""}
          >
            {section.titre}
          </button>
        ))}
      </div>
      <button onClick={() => window.scrollTo(0, document.body.scrollHeight)}>En bas</button>
      <div className="contenu-section">
        {sectionCourante ? (
          <SectionRegles
            titre={sectionCourante.titre}
            contenu={sectionCourante.contenu}
          />
        ) : (
          <p>Aucun résultat trouvé.</p>
        )}
      </div>
      <button onClick={() => window.scrollTo(0, 0)}>En haut</button>
    </div>
  );
};

export default ReglesDuJeu;
