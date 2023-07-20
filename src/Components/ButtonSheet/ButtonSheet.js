import { Link } from 'react-router-dom';
import './ButtonSheet.scss';
import { Button } from '@mui/material';

function ButtonSheet() {
    return (
        <div>
            <Link to="/personnage">
                <Button variant="contained">Accéder au tableau de personnage</Button>
            </Link>
        </div>
    );
}

export default ButtonSheet;