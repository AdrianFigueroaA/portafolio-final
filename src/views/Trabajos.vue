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
          style="max-width: 300px;"
          class="mb-2"
        >
          <b-card-text>
            Portal de divulgacion cientifica sobre animales prehistoricos del
            cono sur
          </b-card-text>

          <b-modal id="modal-1" title="DinoAustral">
            <p class="my-4">
              DinoAustral es una aplicación desarrollada con VueJS
              (bootstrap-vue) y Firebase para la divulgacion cientifica de los
              animales prehistoricos que poblaron chile y latinoamerica.
            </p>

            <b-button
              href="https://dinosaurios-de-chile.web.app/"
              variant="primary"
              >Visita</b-button
            >
          </b-modal>

          <b-button v-b-modal.modal-1>Ver +</b-button>
        </b-card>

        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </b-card-text>

          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
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
}

.tarjetas{
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
  padding-top: 30px;


}

.trabajos{

  >h1 {

    padding-top: 30px;
  }
}
</style>
