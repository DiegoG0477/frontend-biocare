import "../styles/emergencias.css"
import ingeniero from '../assets/Iconos/ingenieria.png';
import warn from '../assets/Iconos/advertencia.png';
export default function Emergencia() {
    return(
      <div className={'emergency-container'}>
          <div className={'e-header'}>
              <img className={'warning-icon'} src={warn} height={80} width={80} alt=""/>

              <h1 id={"title-emergency"}>
                  Emergencia
              </h1>
              <img className={'warning-icon'} src={warn} height={80} width={80} alt=""/>
          </div>
          <div className={'e-content'}>
              <p id={'text-emergency'}>¿Desea solicitar un ingeniero biomédico?</p>
              <img src={ingeniero} height={400} width={400} alt="ingeniero biomedico"/>
          </div>
          <div style={{display:'flex', justifyContent:'space-between'}}>
              <div id={'alert'}>
                  <h3 style={{color:'red', textAlign:'center', fontSize:'3rem'}}>
                      !Atencion!
                  </h3>
                  <p style={{paddingLeft:'1rem', paddingRight:'1rem', margin:'1rem', textAlign:'center'}}>Usar solo en situaciones criticas y urgentes</p>
              </div>
              <div style={{alignSelf:'center'}}>
                  <button id={'button-emergency'} onClick={()=>{}}>Solicitar</button>
              </div>

          </div>
      </div>
    )
}