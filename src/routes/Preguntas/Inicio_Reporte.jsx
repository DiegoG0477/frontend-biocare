import React, { useState } from 'react';
import styles  from '../Preguntas/Inicio_Reporte.module.css';

export const Principal2 = () => {
    const [selected, setSelected] = useState(0);

    return (
        <>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <a href="#" className={styles.nav__brand}>Biocare</a>
                <ul className={styles.nav__menu}>
                    <li className={styles.nav__item}><a href="#" className={styles.nav__link}>General Reporte</a></li>
                    <li className={styles.nav__item}><a href="#" className={styles.nav__link}>Equipo Médico</a></li>
                    <li className='nav__item'><a href="#" className={styles.nav__link}>Ayuda</a></li>
                    <li className='nav__item'><a href="#" className={styles.nav__link}>Salir</a></li>
                </ul>
                <div className={styles.nav__toggler}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
            </nav>

            {/* Contenido principal */}
            <div className={styles.encabezado}>
                <h1 className={styles.title}>Selecciona el tipo de Solicitud</h1>

                <div className={styles.pregunta-container}>
                    <p className={styles.pregunta-texto}>¿Cuál es tu pregunta?</p>

                    <div className={styles.container-box}>
                        <div
                            className={`${styles.box} ${styles.box1} ${selected === 1 ? styles['box-selected'] : ''}`}
                            onClick={() => setSelected(1)}
                        >
                            <img src="/src/assets/Iconos/electrodo.png" alt="" />
                            <h2 className='h2-t'>Consumibles o Accesorios</h2>
                            <div className="container-p">
                                <p className="parrafo">
                                    Solicitar consumibles o accesorios para equipos médicos cuando se agoten o presenten desgaste.
                                </p>
                            </div>
                            <div className={`check ${selected === 1 ? 'check-selected' : ''}`}>
                                <i className={`fas fa-check ${selected === 1 ? 'icon-check' : ''}`}></i>
                            </div>
                        </div>

                        <div
                            className={`box box2 ${selected === 2 ? 'box-selected' : ''}`}
                            onClick={() => setSelected(2)}
                        >
                            <img src="/src/assets/Iconos/anestesia.png" alt="" />
                            <h2>Mantenimiento Correctivo</h2>
                            <div className="container-p">
                                <p className="parrafo">
                                    Deberás solicitar un mantenimiento cuando un equipo médico experimente un 
                                    fallo o mal funcionamiento.
                                </p>
                            </div>
                            <div className={`check ${selected === 2 ? 'check-selected' : ''}`}>
                                <i className={`fas fa-check ${selected === 2 ? 'icon-check' : ''}`}></i>
                            </div>
                        </div>

                        <div
                            className={`box box3 ${selected === 3 ? 'box-selected' : ''}`}
                            onClick={() => setSelected(3)}
                        >
                            <img src="/src/assets/Iconos/doctor.png" alt="" />
                            <h2>Capacitación</h2>
                            <div className="container-p">
                                <p className="parrafo">
                                    Deberás solicitar capacitación al introducir nuevos equipos médicos en su práctica,
                                    asegurando un manejo experto y seguro.
                                </p>
                            </div>
                            <div className={`check ${selected === 3 ? 'check-selected' : ''}`}>
                                <i className={`fas fa-check ${selected === 3 ? 'icon-check' : ''}`}></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botones de Continuar y SOS */}
                <button className="btn-continuar">Continuar</button>
                <button className="btn-sos">SOS</button>
            </div>
        </>
    );
};
