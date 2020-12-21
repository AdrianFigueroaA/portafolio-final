<template>
  <b-container fluid id="intereses">
    <h1>Intereses</h1>
    <p>
      "No lo intentes. Hazlo o no lo hagas, pero no lo intentes"  <span>Yoda</span> 
    </p>

    <b-row id="Imagenes-Intereses">
      <b-col class="img" cols="6" md="3"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/developer-1.1s-653px.png?alt=media&token=f9739267-1ca5-49e1-9667-373c7c732536"
        />
        <h3>Desarrollador Front End</h3></b-col
      >
      <b-col class="img" cols="6" md="3"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logo%20imperial.jpg?alt=media&token=ba31ed2b-1fe3-4903-b869-00f65af49954"
        />
        <h3>Fan de Star Wars</h3></b-col
      >
      <b-col class="img" cols="6" md="3"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/rock-logo.png?alt=media&token=f749dac6-c543-4562-8b8e-18bd4e703e3e"
        />
        <h3>Amante del Rock</h3></b-col
      >
      <b-col class="img" cols="6" md="3"
        ><img
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/libros-logo.png?alt=media&token=c563a460-74dd-4f2d-af67-af8356fb0459"
        />
        <h3>Lector Empedernido</h3></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Intereses",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");
#intereses {
  position: sticky;
  top: 100px;
  text-align: center;

  background: white;

  padding-top: 80px;
  padding-bottom: 80px;
  h1,
  h3 {
    font-family: "Oswald", sans-serif;
  }

  p {
    margin-bottom: 50px;
    font-size: 18px;
     span {
       
       color: green;
     }
  }
}
</style>
