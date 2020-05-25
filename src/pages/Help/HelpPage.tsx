import React from 'react'
import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import 'pages/Search/SearchPage.scss'
import { NavigationHeader } from 'components/NavigationHeader/NavigationHeader'

export const HelpPage: React.FC = () => {
  return (
    <IonPage>
      <NavigationHeader title="AYUDA"/>
      <IonContent>
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol>
              <p>
                Inquam es una aplicación de escritura colaborativa, un cruce entre una biblioteca y una app de
                mensajería. Usarla es muy fácil.
              </p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>
                Cuando inicias Inquam se te mostrará una historia aleatoria. Puedes leerla y, si se te ocurre algo,
                ofrecer tu propia continuación. Solo tienes que escribir en el campo de entrada inferior y pulsar el
                botón de enviar. Tu contribución se añadirá a la historia y será visible para quienes la lean.
              </p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>
                Crear tu propia historia es tan fácil como elegir la opción indicada en el menú. Una historia pública es
                visible para todo el mundo, puede encontrarse con el búscador o incluso puede mostrarse aleatoriamente
                al iniciar la aplicación.
              </p>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>
                Todas las historias públicas tienen un título y una descripción. Además, pueden tener una limitación de
                caracteres, que limita la longitud de cada una de las aportaciones. Así puedes evitar que alguien
                acapare la narración, o usarlo para fomentar la creatividad.
              </p>
            </IonCol>
          </IonRow>{ ' ' }
          <IonRow>
            <IonCol>
              <p>
                También puedes crear una historia privada. Estas historias no pueden aparecer al inicio, y solo se
                mostrarán en el buscador si se introduce la referencia exacta. Además, requieren una contraseña de
                acceso sin la cual no se podrá acceder al contenido. Por ello, la descripción de las historias privadas
                es opcional.
              </p>
            </IonCol>
          </IonRow>{ ' ' }
          <IonRow>
            <IonCol>
              <p>
                En cualquier momento puedes elegir guardar una historia, ya sea pública o privada, pulsando en el icono
                del marcapáginas. Las historias guardadas se almacenan en tu dispositivo, y pueden encontrarse en la
                biblioteca. ¡Recuerda que si borras los datos de tu aplicación, perderás las historias que hayas
                guardado!
              </p>
            </IonCol>
          </IonRow>{ ' ' }
          <IonRow>
            <IonCol>
              <p>
                En el buscador puedes ver todas las historias públicas pulsando buscar sin introducir ningún criterio de
                filtrado. También puedes encontrar una historia concreta introduciendo su referencia (del tipo #a1b2c3
                para historias públicas o #!a1b2c3 para historias privadas). Finalmente, puedes filtrar por título y descripción con solo escribir en el
                cuadro de búsqueda.
              </p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
