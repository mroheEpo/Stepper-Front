<template>
  <div 
    :class="{'card__globalContainer--special' : attribute.name == 'Offre spéciale'}"
    class="card__globalContainer"
  >
    <div class="card__container d-flex flex-column">
      <div class="d-flex justify-center mb-4">
        <v-img
          max-height="150"
          max-width="100"
          :src="attribute.image"
        ></v-img>
      </div>
      <p class="card__frequency">{{ attribute.frequency }}</p>
      <h3 :style="{ color: attribute.color }">{{ attribute.name }}</h3>
      <p class="card__description primary--text">{{ attribute.description }}</p>
      <p
        v-if="attribute.name == 'Offre spéciale'"
      >
        Comprend : l’aventure des apprentis journalistes + 1 an d'abonnement au Journal Des Enfants
      </p>
      <p class="card__price primary--text">{{ attribute.price }}</p>
      <p class="card__description primary--text">{{ attribute.classes }}</p>
      <div>
        <v-btn
          rounded
          color="primary"
          class="mt-5 py-5 px-8 text-center"
          @click="selectedAttributeEmit"
        > S'abonner </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    attribute: {
      type: Object,
      required: true
    },
  })

  const emit = defineEmits('selected-attribute')
  function selectedAttributeEmit () {
    emit('selected-attribute', props.attribute.id)
  }
</script>

<style scoped lang="scss">
  .card__globalContainer {
    padding: 0em 1em 0em 1em;
    box-shadow: 0px 10px 30px 15px #e1e5f5;
    border-radius: 45px 45px 45px 45px;
    width: 100%;
    border: 7px solid white;
    background-color: white;

    .card__container{
      position: relative;
      top: -50px;

      .card__frequency {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
        color: #a4abc9;
      }
      h3 {
        font-size: 18px;
        font-weight: 900;
      }
      .card__description {
        font-size: 16px;
        font-weight: 300;
        line-height: 20px;
      }
      .card__price {
        font-size: 20px;
        font-weight: 900;
      }
    }
  }

  .card__globalContainer--special {
    border-color: $DARK_BLUE;
  }
</style>