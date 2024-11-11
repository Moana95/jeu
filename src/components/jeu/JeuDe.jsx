import React, { useState } from 'react';
import '../../assets/JeuDe.css'; 

const JeuDe = (props) => {
    const [face, setFace] = useState(null);
    const [compteur, setCompteur] = useState(0);
    const [fin, setFin] = useState(false);
    const [start, setStart] = useState(false);

    const jouer = () => {
        const valeur = Math.floor(Math.random() * 6) + 1;
        setFace(valeur);
        setCompteur((prevCompteur) => prevCompteur + 1);
        setFin(valeur === parseInt(props.cache));
        setStart(true);
    };

    const getImage = () => {
        return face ? `../../../public/images/face${face}.png` : "../../../public/images/Dé.PNG";
    };

    const initialiser = () => {
        setFace(null);
        setCompteur(0);
        setFin(false);
        setStart(false);
        props.resetCache();
    };

    const isCacheValid = props.cache && props.cache >= 1 && props.cache <= 6;

    return (
        <div className="jeu-container">
            <h1 className="jeu-title">Jeu de Dé...</h1>
            {!start && (
                <input
                    type="number"
                    placeholder="Entrez la face cachée entre 1 et 6"
                    value={props.cache}
                    onChange={props.handleCache}
                    min={1}
                    max={6}
                    className="jeu-input"
                />
            )}
            {start && (
                <>
                    <img src={getImage()} className="jeu-image" alt="Dice" />
                    <h2 className="jeu-face">Face: {face || "..."}</h2>
                    <h2 className="jeu-face">Face actuelle: {props.cache}</h2>
                    <h2 className="jeu-compteur">Nombre d'essais: {compteur}</h2>
                </>
            )}

            {!fin ? (
                <button className="jeu-button" onClick={jouer} disabled={!isCacheValid}>
                    {compteur === 0 ? "Jouer" : "Rôler"}
                </button>
            ) : (
                <>
                    <p className="jeu-win-message">Bravo! Vous avez trouvé la face cachée...</p>
                    <button className="jeu-button" onClick={initialiser}>Initialiser</button>
                </>
            )}
        </div>
    );
};

export default JeuDe;
