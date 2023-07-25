import { IconButton } from '@mui/material';
import './ButtonHome.scss'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

function ButtonHome() {
    return (
        <div className='homeButton'>
            <Link to="/">
            <IconButton > 
            <HomeIcon fontSize='small'/>
            </IconButton >
            </Link>
        </div>
    );
}

export default ButtonHome;