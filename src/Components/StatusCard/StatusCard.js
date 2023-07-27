import "./StatusCard.scss"

const StatusCard = ({ isCursed, isPoisoned, onCursedChange, onPoisonedChange }) => {
  return (
    <div className="status-card">
      <h3>Status</h3>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isCursed}
            onChange={onCursedChange}
          />
          Maudit
        </label>
        <p>
          {isCursed &&
            "Soustrayez 1 de chacun de vos dés Personnages (y compris ceux que vous relancez)."}
        </p>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isPoisoned}
            onChange={onPoisonedChange}
          />
          Empoisonné
        </label>
        <p>
          {isPoisoned &&
            "Si le symbole poison apparaît: vous perdez immédiatement 1PV."}
        </p>
      </div>
    </div>
  );
};

export default StatusCard;
