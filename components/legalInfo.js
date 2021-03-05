import { Grid, Segment, Header } from 'semantic-ui-react'
import { Trans } from 'react-i18next'

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

const Legal = () => (
  <Segment vertical className="legal" style={styles.container}>
    <Grid container stackable verticalAlign="middle" textAlign="justified">
      <Grid.Row columns="equal">
        <Grid.Column width={16} style={styles.legalText}>
          <Trans i18nKey="noteLegal">
            <Header as="h3" style={styles.title}> AVISO LEGAL </Header>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio electrónico, se informa al Usuario que el titular de la página web
              <a href="http://www.visiona.cat/">www.visiona.cat</a>
              es de la sociedad VISIONA INTELLIGENCE SECURITY, S.L.U. y sus datos de identificación son las siguientes:
            </p>
            <ul>
              <li>
                <strong>Responsable :</strong>
                <strong className="blue">VISIONA INTELLIGENCE SECURITY, S.L.U.</strong>
                – en adelante
                <strong className="blue">VISIONA</strong>
              </li>
              <li>
                <strong>NIF :</strong>
                <strong className="blue">B67067884</strong>
              </li>
              <li>
                <strong>Domicilio social :</strong>
                <strong className="blue">Plaça Can Gassol 3 - 08301, Mataró (Barcelona)</strong>
              </li>
              <li>
                <strong>Correo Electrónico :</strong>
                <strong className="blue"><a href="mailto:info@visiona.cat">info@visiona.cat</a></strong>
              </li>
              <li>
                <strong>Datos del registro </strong> : la sociedad está inscrita en el Registro Mercantil de
                <strong> Registro Mercantil de Barcelona</strong> , en el Tomo
                <strong> 46059</strong> , folio
                <strong> 122 </strong> y hoja número
                <strong> B-508218 </strong>
              </li>
            </ul>
            <br />
            <p><strong>Acceder a la página web</strong></p>
            <p>El aviso legal regula el acceso y uso de los Usuarios a la página web y tiene por objeto dar a conocer los servicios de la entidad y permitir el acceso general de todos los usuarios de Internet.</p>
            <p>El acceso y/o uso de la Web atribuye a quien lo realiza la condición de Usuario y la aceptación, sin reservas de ninguna clase, de todas y cada una de las presentes condiciones generales, así como de aquellas otras particulares que, si procede, rijan la utilización del Portal o de los servicios vinculados al mismo.</p>
            <p>El usuario tiene que leer atentamente el Aviso Legal y las Políticas de Privacidad y de Cookies cuando se proponga utilizar la Página Web, puesto que VISIONA, se reserva la facultad de realizar, en cualquier momento y sin necesidad de ningún preaviso, cualquier modificación o actualización de los contenidos y servicios, de las presentes disposiciones de acceso y uso y, en general, de cuántos elementos integren el diseño y configuración de su Web. Si no acepta las condiciones de acceso y uso, le rogamos se abstenga de utilizar el Web y su contenido.</p>
            <p><strong>Utilización de la página web</strong></p>
            <p>El Usuario se compromete a hacer un uso diligente de la Página Web, así como de la información relativa a sus servicios y actividades, con total sujeción tanto a la normativa aplicable, así como con la moral y las buenas costumbres generalmente aceptadas y el orden público, las condiciones de acceso y uso y cualesquiera otras condiciones establecidas a la Página Web.</p>
            <p>Además, se compromete a abstenerse de utilizar cualquier de los contenidos con finalidades o efectos ilícitos, prohibidos en el presente texto, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los contenidos, otros Usuarios o de cualquier usuario de Internet (hardware y software).</p>
            <p><strong>Funcionamiento de la página web</strong></p>
            <p>En caso de incumplimiento de las condiciones del Aviso Legal, o las Políticas de Privacidad y Cookies, VISIONA, se reserva el derecho a limitar, suspender y/o excluir el acceso en su Página Web, adoptando cualquier medida técnica necesaria a su respeto.VISIONA, hará lo posible para mantener la página Web en buen funcionamiento, evitando errores, o bien reparándolos y manteniendo los contenidos actualizados. Ahora bien, VISIONA, no garantiza la disponibilidad y continuidad en el acceso en la Página Web ni la inexistencia de errores en el contenido.</p>
            <p><strong>Responsabilidad</strong></p>
            <p>El Usuario es el único responsable del uso que se pueda hacer de cualquier información o mecanismo de la Página Web.</p>
            <p>VISIONA, no se hará responsable de ningún daño en el hardware y/o software del Usuario que se derive del acceso y uso de la Página Web. Así mismo, tampoco se responsabilizará de estos daños y/o perjuicios que se puedan ocasionar por el acceso y/o uso de la información de la Página Web, y en concreto de los que se puedan producir en sistemas informáticos o los provocados por virus /o ataques informáticos, caídas, interrupciones ausencia o defecto en las comunicaciones y/o Internet.</p>
            <p>El Usuario será responsable de los daños y/o perjuicios que VISIONA, pueda sufrir como consecuencia del incumplimiento de cualquier de las obligaciones a las que queda sometido a través del presente Aviso Legal, la normativa aplicable y Política de Privacidad y de Cookies.</p>
            <p><strong>Política en materia de &quot;Links&quot; (Web enlazante y enlazada)</strong></p>
            <p>a) Web enlazante:</p>
            <p>Los terceros que tengan la intención de incluir en una página web un enlace de la presente página tendrá que cumplir con la legislación vigente y no podrán alojar contenidos que sean inapropiados, ilícitos, pornográficos, violentos, etc.</p>
            <p>En ningún caso VISIONA, se hace responsable del contenido de la Página Web, ni promueve, garantiza, supervisa ni recomienda los contenidos de esta.</p>
            <p>Si la Web enlazante incumple alguno de los aspectos anteriores estará obligado a suprimir el enlace de manera inmediata.</p>
            <p>b) Web enlazada:</p>
            <p>En esta Página Web se pueden incluir enlaces de páginas web de terceros que permitan al Usuario acceder. No obstante, VISIONA, no se hace responsable del contenido de estas páginas web enlazadas, sino que será el Usuario el encargado de aceptar y comprobar los accesos cada vez que acceda.</p>
            <p>Tales enlaces o menciones tienen una finalidad que no implican el apoyo, la aprobación, comercialización o relación alguna entre la página y las personas o entidades titulares de los lugares donde se encuentren.</p>
            <p><strong>Propiedad Intelectual e Industrial sobre los contenidos</strong></p>
            <p>VISIONA, o sus licenciantes, son titulares de todos los derechos de propiedad intelectual sobre los Contenidos de la Página Web, entendiendo como tal todos los diseños, bases de datos, programas de ordenadores subyacentes (código fuente, incluido), así como los diferentes elementos que integran la Página Web (textos, gráficos, fotografías, vídeos, colores, etc.), estructura, orden, etc. En relación a las marcas y nombres comerciales (&quot;signos distintivos&quot;) son titularidad de VISIONA, o los licenciantes.</p>
            <p>El uso de la Página Web por parte del Usuario no supone la cesión de ningún derecho de propiedad intelectual ni industrial. El Usuario tiene totalmente prohibido reproducir, copiar, distribuir, poner a disposición o de cualquier otra forma de comunicar públicamente, transformar o modificar los Contenidos o los Signos distintivos, salvo que se cuente con la autorización del titular de los correspondientes derechos o esto resulte legalmente permitido.</p>
            <p><strong>Publicidad</strong></p>
            <p>En la página Web podrán alojarse contenidos publicitarios o patrocinados. Los anunciantes o patrocinadores son los únicos responsables de asegurarse que el material remitido para su inclusión en la Web cumple con las leyes que en cada caso puedan ser aplicables.</p>
            <p>VISIONA, no será responsable de ningún error, inexactitud o irregularidad que puedan contener los contenidos publicitarios o de los patrocinadores.</p>
            <p><strong>Legislación aplicable</strong></p>
            <p>El Aviso Legal se regirá e interpretará en conformidad con la legislación española.</p>
            <p>Para la resolución de cualquier conflicto que pudiera derivarse del acceso al sitio web, se someterán a los juzgados o tribunales pertinentes de conformidad con la normativa de consumidores y usuarios.</p>
            <p><strong>Contacto</strong></p>
            <p>
              Para cualquier pregunta o comentario sobre el presente aviso legal os podéis poner en contacto con nosotros a través del correo electrónico
              <a href="mailto:info@visiona.cat">info@visiona.cat</a>.
            </p>
          </Trans>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Legal
