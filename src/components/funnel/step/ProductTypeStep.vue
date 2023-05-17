<template>
  <div class="text-center">
    <h1 class="primary--text">Quel produit allez vous choisir ?</h1>
    <div class="d-flex flex-md-row flex-column justify-center">
      <div class="card__container ma-5 pa-5 col-md-5 col-10 align-center">
        <h3 class="primary--text">Voyager à travers <span>les courriers</span></h3>
        <v-img
          class="card__img"
          max-height="150"
          max-width="350"
          src="https://www.epopia.com/img/cms/ecrivains-repondent-courrier-enfants.jpg"
        ></v-img>
        <p class="my-6">En lisant ses courriers, l'enfant comprend que les personnages ont besoin de SON aide.
          Vite ! Il va lui falloir répondre par écrit et renvoyer sa lettre par la Poste (dans son enveloppe pré-timbrée) pour poursuivre l’aventure.</p>
        <v-btn
          color="primary"
          class="py-2 px-5 my-2"
          rounded
          @click="(productType = 'letter') && productTypeEmit()"
        >
          Je choisis les courriers
        </v-btn>
      </div>
      <div class="card__container ma-5 pa-5 col-md-5 col-10 align-center">
        <h3 class="primary--text">Voyager avec <span>la box</span></h3>
        <v-img
          class="card__img"
          max-height="150"
          max-width="350"
          src="https://www.epopia.com/img/cms/ecrivains-repondent-courrier-enfants.jpg"
        ></v-img>
        <p class="my-6">En lisant ses courriers, l'enfant comprend que les personnages ont besoin de SON aide.
          Vite ! Il va lui falloir répondre par écrit et renvoyer sa lettre par la Poste (dans son enveloppe pré-timbrée) pour poursuivre l’aventure.</p>
        <v-btn
          color="primary"
          class="py-2 px-5 my-2"
          rounded
          @click="(productType = 'box') && productTypeEmit()"
        >
          Je choisis la box
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const productType = ref('letter')

  const emit = defineEmits('get-product-type')
  function productTypeEmit () {
    emit('get-product-type', productType.value)
  }

</script>

<style scoped lang="scss">
  h1 {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 20px;
    padding: 0;
    margin: 0 auto 0.5rem;
    min-height: 44px;
    line-height: 22px;
    width: 100%;
    max-width: 95%;
    font-weight: 700;

    span {
      color: #742985;
    }
  }
  .card__container {
    background-color: white;
    box-shadow: 0px 6px 24px 5px #e1e5f5;
    border-radius: 15px;

    .card__img {
      border-radius: 20px;
      margin: 0 auto;
    }
  }
</style>