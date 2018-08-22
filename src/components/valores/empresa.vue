<template>
  <div>
    <div class="">
      <b-img src="https://picsum.photos/1024/480/?image=48" fluid alt="" />
    </div>
    <div  class="empresa" >
      <h1 id="tnosotros" class="text-center">Quienes somos</h1>
      <p>En <a href="/">tescom.mx</a> somos una empresa dedicada al servicio de integración de sistemas de seguridad y comunicaciones inteligentes; utilizando productos con tecnología de punta. <br><br>Ofrecemos productos tecnológicos y servicios en soluciones integrales para la protección informática y exterior de los consumidores.</p>
    </div>
    <div class="mision">
      <h1 id="tmision" class="text-right">Misión</h1>
      <p>Garantizar la seguridad electrónica de empresas con tecnología de vanguardia, enfocándonos en brindar un servicio inigualable y una infraestructura de
  alta tecnología, buscando siempre el bienestar de nuestros clientes y persiguiendo la innovación, investigación y mejora de nuestro equipo.</p>
    </div>
    <div class="vision">
      <h1 id="tvision" class="text-left">Visión</h1>
      <p>Ser una empresa líder en seguridad electrónica nacional e internacionalmente, reconocida por la excelente calidad en el servicio y sus productos de alta tecnología.</p>
    </div>

    <div class="empresa">
      <h1 id="tvalores" class="text-center">Valores</h1>
      <p>
        <ul>
          <li>Honestidad</li>
          <li>Compromiso</li>
          <li>Entusiasmo</li>
          <li>Trabajo en Equipo</li>
          <li>Lealtad</li>
          <li>Servicio</li>
          <li>Responsabilidad</li>
        </ul>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "empresa",
  data: () => ({

  })
}
</script>
<style lang="css" scoped>
.empresa{
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}
.mision{
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}

.vision{
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}

.empresa p{
  width: 40%;
  margin: 0 auto;
  text-align: justify;
}

.empresa ul{
  text-align: center;
  list-style-position: inside;
}

.mision  p{
  width: 40%;
  margin: 0 auto;
  margin-right: 0px;
  text-align: right;
}

.vision p {
  width: 40%;
  margin: 0 auto;
  margin-left: 0px;
  text-align: left;
}

</style>
