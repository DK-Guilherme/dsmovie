import { ReactComponent as GituhubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className='dsmovie-nav-content'>
                    <h1>DKMovie</h1>
                    <a href="https://github.com/DK-Guilherme">
                        <div className='dsmovie-contact-container'>
                            <GituhubIcon />
                            <p className='dsmovie-contact-link'>/DK-Guilherme</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;