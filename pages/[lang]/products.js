import { useContext, useEffect } from "react";
import Head from "next/head"
import { useTranslation, Trans } from "react-i18next";
import { Grid, Segment, Image, Card, } from "semantic-ui-react";

import { ToastContext } from "context";
import Footer from "components/footer";

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
  camera: {
    width: "100%",
    height: "300px",
    margin: "0 auto",
  }
};

const CookiesPage = () => {
  const { setMessage } = useContext(ToastContext)
  const [t] = useTranslation();

  useEffect(() => {
    setMessage({
      url: '/img/photos/keyDoor.jpeg',
      title: t("Tu seguridad"),
      subtitle: t("Nuestra experiencia y nuestros productos te la proporcionarán"),
      height: 600,
      postion: 'left 90%'
    })
    return () => {
      setMessage('')
    }
  }, [])

  const Title = () => {
    const description = t("Tu seguridad, Nuestra experiencia y nuestros productos te la proporcionarán.");
    const title = t("Visiona.cat | Nuestros productos");
    const url = "https://visiona.cat/es/products/";
    const keys = "camaras de seguridad, Ptz, Dahua, vision nocturna, baja iluminación";
    const imgHeader = "https://visiona.cat/img/photos/camerasVsiona-min.png"
    return (
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keys} />
        <meta property="og:description" content={description} />
        <meta property="og:image:height" content="950" />
        <meta property="og:image:width" content="2575" />
        <meta property="og:image" content={imgHeader} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content={t("Visiona Intelligence Security")} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={imgHeader} />
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
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
              <Grid container stackable verticalAlign="middle" textAlign="justified">
                <Grid.Row columns="equal">
                  <Trans i18nKey="Products">
                    <Grid.Column width={4} style={styles.legalText}>
                      <Card>
                        <Image src='/images/avatar/large/matthew.png' wrapped ui={false}>
                          <model-viewer
                            style={styles.camera}
                            src="/glbs/Bullet_Normal_GLB_FINAL.glb"
                            alt="A 3D model of a Bullet Normal"
                            camera-controls />
                        </Image>
                        <Card.Content>
                          <Card.Header>IPC-HFW8241E-Z</Card.Header>
                          <Card.Meta>
                            <span className='date'>Deep·Sense</span>
                          </Card.Meta>
                          <Card.Description>
                            Gracias a la tecnología Starlight de Dahua, esta cámara es ideal para aplicaciones en
                            aplicaciones en condiciones de iluminación difíciles. Su rendimiento en condiciones de poca luz
                            proporciona un vídeo utilizable con una luz ambiental mínima. Incluso en condiciones de luz extremadamente baja, la tecnología Starlight puede proporcionar imágenes en color en una oscuridad casi total.
                            La tecnología Starlight puede proporcionar imágenes en color en una oscuridad casi total.
                        </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                    <Grid.Column width={4} style={styles.legalText}>
                      <Card>
                        <Image ui={false}>
                          <model-viewer
                            style={styles.camera}
                            src="/glbs/PTZ_Dahua_FULL.glb"
                            alt="A 3D model of a PTZ HDCVI"
                            camera-controls />
                        </Image>
                        <Card.Content>
                          <Card.Header>2 MP HDCVI PTZ Camera</Card.Header>
                          <Card.Meta>
                            <span className='date'>HDCVI</span>
                          </Card.Meta>
                          <Card.Description>
                            La cámara domo PTZ Starlight IR de 2 MP cuenta con una cámara STARVIS™ de 1/2,8 pulg. Proporciona una
                            solución para la captura de videovigilancia a larga distancia en exteriores, de día y de noche. La cámara tiene un calentador integrado y protección IP67 es una protección contra la intrusión para permitir su uso en los entornos más duros. Cuenta con un control rápido y preciso del movimiento horizontal, vertical y del zoom, y con WDR real para aplicaciones de iluminación con luz solar directa o deslumbramiento.
                        </Card.Description>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Trans>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </>
  );
};

export default CookiesPage;
