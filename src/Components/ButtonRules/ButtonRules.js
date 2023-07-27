import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function ButtonRules() {
    return (
        <div>
            <Link to="/regles">
                <Button variant="contained">Règles du jeu</Button>
            </Link>
        </div>
    );
}

export default ButtonRules;