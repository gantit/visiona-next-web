import { useState } from 'react'
import axios from 'axios'
import {
  Grid, Form, Input,
  TextArea, Button, Header,
  Image, Checkbox, Confirm,
  Segment, Message, Item,
  Dimmer, Loader
} from 'semantic-ui-react'
import { useCookies } from 'react-cookie'
import { useTranslation, Trans } from 'react-i18next'


const API_URL = 'https://api.visiona.cat'



const ContactForm = () => {
  const [t] = useTranslation()
  const [cookies, setCookie] = useCookies(['_legalVisiona'])
  const formEmpty = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    consent: cookies._legalVisiona === 'true'
  }
  const [fields, setfields] = useState(formEmpty)
  const [isOpenConsent, toggleConsent] = useState(false)
  const [successSend, setSuccessSend] = useState(false)
  const [errorSend, setErrorSend] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [, setConsent] = useState(cookies._legalVisiona === 'true')

  const sendForm = async (data) => {
    const url = `${API_URL}/api/contacts/`
    setLoading(true)

    const response = await axios
      .post(url, data, {
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-API-KEY': '5db3a6280610218a1c0bbfd99f19821e7b0d246d2711c9f0c79c1f17fd46a039'
        }
      })
    return response
  }

  const submit = async () => {
    const Data = {
      ...fields,
      name: `${fields.name} ${fields.surname}`
    }
    try {
      await sendForm(Data)
      setfields(formEmpty)
      setSuccessSend(true)
      setTimeout(() => setSuccessSend(false), 5000)
    } catch (error) {
      setErrorSend(true)
      setfields(formEmpty)
      setTimeout(() => setErrorSend(false), 5000)
    } finally {
      setLoading(false)
    }
  }

  const handleConsent = (consent) => {
    setConsent(consent)
    setfields({ ...fields, consent })
    setCookie('_legalVisiona', consent, { sameSite: 'strict' })
    toggleConsent(false)
  }

  return (
    <Segment vertical className="ContactForm" id="ContactForm" style={{ padding: '2em 3em' }}>
      <Grid columns={2} container stackable verticalAlign="middle" textAlign="center">
        <Grid.Row>
          <Header as="h2" content={t('Dejanos tus datos y te contactaremos')} />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {isLoading && <Dimmer active>
              <Loader content={t('Enviando')} />
            </Dimmer>}
            <Form onSubmit={() => submit()}>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  onChange={({ target }) => setfields({ ...fields, name: target.value })}
                  label={t('Nombre')}
                  placeholder={t('Nombre')}
                  required
                  value={fields.name}
                />
                <Form.Field
                  control={Input}
                  onChange={({ target }) => setfields({ ...fields, surname: target.value })}
                  label={t('Apellido')}
                  placeholder={t('Apellido')}
                  value={fields.surname}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  control={Input}
                  label={t('Correo')}
                  placeholder={t('soporte@visiona.cat')}
                  type="email"
                  onChange={({ target }) => setfields({ ...fields, email: target.value })}
                  value={fields.email}
                  required
                />
                <Form.Field
                  control={Input}
                  onChange={({ target }) => setfields({ ...fields, phone: target.value })}
                  label={t('Teléfono')}
                  placeholder="930000000"
                  pattern="[0-9]{9}"
                  required
                  value={fields.phone}
                  type="tel"
                />
              </Form.Group>
              <Form.Field
                control={TextArea}
                onChange={({ target }) => setfields({ ...fields, message: target.value })}
                label={t('Detalles')}
                value={fields.message}
                required
                placeholder={t('Cuentanos que tienes pensado, que tipo de sistemas quieres y así tendremos mas datos que poder ayudarte')}
              />

              <Form.Group widths="equal">
                <div style={{ padding: '5px', margin: '5px auto' }}>
                  <Checkbox toggle checked={fields.consent} onClick={() => handleConsent(!fields.consent)} />
                </div>
                <Trans i18nKey="registerForm">
                  <p>
                    Sí, acepto el registro en visiona.cat al enviar el formulario.
                    <Item as="a" style={{ cursor: 'pointer' }} onClick={() => toggleConsent(true)}>Leer el concentimiento</Item>
                  </p>
                </Trans>
                <Confirm
                  open={isOpenConsent}
                  header="Consentimiento formulario web."
                  content={() => (
                    <Trans i18nKey="lopdPopUp">
                      <div style={{ padding: '1em' }}>
                        <p>(LSSI-CE y RGPD)</p>
                        <p> De conformidad con lo establecido en el REGLAMENTO (UE) 2016/679 de protección de datos de carácter personal, le informamos que los datos que usted nos facilite serán incorporados al sistema de tratamiento titularidad de VISIONA INTELLIGENCE SECURITY, S.L.; CIF B67067884 y domicilio social sito en Plaça Can Gassol, 3, 08301, Mataró, con la finalidad de prestar y mantener los servicios acordados contractualmente así como poder informarle sobre los nuevos productos y servicios. </p>
                        <p>Se procederá a tratar los datos de manera lícita, leal, transparente, adecuada, pertinente, limitada, exacta y actualizada. Mientras no nos comunique lo contrario, entenderemos que sus datos no han sido modificados y que usted se compromete a notificarnos cualquier variación. En caso que fuera necesario comunicar sus datos a otros destinatarios, puede consultar más información en la política de privacidad disponible en la web.</p>
                        <p> De acuerdo con los derechos que le confiere la normativa vigente podrá ejercer sus derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos de carácter personal así como revocar el consentimiento prestado, dirigiendo su petición a la dirección postal indicada o al correo electrónico info@visiona.cat. Igualmente puede dirigirse a nosotros para cualquier aclaración en relación con este formulario o en relación al tratamiento de sus datos. </p>
                        <p>En caso de no aceptación sus datos no serán tratados.</p>
                      </div>
                    </Trans>
                  )}
                  onCancel={() => handleConsent(false)}
                  onConfirm={() => handleConsent(true)}
                />
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content={t('Enviar')}
                  disabled={fields.consent === false}
                />
              </Form.Group>
            </Form>
            {successSend && <Message positive>{t('Su mensaje se ha enviado correctamente.')}</Message>}
            {errorSend && <Message negative>{t('Ha ocurrido un error al Enviar.')}</Message>}
          </Grid.Column>
          <Grid.Column>
            <Image size="huge" src='/img/photos/contactanos.jpg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ContactForm
