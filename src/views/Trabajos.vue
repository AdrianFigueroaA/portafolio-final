<template>
  <b-container fluid class="trabajos">
    <h1>Mis Trabajos</h1>

    <div class="tarjetas">
      <b-card
        title="DinoAustral"
        img-src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/capturas%20proyectos%2FScreenshot_2020-12-17%20DinoAustral.jpg?alt=media&token=877ab6d8-1c30-4b9a-92b2-c0983d409a65"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Portal de divulgacion cientifica sobre animales prehistoricos del cono
          sur
        </b-card-text>

        <b-modal id="modal-1" title="DinoAustral">
          <p class="my-4">
            DinoAustral es una aplicación desarrollada con VueJS (bootstrap-vue)
            y Firebase para la divulgacion cientifica de los animales
            prehistoricos que poblaron chile y latinoamerica.
          </p>

          <b-button
            href="https://dinosaurios-de-chile.web.app/"
            variant="primary"
            >Visita el Proyecto</b-button
          >
        </b-modal>

        <b-button v-b-modal.modal-1>Ver +</b-button>
      </b-card>

      <b-card
        title="Barbershop"
        img-src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/capturas%20proyectos%2FScreenshot_2020-12-18%20BarberShop.png?alt=media&token=788ce791-69be-4806-86df-e9c48494036c"
        img-alt="Responsive image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Aplicacion web de operacion de una barberia.
        </b-card-text>

        <b-modal id="modal-2" title="Barbershop">
          <p class="my-4">
            Pagina web de operacion de una barberia.
          </p>

          <b-button
            href="https://adrianfigueroaa.github.io/barbershop/"
            variant="primary"
            >Visita el Proyecto</b-button
          >
        </b-modal>

        <b-button v-b-modal.modal-2>Ver +</b-button>
      </b-card>

      <b-card
        title="Treek-in"
        img-src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/capturas%20proyectos%2FScreenshot_2020-12-18%20Startup%20Treek-in.png?alt=media&token=da06c595-904a-4504-872b-585c9475dcab"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Pagina web de agencia de viajes y trekking
        </b-card-text>

        <b-modal id="modal-3" title="Treek-in">
          <p class="my-4">
            Con trekk-in te despreocuparas de la estimacion de tu viaje,ya que
            con unos simples pasos podras definir la mejor ruta a tomar con tus
            compañeros de expedicion
          </p>

          <b-button
            href="https://adrianfigueroaa.github.io/treek-in/"
            variant="primary"
            >Visita el Proyecto</b-button
          >
        </b-modal>

        <b-button v-b-modal.modal-3>Ver +</b-button>
      </b-card>
    </div>

    <div>
      <b-button
        block
        variant="primary"
        href="https://github.com/AdrianFigueroaA"
        >Para Conocer mis otros Trabajos visita mi Github
        <i class="fab fa-github"></i>
      </b-button>
      <br />
    </div>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
h1 {
  text-align: center;
}

.trabajos {
  background-color: #00b894;
  position: sticky;
  top: 65px;
  padding-top: 80px;
  padding-bottom: 80px;
}

.tarjetas {
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
  padding-top: 30px;
}

.trabajos {
  > h1 {
    padding-top: 30px;
  }
}
</style>
