<template>
  <div id="footer_tescom-mx">
    <div class="row no-gutters">
      <div class="col-md-3 text-left" id="info_contact">
        <h5>INFORMACIÓN DE CONTACTO</h5>
        <div class="row">
            <div class="col-md6"><strong>Dirección:</strong></div>
            <div class="col-md6">{{footerDomicilio.direccion}}</div>
        </div>
        <div class="row">
          <div class="col-md6"><strong>Telefono:</strong></div>
          <div class="col-md6">{{footerDomicilio.telefono}}</div>
        </div>
        <div class="row">
          <div class="col-md6"><strong>Email:</strong></div>
          <div class="col-md6"><a :href="mailTo">{{footerDomicilio.mail}}</a></div>
        </div>
      </div>
      <div class="col-md-6 text-center">
        <h5><a href="/#/nosotros" class="noLinkColor">Acerca de nosotros</a></h5>
        <span><a href="/#/nosotros#tmision">Misión</a> * </span>
        <span><a href="/#/nosotros#tvision">Visión</a></span>
        <br>
        <span><a href="/#/nosotros#tvalores">Valores</a></span>
        <br>
      </div>
      <div class="col-md-3">
          <span>Siguenos en FB</span>
          <br>
          <span>Siguenos en Tw</span>
      </div>
    </div>
  </div>
</template>
<script>
import JsonStatic from "@/assets/detalleservicios.json"
export default {
  name: "Foot",
  data: () => ({
    footerDomicilio : {},
    mailTo : ""
  }),
  created() {
    //do something after creating vue instance
    this.footerDomicilio = JsonStatic.footer.domicilio;
    this.mailTo ="mailto:" + this.footerDomicilio.mail + "?subject=contaco"
  }
}
</script>
<style lang="css" scoped>
#footer_tescom-mx{
  background-color: #303335;
  color: gainsboro;
  bottom: 0px;
  font-size: .8rem;
}
h5{
  font-size: 1rem;
  padding-left: 5px;
}
.noLinkColor{
  color: gainsboro;
  text-decoration: none;
}
#info_contact, .row{
  padding-left: 10px;
}
</style>
