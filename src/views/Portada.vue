<template>
  <div class="portada">
    <b-container fluid>
      <b-row>
        <b-col  cols="12" md="5" id="portrait"></b-col>
        <b-col  cols="12" md="7" id="description">
          <h1>Desarrollador Front end</h1>
          <p>
            Soy desarrollador front end y estoy comenzando mi carrera como
            programador, sin embargo siempre he estado ligado a la informática.
            Admiro la capacidad de las nuevas tecnologías de facilitar la vida a
            las personas y me interesa seguir profundizando mis conocimientos en
            el área. Actualmente manejo herramientas como Vue, Javascript, Html,
            Css, Firebase, y sistema de control de versiones Git. También tengo
            conocimiento en electrónica y sistemas operativos. Soy un ávido
            lector, amante de la ciencia y el rock.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Portada",
  components: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.portada {
  position: sticky;
  background: black;
  top: 65px;
  z-index: -1;
}

#portrait {
  background-image: url("../assets/img/portrait-torres.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
}

#description {
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 120px 55px;

  > h1 {
    font-family: "Oswald", sans-serif;
    color: #0984e3;
    margin-bottom: 30px;
  }
  > p {
    font-size: 20px;
    color: white;
  }
}




@media (max-width: 800px) {
  

.portada {
  top: unset;
  position: static;
}


#description {
  
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5px 10px;
  text-align: center;
  

  > h1 {
     margin-bottom: 10px;
    
  }
  > p {
    font-size: 20px;
    color: white;
  }
}


#portrait {
 
  min-height: 250px;
}

}
</style>






