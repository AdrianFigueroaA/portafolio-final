<template>
  <div class="portada">
    <b-container fluid>
      <b-row>
        <b-col cols="5" id="portrait"></b-col>
        <b-col cols="7" id="description">
          <h1>Desarrollador Front end </h1>
          <p>
            Soy desarrollador front end , hace unos años estudié programación
            pero tuve que cambiar de área laboral y este año logré retomar los
            estudios, por lo que me interesa adquirir mas experiencia en esta
            área. Realicé proyectos con Vue, Javascript, Html, Css, Firebase, y
            sistema de control de versiones Git.
          </p>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
  
</template>

<script>

export default {
  name: "Portada",
  components: {
    
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.portada{

  background: black;
}

#portrait {
  background-image: url("../assets/img/portrait-torres.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}

#description {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 55px;

  > h1 {
    font-family: "Oswald", sans-serif;
    color: #0984e3;
  }
  > p {
    font-size: 20px;
    color: white;
  }
}
</style>
