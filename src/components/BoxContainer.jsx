export default function BoxContainer({selection, setSelection}){
    return (
        <div className="container-box">
            <div
                className={`box box1 ${selection === 1 ? 'box-selected' : ''}`}
                onClick={(e) => {
                    setSelection(1)
                }
                }
            >
                <img src="/src/assets/Iconos/electrodo.png" alt=""/>
                <h2 className='h2-t'>Consumibles o Accesorios</h2>
                <div className="container-p">
                    <p>
                        Solicitar consumibles o accesorios para equipos médicos cuando se agoten o
                        presenten desgaste.
                    </p>
                </div>
                <div className={`check ${selection === 1 ? 'check-selected' : ''}`}>
                    <i className={`fas fa-check ${selection === 1 ? 'icon-check' : ''}`}></i>
                </div>
            </div>

            <div
                className={`box box2 ${selection === 2 ? 'box-selected' : ''}`}
                onClick={() => {
                    setSelection(2);
                }}
            >
                <img src="/src/assets/Iconos/anestesia.png" alt=""/>
                <h2>Mantenimiento Correctivo</h2>
                <div className="container-p">
                    <p>
                        Deberás solicitar un mantenimiento cuando un equipo médico experimente un
                        fallo o mal funcionamiento.
                    </p>
                </div>
                <div className={`check ${selection === 2 ? 'check-selected' : ''}`}>
                    <i className={`fas fa-check ${selection === 2 ? 'icon-check' : ''}`}></i>
                </div>
            </div>
            <div
                className={`box box3 ${selection === 3 ? 'box-selected' : ''}`}
                onClick={() => {
                    setSelection(3)
                }}
            >
                <img src="/src/assets/Iconos/doctor.png" alt=""/>
                <h2>Capacitación</h2>
                <div className="container-p">
                    <p>
                        Solicitar capacitación al introducir nuevos equipos médicos en su práctica,
                        asegurando un manejo experto y seguro.
                    </p>
                </div>
                <div className={`check ${selection === 3 ? 'check-selected' : ''}`}>
                    <i className={`fas fa-check ${selection === 3 ? 'icon-check' : ''}`}></i>
                </div>
            </div>
        </div>
    )
}