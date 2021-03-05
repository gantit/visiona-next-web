import React from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'
import { Trans } from 'react-i18next'

import './HowWork.scss'

const styles = {
  box: {
    padding: '0 4em 4em 4em',
    margin: '0 auto'
  },
  title: {
    fontSize: '3em',
    textAlign: 'center'
  },
  list: {
    paddingTop: '.5em'
  },
  container: {
    paddingTop: '4em'
  },
  legalText: {
    margin: '0 auto',
    paddingBottom: '4em'
  },
  titleSection: {
    fontSize: '1.2em',
    padding: '0.5em 0',
    margin: 0
  }
}

const Privacity = () => (
  <Segment vertical className="privacity" style={styles.container}>
    <Grid container stackable verticalAlign="middle" textAlign="justified">
      <Grid.Row columns="equal">
        <Grid.Column width={16} style={styles.legalText}>
          <Trans i18nKey="privacityLegal">
            <Header as="h3" style={styles.title}>
              POLÍTICA DE PRIVACIDAD
            </Header>
            <p>
              A través de la presente política de privacidad
              <strong>VISIONA INTELLIGENCE SECURITY, S.L.U.</strong> desea
              informar a todas las personas que naveguen y accedan al sitio web
              <a href="http://www.visiona.cat/">www.visiona.cat</a> sobre los
              tratamientos de datos personales realizados.
            </p>
            <p>
              El acceso al sitio web no requiere un registro previo. Antes del
              envío de cualquier solicitud de información a través del
              formulario de contacto de esta página web,
              <span className="underline">
                el usuario debe aceptar la política de privacidad
              </span>
              , con el fin de prestar el consentimiento expreso e informado para
              el tratamiento de los datos con las finalidades indicadas.
            </p>
            <p>
              <strong className="blue">
                VISIONA INTELLIGENCE SECURITY, S.L.U.
              </strong>
              , de conformidad con el Reglamento (UE) 2016/679, de 27 de abril
              de 2016, relativo a la protección de las personas físicas en lo
              que respecta al tratamiento de datos personales y a la libre
              circulación de estos datos, así como con la Ley Orgánica 3/2018,
              de 5 de diciembre, de Protección de Datos Personales y garantía de
              los derechos digitales, en calidad de Responsable del Tratamiento
              de los datos personales proporcionados, le facilita la siguiente
              información:
            </p>
            <h3 className="underline">
              <strong>Responsable del Tratamiento:</strong>
            </h3>
            <ul>
              <li>
                <strong>Responsable :</strong>
                <strong className="blue">
                  VISIONA INTELLIGENCE SECURITY, S.L.U.
                </strong>
                – en adelante <strong className="blue">VISIONA</strong>
              </li>
              <li>
                <strong>NIF :</strong>
                <strong className="blue">B67067884</strong>
              </li>
              <li>
                <strong>Domicilio social :</strong>
                <strong className="blue">
                  Plaça Can Gassol 3 - 08301, Mataró (Barcelona)
                </strong>
              </li>
              <li>
                <strong>Correo Electrónico :</strong>
                <strong className="blue">
                  <a href="mailto:info@visiona.cat">info@visiona.cat</a>
                </strong>
              </li>
            </ul>
            <br />
            <p>
              <strong className="yellow">Finalidad del tratamiento:</strong>
              Tratamos los datos y la información que nos facilitan las personas
              interesadas con la finalidad de:
            </p>
            <ol>
              <li>
                <p>
                  Gestionar el uso de las funcionalidades puestas a disposición
                  a través del Sitio Web, entre ellas, la respuesta a
                  solicitudes y/o consultas realizadas, así como la preparación
                  de presupuestos.
                </p>
                <p>
                  Los datos tratados con esta finalidad se conservarán mientras
                  se mantenga la relación contractual y/o negocial entre el
                  Usuario y VISIONA. Para el caso de que las solicitudes
                  efectuadas por un usuario no mantengan una relación
                  contractual, los datos se conservarán hasta haber resuelto
                  dicha solicitud.
                </p>
              </li>
              <li>
                <p>
                  Mantener informados a los Usuarios de productos y/o servicios
                  de VISIONA, a través de correo electrónico o medios de
                  comunicación electrónica equivalentes, siempre que el Usuario
                  haya prestado su consentimiento marcando la casilla
                  correspondiente.
                </p>
              </li>
            </ol>
            <br />
            <p>
              <strong className="yellow">Legitimación:</strong> El tratamiento
              de dichos datos está legitimado por la ejecución de las
              obligaciones contractuales y/o negociales.
            </p>
            <p>
              <strong className="yellow">
                Criterios de conservación de los datos:
              </strong>
              Los datos no se conservarán más tiempo del necesario para los
              cuales han sido recabados, excepto que exista una obligación
              legal.
            </p>
            <p>
              <strong className="yellow">Comunicación de los datos:</strong> No
              se comunicarán a otros terceros, excepto obligación legal o con el
              consentimiento expreso del interesado.
            </p>
            <p>
              <strong className="yellow">
                Transferencias internacionales de datos:
              </strong>
              No se realizan Transferencias Internacionales de datos a terceros
              países fuera de la Unión Europea.
            </p>
            <p>
              <strong className="yellow">
                Derechos que asisten al Interesado:
              </strong>
              El interesado tiene derecho a retirar el consentimiento en
              cualquier momento. Asimismo, le informamos que podrá ejercer sus
              derechos de acceso, rectificación y supresión (Derecho al olvido),
              limitación de los datos, portabilidad de los datos y oposición,
              enviando un escrito a Plaça Can Gassol 3 - 08301, Mataró
              (Barcelona), o correo electrónico
              <a href="mailto:info@visiona.cat">info@visiona.cat</a>.
            </p>
            <p>
              Asimismo, se informa al interesado que podrá revocar el
              consentimiento del envío de comunicaciones comerciales enviando un
              correo electrónico a
              <a href="mailto:info@visiona.cat">info@visiona.cat</a>.
            </p>
            <p>
              La persona interesada puede presentar una reclamación ante la
              autoridad de control en materia de protección de datos competente,
              que actualmente es la Agencia Española de Protección de Datos
              (AEPD), a través de su sede electrónica:
              <a href="http://www.sedeagpd.gob.es/sede-electronica-web">
                www.sedeagpd.gob.es/sede-electronica-web
              </a>
              , o enviando un escrito a C/ Jorge Juan nº6 – 28001 MADRID.
            </p>
            <p>
              <strong className="blue">
                ¿Es obligatorio proporcionar toda la información solicitada en
                el apartado de contacto?
              </strong>
            </p>
            <p>
              En cuanto a los formularios del Sitio Web, el Usuario tiene que
              cumplimentar los marcados como &quot;requerido&quot;. No completar
              los datos personales requeridos o hacerlo parcialmente puede
              suponer que VISIONA no pueda atender sus solicitudes y, en
              consecuencia, VISIONA quedará exonerada de toda responsabilidad
              por la no prestación o la prestación incompleta de los servicios
              solicitados.
            </p>
            <p>
              Los datos personales que el Usuario facilita a VISIONA tienen que
              ser actuales para que la información de los registros esté
              actualizada y sin errores. El Usuario responderá de la veracidad
              de los datos facilitados.
            </p>
            <p>
              <strong className="blue">
                ¿Qué medidas de seguridad tiene implantada la empresa?
              </strong>
            </p>
            <p>
              VISIONA informa que el tratamiento que realiza de datos personales
              se realiza en todo momento de conformidad con la normativa
              aplicable en materia de protección de datos y de los servicios de
              la sociedad de la información.
            </p>
            <p>
              VISIONA tiene implantadas las medidas de seguridad de índole
              técnica y organizativas necesarias que garanticen la seguridad de
              los datos de carácter personal del Usuario y eviten su alteración,
              pérdida, tratamiento y/o acceso no autorizado de acuerdo con el
              estado de la tecnología, la naturaleza de los datos almacenados y
              los riesgos a los que están expuestos, ya provengan de la acción
              humana o del medio físico o natural, en conformidad con el que
              prevé la normativa vigente.
            </p>
          </Trans>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Privacity
