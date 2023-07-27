import ButtonRules from '../ButtonRules/ButtonRules';
import ButtonSheet from '../ButtonSheet/ButtonSheet';
import Description from '../Description/Description';
import Header from '../Header/Header';
import './Home.scss';

function Home() {
    return (
        <div className='home'>
            <Header />
            <ButtonRules />
            <ButtonSheet />
            <Description />
        </div>
    );
}

export default Home;