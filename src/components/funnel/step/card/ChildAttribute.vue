<template>
  <div 
    :class="{'card__container--annuel' : attribute.frequency_unit == 'annuel'}"
    class="card__globalContainer"
  >
    <div class="card__container d-flex flex-column">
      <div class="d-flex justify-center mb-4">
        <v-img
          max-height="100"
          max-width="100"
          :src="attribute.image"
        ></v-img>
      </div>
      <p class="card__catchphrase primary--text">{{ attribute.catchphrase }}</p>
      <h3>{{ attribute.name }}</h3>
      <p class="card__price">{{ attribute.price }} {{ attribute.frequency }}</p>
      <p 
        v-if="attribute.pricePerMonth != ''"
        class="card__price_per_month primary--text ma-0"
      >Soit {{ attribute.pricePerMonth }}</p>
      <p class="card__shipping secondary--text">Frais de port inclus²</p>
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
    margin: 0 1em;
    padding: 0em 1em 2em 1em;
    box-shadow: 0px 10px 30px 15px #e1e5f5;
    border-radius: 45px 45px 45px 45px;
    width: 100%;
    border: 7px solid white;
    background-color: white;

    .card__container{
      position: relative;
      top: -50px;
    }

    .card__catchphrase {
      font-weight: 300;
      font-size: 20px;
    }
    h3 { 
      font-size: 20px;
      font-weight: 900;
      text-transform: none;
    }
    .card__price {
      font-size: 20px;
      font-weight: bold;
      text-transform: none;
    }
    .card__shipping {
      font-weight: 300;
      font-size: 13px;
    }
  }

  .card__container--annuel {
    background-color: #b5bde0;

    .card__catchphrase, .card__price_per_month {
      color: white !important;
    }
    .card__shipping {
      color: $DARK_BLUE !important;
    }
  }
</style>