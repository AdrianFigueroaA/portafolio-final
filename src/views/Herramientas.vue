<template>
  
    <b-container fluid class="herramientas">

        <h1>Herramientas</h1>

        <b-row class="herramientas1">
        <b-col cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Fjs.png?alt=media&token=6ab2c49f-5d06-484a-b146-b8006f8aac52" alt=""> <h3>JavaScript</h3></b-col>
        <b-col cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Fvue.png?alt=media&token=7768d5ca-20a3-424d-9de5-254eef7089a0" alt=""> <h3>Vue js</h3></b-col>
        <b-col cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Fgit.png?alt=media&token=d7fc9088-9054-4e6e-bc5b-050b6a6a6628" alt=""> <h3>Git</h3></b-col>
        <b-col cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Ffirebase_logo.webp?alt=media&token=5bf699c3-133d-40db-88b5-b81295fff1e2" alt=""> <h3>Firebase</h3></b-col>
        <b-col cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Fbootstrap.png?alt=media&token=4aa1d818-a552-4e80-910a-1529e790d560" alt=""> <h3>Bootstrap</h3></b-col>
        </b-row>

        <b-row class="herramientas2">
        <b-col  cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Fnpm.png?alt=media&token=5dad0fce-615f-4712-8704-85669eb495a8" alt=""> <h3>npm</h3></b-col>
        <b-col  cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Fcss.png?alt=media&token=3bf38b73-9793-4b9c-9618-2bc06e605fc0" alt=""> <h3>Css</h3></b-col>
        <b-col  cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Fsass.png?alt=media&token=e64ab6c4-684e-481c-91d7-a1d2ff5e007c" alt=""> <h3>Sass</h3></b-col>
        <b-col  cols="4" md="2"> <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2FHTML5_Badge_512.png?alt=media&token=5f59a339-6998-4684-8dfc-c26b1ac949a3" alt=""> <h3>Html</h3></b-col>
        <b-col  cols="4" md="2"><img src="https://firebasestorage.googleapis.com/v0/b/portafolio-cc234.appspot.com/o/logos%20desarrollo%2Fcypress.webp?alt=media&token=9c5cd142-29d1-40fb-b057-96de7c379c05" alt=""> <h3>Cypress</h3></b-col>
        </b-row>

    </b-container>
  
</template>

<script>
export default {
    name:"Herramientas"

}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

.herramientas{
    position: sticky;
    text-align: center;
    background: white;
    top: 65px;
    padding-top: 80px;
    padding-bottom: 80px;
        >h1{
            
            margin-bottom: 55px
        }
}

img{
    height: 100px;
}

.herramientas1 {

display: flex;
justify-content: center;
margin-bottom: 50px;
}
.herramientas2{
  display: flex;
  justify-content: center;  
}
h1, h3{


font-family: "Oswald", sans-serif;


}

@media (max-width: 800px) {
  
.herramientas {
top: unset;
position: static;
}

}
</style>