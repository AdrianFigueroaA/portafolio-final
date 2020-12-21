<template>
  <div class="navBar">
       <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand  :to="{ name: 'home' }" >  <span>Adrián Figueroa</span>  </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
 <b-navbar-nav>
        <b-nav-item  :to="{ name: 'home' }" >Inicio</b-nav-item>
         <b-nav-item :to="{ name: 'Herramientas' }">Herramientas</b-nav-item>
        <b-nav-item  :to="{ name: 'Trabajos' }" >Trabajos</b-nav-item>
      
      </b-navbar-nav>
      

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
    name: "Navbar"

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.navBar {

 font-family: "Oswald", sans-serif;
  color: #0984e3;
  font-size: 25px;
  position: sticky;
  top: 0;
  z-index: 900;

   

}

 span {
         font-family: "Oswald", sans-serif;
     
        font-size: 25px;

    }

</style>

