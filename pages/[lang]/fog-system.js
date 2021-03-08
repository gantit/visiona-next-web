import { useContext, useEffect } from "react";
import Head from "next/head"
import { useTranslation, Trans } from "react-i18next";
import { Grid, Segment, Header, Image, List, Embed } from "semantic-ui-react";

import { ToastContext } from "context";
import Footer from "components/footer";
import ContactForm from "components/contactForm";



const styles = {
  box: {
    padding: "0 4em 4em 4em",
    margin: "0 auto",
  },
  title: {
    fontSize: "3em",
    textAlign: "center",
  },
  list: {
    paddingTop: ".5em",
  },
  container: {
    paddingTop: "4em",
  },
  legalText: {
    margin: "0 auto",
    paddingBottom: "4em",
  },
  titleSection: {
    fontSize: "1.2em",
    padding: "0.5em 0",
    margin: 0,
  },
};

const CookiesPage = () => {
  const { setMessage } = useContext(ToastContext)
  const [t] = useTranslation();

  useEffect(() => {
    setMessage({
      url: '/img/photos/fog.png',
      title: t("Sistema de Niebla Antirrobo"),
      subtitle: null,
      height: 600,
    })
    return () => {
      setMessage('')
    }
  }, [])

  const Title = () => {
    const description = t(
      "Asegura sus objetos de valor en cuestión de segundos y hace que los ladrones no puedan ver nada, y por tanto, no robaran nada."
    );
    const title = t(
      "Visiona.cat | Niebla antirrobo para la prevención de delitos"
    );
    const url = "https://visiona.cat/niebla/";
    const keys =
      "seguridad con humo, protección contra robos, niebla de seguridad, ladrones, detener a los ladrones, protección de inventarios, seguridad en comercios";

    const niebla = "/img/photos/visiona_generador_de_niebla.png"
    return (
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keys}></meta>
        <meta property="og:description" content={description} />
        <meta property="og:image:height" content="950" />
        <meta property="og:image:width" content="2575" />
        <meta property="og:image" content={niebla} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content={t("Visiona Intelligence Security")} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={niebla} />
      </Head>
    );
  };

  return (
    <>
      <Title />
      <Segment vertical className="Cookies" style={styles.container}>
        <Grid container stackable verticalAlign="middle" textAlign="justified">
          <Grid.Row columns="equal">
            <Grid.Column width={16} style={styles.legalText}>
              <Trans i18nKey="generadorNiebla">
                <Embed
                  id='8y9J1E7LbsI'
                  placeholder='/img/photos/fog_system_visiona.png'
                  source='youtube'
                />

                <p style={{ fontSize: "1.2em", marginTop: '2rem' }}>
                  Conocemos la forma en la que actúan los delincuentes profesionales, diariamente estamos en la constante búsqueda e investigación de soluciones de última generación que nos permitan prevenir y frustrar sus planes delictivos.</p>
                <p style={{
                  fontSize: "1.2em", marginTop: '1rem'
                }}>
                  Para este caso específico hemos diseñado un robusto sistema de seguridad activa, que comprende un conjunto de elementos homologados de grado 2 y 3, con el que además de disuadir a los saqueadores y ladrones, cabe la posibilidad de que algunos queden retenidos en el interior del establecimiento, si estos ignoran las advertencias de no ingresar en el local protegido por Visiona, incluso hasta que acudan los cuerpos de seguridad del estado.
                </p >

                <Segment
                  style={{ padding: "8em 0em" }}
                  vertical
                  className="Especialist"
                >
                  <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Trans i18nKey="generadorNieblaEspecialidad">
                          <Header as="h3" style={{ fontSize: "2em" }}>
                            Cañon de niebla, Cañon de humo o generador de niebla
                          </Header>
                          <p style={{ fontSize: "1.2em", marginTop: '2rem' }}>
                            Tres palabras que definen la
                            <strong> prevención de intrusiones</strong>
                          </p>
                          <p style={{ fontSize: "1.2em", marginTop: '1rem' }}>
                            Un ladrón no puede robar lo que no puede ver.
                            Proteja sus posesiones más valiosas con nuestro
                            cañón de niebla, que se coloca estratégicamente en
                            la zona a proteger. Cuando se activa, nuestro cañón
                            es capaz de generar una densa niebla que, combinada
                            con nuestra luz estroboscópica y la sirena, cegará
                            instantáneamente a un ladrón, impidiéndole robar su
                            propiedad, lo que en última instancia le disuadirá
                            de cometer su acto delictivo.
                          </p>

                          <p style={{ fontSize: "1.2em", marginTop: '1rem' }}>
                            <strong>
                              Evitar robos en empresas, almacenes, tiendas,
                              hogares, vehículos particulares, mercancías,
                              camiones y contenedores
                            </strong>
                            . Va más allá del simple registro de delincuentes
                            antes de que cometan delitos o de la emisión de
                            alarmas ineficaces.
                          </p>
                          <Header as="h3" style={{ fontSize: "2em" }}>
                            La mejor de seguridad y estas son las razones
                          </Header>
                          <List divided relaxed>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'> Disuade a los delincuentes e impide que roben,
                                dañen o ataquen.</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'>El humo que emite es 100% inofensivo.</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'>Reduce la visibilidad a cero en menos de 45
                                segundos.</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'>Tarda 45 minutos en disiparse.</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'>No deja residuos tras su aplicación.</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'>No daña los alimentos, el equipo, los muebles ni
                                provoca manchas en los suelos y las paredes</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'>Detiene a cualquier número de intrusos.</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'>Coste de mantenimiento extremadamente bajo</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Content>
                                <List.Description style={{ fontSize: "1.2em" }} as='p'>Fácil de reubicar</List.Description>
                              </List.Content>
                            </List.Item>
                          </List>
                        </Trans>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Image
                          bordered
                          rounded
                          size="massive"
                          src="/img/photos/fog_security.png"
                        />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column textAlign="center">
                        {/* <Button size='huge'>Contactanos</Button> */}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>

                <ContactForm />
              </Trans>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </>
  );
};

export default CookiesPage;
