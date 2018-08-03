<template>
  <div id="app" class="">
    <NavigationBar :producto='producto'></NavigationBar>
    <div  class="contenedor">
      <carrouselBar></carrouselBar>
      <div class="productos">
        <div class="row justify-content-start">
            <productosCard url='https://picsum.photos/600/300/?image=25'
                titulo='e-learning'
                detalle = 'Contamos con expertos que te ayudaran a realizar capacitaciones en linea con tu personal en otras partes del pais'
            />
            <productosCard url='https://picsum.photos/600/300/?image=40'
            titulo='IA'
            detalle = 'En tescom.mx contamos con CorporateSupport para el desarrollo de tu insfraestructura basado en los principios de la Inteligencia Artifical'
            />
            <productosCard url='https://picsum.photos/600/300/?image=10'
            titulo='Cloud'
            detalle = '¿Necesitas escalar tus servicios y no tienes las infraestructura necesaria?, Conoce nuestra linea de cloud servers'
            />
            <productosCard url='https://picsum.photos/600/300/?image=85'
            titulo='Cloud'
            detalle = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <productosCard url='https://picsum.photos/600/300/?image=110'
            titulo='Cloud'
            detalle = '¿Necesitas escalar tus servicios y no tienes las insfraestructura necesaria?, Conoce nuestra linea de cloud servers'
            />
            <productosCard url='https://picsum.photos/600/300/?image=3'
            titulo='Cloud'
            detalle = '¿Necesitas escalar tus servicios y no tienes las insfraestructura necesaria?, Conoce nuestra linea de cloud servers'
            />
        </div>
      </div>
      <footer >
        <div class="row no-gutters">
          <div class="col-md-3 text-left">
            <h6>INFORMACIÓN DE CONTACTO</h6>
              <span>
                Av. Paseo de la Reforma 300, piso 9
              </span>
              <span>
                Col. Juárez, Deleg. Cuauhtémoc, México D.F.
              </span>
              <span>
                C.P. 06600
              </span>
              <span>
                Tel : 1209 - 6595
              </span>
              <span>
                Email : info@samplemail.com
              </span>
          </div>
          <div class="col-md-6">
          </div>
          <div class="col-md-3">
              <span>Siguenos en FB</span>
              <br>
              <span>Siguenos en Tw</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/navigation/navigationBar'
import carrouselBar from '@/components/carousel/carousel'
import productosCard from '@/components/productos/productos'
export default {
  name: 'app',
  data: () => ({
    producto : 'Test Site'
  }),
  components: {
    NavigationBar,
    carrouselBar,
    productosCard
  }
}
</script>

<style>
.contenedor{
  width: 100%;
  min-height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.tescom-navbar{
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.productos{
  top: 15px;
  width: 80%;
  margin: 0 auto;
}

footer{
  background-color: gainsboro;
  color: slategray;
  top: 20px;
  bottom: 0px;
  position: relative;
}
</style>
