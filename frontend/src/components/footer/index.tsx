import { ReactComponent as InstaIcon } from 'assets/img/instagram.svg';
import './styles.css';

function Footer() {
    return (
        <footer className="footer mt-auto py-3 ">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://github.com/StringRafa" target="_blank" rel="noreferrer">Rafael José de Souza</a></p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
                <a href="https://www.instagram.com/dev.rafa.souza/">

                    <InstaIcon />
                    <p className='dsmovie-contact-link'>dev.rafa.souza</p>

                </a>
            </div>
        </footer>
    );
}

export default Footer;