<template>
  
    <div class="contacto">
      <div class="redes">
        <a href="https://github.com/AdrianFigueroaA"
          ><i class="fab fa-github"></i
        ></a>
        <a href="www.linkedin.com/in/adrián-figueroa-9a53a21ab"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a href="mailto:adrian.figueroa.a@gmail.com"
          ><i class="far fa-envelope"></i
        ></a>
      </div>

      <div class="link-id">
        <a href="https://github.com/AdrianFigueroaA">
           <span>Adrián Figueroa.</span></a
        >
      </div>
    </div>
  
</template>

<script>
export default {
  name: "Contacto",
};
</script>

<style lang="scss">
.contacto {
  background: black;
   
}

.link-id {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 40px;
  a {
    color: white;
    >span {
      color: #099745;
    }
  }
}

.redes {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;

  a {
    padding-right: 15px;
    color: white !important;
  }
}

@media (max-width: 500px) {
  
}
</style>
