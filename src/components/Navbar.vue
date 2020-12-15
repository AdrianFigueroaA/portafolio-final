<template>
  <div>
       <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand  :to="{ name: 'home' }" >Adrian Figueroa</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       
 <b-navbar-nav>
        <b-nav-item  :to="{ name: 'home' }" >Inicio</b-nav-item>
         <b-nav-item :to="{ name: 'Herramientas' }">Herramientas</b-nav-item>
        <b-nav-item  :to="{ name: 'Trabajos' }" >Trabajos</b-nav-item>
        <b-nav-item :to="{ name: 'Experiencias' }">Experiencias</b-nav-item>
        <b-nav-item :to="{ name: 'Intereses' }">Intereses</b-nav-item>
        <b-nav-item :to="{ name: 'Contacto' }">Contacto</b-nav-item>
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

</style>