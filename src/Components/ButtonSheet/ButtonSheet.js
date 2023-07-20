import { Link } from 'react-router-dom';
import './ButtonSheet.scss';

function ButtonSheet() {
    return (
        <div>
            <Link to="/personnage">
                <button>Accéder au tableau de personnage</button>
            </Link>
        </div>
    );
}

export default ButtonSheet;