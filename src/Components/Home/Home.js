import ButtonSheet from '../ButtonSheet/ButtonSheet';
import Description from '../Description/Description';
import Header from '../Header/Header';
import './Home.scss';

function Home() {
    return (
        <div className='home'>
            <Header />
            <ButtonSheet />
            <Description />
        </div>
    );
}

export default Home;