<script setup>
import Swal from 'sweetalert2'
import { ref } from 'vue'
import { client } from '../../types/ApiClient';

const props = defineProps({
  getWebsites: Function,
  user: Object
})

const websiteAdd = ref({
  userEmail: props.user.email,
  docExtractor: `(cheerio) => {\n    return {attr:cheerio(\"elem\").text()}\n }`
})

const resetWebsiteAdd = () => {
  websiteAdd.value = {
    userEmail: props.user.email,
    docExtractor: `(cheerio) => {\n    return {attr:cheerio(\"elem\").text()}\n }`
  }
}

const addWebsite = () => {
  client['SitioController.create'](null, websiteAdd.value).then(() => {
    Swal.fire('Éxito', 'El sitio ha sido creado exitosamente', 'success');
    props.getWebsites();
  })
    .catch(error => {
      console.log(error)
      Swal.fire('Error', 'Ocurrió un error al crear el sitio', 'error');
    });

  // Limpia el formulario después de enviar la solicitud
  resetWebsiteAdd();
}

const isValidUrl = () => {
  let url;
  try {
    url = new URL(websiteAdd.value.url);
    if (url.protocol === "http:" || url.protocol === "https:")
      Swal.fire('Correcto', `La URL ${websiteAdd.value.url} es correcta`, 'success');
  }
  catch (err) {
    Swal.fire('Error', 'La URL no es valida', 'error');
  }
}

</script>

<template>
  <div class="modal fade" id="modal-add-form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="modal-title fs-5" id="addFormModal">Nuevo sitio</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="resetWebsiteAdd"></button>
        </div>

        <div class="modal-body">
          <form>
            <div class="mb-2">
              <label for="name-add-form" class="col-form-label">Nombre del sitio:</label>
              <input type="text" class="form-control" id="name-add-form" v-model="websiteAdd.nombre">
            </div>
            <div class="mb-2">
              <div class="d-flex justify-content-between">
                <label for="url-add-form" class="col-form-label">URL:</label>
                <span class="col-form-label url-test" :class="{ 'disabled-url-test': !websiteAdd.url }"
                  @click="isValidUrl">
                  Probar URL
                </span>
              </div>
              <input type="text" class="form-control" id="url-add-form" v-model="websiteAdd.url">
            </div>
            <div class="mb-2">
              <label for="profundidad-add-form" class="col-form-label">Pronfudidad/niveles:</label>
              <input type="text" class="form-control" id="profundidad-add-form" v-model.number="websiteAdd.niveles">
            </div>
            <div class="mb-2">
              <label for="frecuencia-add-form" class="col-form-label">Frecuencia</label>
              <input type="text" class="form-control" id="frecuencia-add-form" v-model.number="websiteAdd.frecuencia">
            </div>

            <div class="mb-2">
              <label for="docExtractor-add-form" class="col-form-label">Extractor de documento</label>
              <textarea class="form-control" id="docExtractor-add-form" rows="3" v-model="websiteAdd.docExtractor"
                spellcheck="false"></textarea>
            </div>
            <div class="mb-2">
              <label for="custom-selector-add-form" class="col-form-label">Selector de links (opcional)</label>
              <input type="text" class="form-control" id="custo-selector-add-form"
                v-model="websiteAdd.customLinkSelector">
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="resetWebsiteAdd">Cerrar</button>
          <button type="button" class="btn btn-primary" @click="addWebsite" data-bs-dismiss="modal" id="confirmar-agregar-sitio">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.url-test{
  color: black; 
  text-decoration: underline; 
  cursor: pointer
}

.disabled-url-test {
  color: #999;
  pointer-events: none;
  cursor: not-allowed;
}
</style>