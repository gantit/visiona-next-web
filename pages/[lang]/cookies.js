import React from 'react'
import {
  Grid, Segment, Header, Table
} from 'semantic-ui-react'
import { Trans } from 'react-i18next'

const styles = {
  box: {
    padding: '0 4em 4em 4em', margin: '0 auto'
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

const Cookies = () => (
  <Segment vertical className="Cookies" style={styles.container}>
    <Grid container stackable verticalAlign="middle" textAlign="justified">
      <Grid.Row columns="equal">
        <Grid.Column width={16} style={styles.legalText}>
          <Trans i18nKey="cookiesLegal">
            <Header as="h3" style={styles.title}> POLÍTICA DE COOKIES </Header>
            <h3> 1. ¿Qué son las cookies y por qué las utilizamos en el sitio web?</h3>
            <p>Una cookie es un archivo que se descarga en el dispositivo del usuario para acceder a un determinado sitio web para almacenar y recuperar información sobre la navegación que se hace en el ordenador.</p>
            <p>Las cookies permiten a este sitio web, entre otras cosas, almacenar y recuperar información sobre las opciones y los hábitos del usuario. En este sitio web, las cookies que existen son necesarias para el funcionamiento de este.</p>
            <p>Es importante tener en cuenta que el uso de cookies no proporciona datos personales del usuario.</p>
            <h3>2. ¿Qué tipo de cookies existen?</h3>
            <p>Las cookies, en función del tiempo que permanecen activadas, pueden dividirse en cookies de sesión o permanentes:</p>
            <ul>
              <li>
                <strong>Cookies de sesión:</strong>
los datos que recaban y almacenan estas cookies se recogen mientras el usuario navega por la página web, y son eliminadas al cerrar el navegador. Se suelen emplear para almacenar información que interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.
              </li>
              <li>
                <strong>Cookies persistentes:</strong>
mediante estas cookies los datos continúan almacenados en el terminaldurante un período de tiempo determinado, facilitando así el control de las preferencias elegidas sin tener que repetir ciertos parámetros cada vez que se visite el sitio web.
              </li>
            </ul>
            <p>Adicionalmente, según la entidad que las gestione, las cookies pueden clasificarse en propias o de tercero:</p>
            <ul>
              <li>
                <strong>Cookies propias:</strong>
estas cookies se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el cual se presta el servicio solicitado por el usuario.
              </li>
              <li>
                <strong>Cookies de terceros:</strong>
estas cookies se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.
              </li>
            </ul>
            <p>En cuanto a la finalidad, las cookies pueden ser:</p>
            <ul>
              <li>
                <strong>Cookies técnicas:</strong>
estas cookies permiten controlar el tráfico y la comunicación de datos.
              </li>
              <li>
                <strong>Cookies de personalización:</strong>
estas cookies dejan acceder a los usuarios según algunas características propias que se recogen (navegador, idioma, etc.).
              </li>
              <li>
                <strong>Cookies de análisis:</strong>
estas cookies permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web y permiten elaborar un perfil de usuario.
              </li>
              <li>
                <strong>Cookies publicitarias:</strong>
estas cookies recogen datos sobre la gestión de los espacios publicitarios.
              </li>
            </ul>
            <h3>3. ¿Qué tipo de cookies utiliza la web?</h3>

            <Table celled structured>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell singleLine>Nombre</Table.HeaderCell>
                  <Table.HeaderCell singleLine>Dominio</Table.HeaderCell>
                  <Table.HeaderCell singleLine>Finalidad</Table.HeaderCell>
                  <Table.HeaderCell singleLine>Vencimiento</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell singleLine>_cookiesVisiona</Table.Cell>
                  <Table.Cell singleLine>.visiona.cat</Table.Cell>
                  <Table.Cell>Esta cookie normalmente se almacena en el navegador en la primera visita a nuestro sitio web. Si la cookie ha sido borrada a través del navegador y posteriormente vuelve a visitar nuestro sitio web, una nueva cookie del tipo _cookiesVisiona la que almacenará la aceptación de la Política de cookies.</Table.Cell>
                  <Table.Cell>Sesión</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>_legalVisiona</Table.Cell>
                  <Table.Cell>.visiona.cat</Table.Cell>
                  <Table.Cell>Esta cookie normalmente se almacena en el navegador en una vez aceptado el envío de formulario de contacto. Para permitir el uso y tratamiento de los datos enviados con fines de comunicación y oferta de servicios.</Table.Cell>
                  <Table.Cell>Sesión</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>__utma</Table.Cell>
                  <Table.Cell>.visiona.cat</Table.Cell>
                  <Table.Cell>Cookie de Google. Esta cookie mantiene un registre del número de veces que un usuario ha estado en un sitio, cuando fue su primera visita, y cuando se produjo su última visita.</Table.Cell>
                  <Table.Cell>2 años</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>__utmb</Table.Cell>
                  <Table.Cell>.visiona.cat</Table.Cell>
                  <Table.Cell>Cookie de Google. Esta cookie ayuda a calcular cuánto tiempo dura la visita de un usuario almacenando el momento en que accedió.</Table.Cell>
                  <Table.Cell>1 día</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>__utmc</Table.Cell>
                  <Table.Cell>.visiona.cat</Table.Cell>
                  <Table.Cell>Cookie de Google. Esta cookie ayuda a calcular cuánto tiempo dura la visita de un usuario almacenando el momento en que sale de la página.</Table.Cell>
                  <Table.Cell>Sesión</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>__utmz</Table.Cell>
                  <Table.Cell>.visiona.cat</Table.Cell>
                  <Table.Cell>Cookie de Google. Esta cookies mantiene el seguimiento de procedencia del visitante, qué motor de búsqueda se utilizó, en qué enlace hizo clic, qué palabras clave utiliza y desde qué sitio del mundo se accedió a la página.</Table.Cell>
                  <Table.Cell>6 meses</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

            <h3>4. ¿Cómo deshabilitar las cookies en su navegador?</h3>
            <p>El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Por favor, lee atentamente la sección de ayuda de su navegador para conocer más acerca de cómo activar el &quot;modo privado&quot; o desbloquear determinadas cookies.</p>
            <ul>
              <li>
                Información sobre cookies para
                <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"> Internet Explorer.</a>
              </li>
              <li>
                Información sobre cookies para
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"> Mozilla Firefox.</a>
              </li>
              <li>
                Información sobre cookies para
                <a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html"> Opera.</a>
              </li>
              <li>
                Información sobre cookies para
                <a href="https://support.google.com/accounts/answer/61416?hl=es"> Google Chrome.</a>
              </li>
              <li>
                Información sobre cookies para
                <a href="https://support.apple.com/es-es/HT201265"> Safari.</a>
              </li>
            </ul>
          </Trans>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Cookies
