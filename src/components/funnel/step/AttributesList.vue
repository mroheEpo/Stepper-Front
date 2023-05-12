<template>
  <div class="attributesList__container px-2 pb-4 pt-8">
    <div class="pa-2">
      <h1 
        v-if="!isSchool"
        class="mb-4 primary--text"
      >L'aventure commence ici !</h1>
      <h1 
        v-else
        class="mb-4 primary--text"
      >Nos offres écoles</h1>
      <p 
        v-if="!isSchool"
        class="mt-4 primary--text"
      >Sélectionnez la formule d'abonnement qui vous convient et rejoignez notre communauté de plus de 100 000 petits aventuriers !</p>
      <p 
        v-else
        class="mt-4 primary--text"
      >Plongez vos élèves dans des aventures immersives et donnez du sens à leur apprentissage !</p>
    </div>
    <v-list class="cards__container d-flex flex-row justify-space-around my-16">
      <v-list-item
        v-for="attribute in attributes"
        :key="attribute.id"
      >
        <ChildAttributeCard
          :attribute="attribute"
          v-if="!isSchool"
          @selected-attribute="selectedAttributeEmit"
        />
        <SchoolAttributeCard
          :attribute="attribute"
          v-else
        />
      </v-list-item>
    </v-list>
    <p 
      v-if="!isSchool"
      class="secondary--text mb-5 mt-10"
    >
      Abonnements renouvelés automatiquement, renouvellement résiliable en 1 clic <br>
      Frais de port inclus en France uniquement
    </p>
    <div class="d-flex flex-row justify-space-around py-8 securityIcons__container">
      <div class="d-flex flex-column align-center">
        <v-img
          class="mb-5"
          max-height="80"
          max-width="100"
          src="https://www.epopia.com/img/cms/paiment.png"
        ></v-img>
        <p class="primary--text">Paiement 100% sécurisé</p>
      </div>
      <div class="d-flex flex-column align-center">
        <v-img
          class="mb-5"
          max-height="80"
          max-width="100"
          src="https://www.epopia.com/img/cms/Frais%20de%20port.png"
        ></v-img>
        <p class="primary--text">Frais de port inclus en France.</p>
      </div>
      <div class="d-flex flex-column align-center">
        <v-img
          class="mb-5"
          max-height="80"
          max-width="100"
          src="https://www.epopia.com/img/cms/Service-.png"
        ></v-img>
        <p clas="primary--text">Service client réactif</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ChildAttributeCard from './card/ChildAttribute.vue'
  import SchoolAttributeCard from './card/SchoolAttribute.vue'

  const props = defineProps({
    isSchool: {
      type: Boolean,
      required: true
    },
    attributes: {
      type: Array,
      required: true
    }
  })

  const emit = defineEmits('selected-attribute')
  function selectedAttributeEmit (id_attribute) {
    emit('selected-attribute', id_attribute)
  }
</script>

<style scoped lang="scss">
  .attributesList__container {
    
    background: linear-gradient(0deg, rgba(225,229,245,1) 0%, rgba(255,255,255,1) 100%);
    /*background-image: url("https://www.epopia.com/img/cms/objectif-swep.webp");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: contain;*/
    text-align: center;

    h1 {
      font-size: 40px;
      font-weight: 900;
      text-transform: none;
    }
    p {
      font-size: 13px;
      font-weight: 300;
      line-height: 10px;
    }

    .cards__container {
      background-color: transparent;
    }
  }

  .securityIcons__container {
    border-top: 1px solid #e1e5f5;

    p {
      font-size: 15px;
      font-weight: bold;
      line-height: 28px;
    }
  }
</style>