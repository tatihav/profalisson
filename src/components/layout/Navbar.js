import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from './Navbar.module.css';
import fotoAlisson from './../../img/fotoalisson.jpg'; // ajuste a extensão conforme necessário

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.profile}>
                    <Link to="/">
                        <img src={fotoAlisson} alt="Prof. Dr. Alisson Barbosa de Sousa" className={styles.foto} />
                    </Link>
                    <div className={styles.info}>
                        <h1 className={styles.title}>Prof. Dr. Alisson Barbosa de Sousa</h1>
                        <h2 className={styles.subtitle}>Universidade Federal do Ceará (UFC)</h2>
                        <a 
                            href="http://lattes.cnpq.br/6255476538629622" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.lattesLink}
                        >
                            Currículo Lattes
                        </a>
                        <p className={styles.emailLink}>E-mail: <a href="mailto:alisson@ufc.br">alisson@ufc.br</a></p>
                    </div>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Início</Link></li>
                    <li className={styles.item}><Link to="/disciplina1">Disciplina1</Link></li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;
