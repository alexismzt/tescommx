import Vue         from 'vue'
import Router      from 'vue-router'
import DashBoard   from '@/components/dash/DashBoard'
import DetalleP    from '@/components/productos/detalle'
import Mision      from '@/components/valores/mision'
import Vision      from '@/components/valores/vision'
import Valores     from '@/components/valores/valores'
import Objetivos   from '@/components/valores/objetivos'
import Empresa   from '@/components/valores/empresa'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/detalle/:tipo/:detalleName',
      name: 'detalle',
      component: DetalleP
    },
    {
      path: '/mision',
      name: 'mision',
      component: Mision
    },
    {
      path: '/vision',
      name: 'vision',
      component: Vision
    },
    {
      path: '/valores',
      name: 'valores',
      component: Valores
    },
    {
      path: '/objetivos',
      name: 'objetivos',
      component: Objetivos
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: Empresa
    }
  ]
})
