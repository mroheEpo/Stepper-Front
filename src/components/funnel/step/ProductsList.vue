<template>
  <div>
    <h2>Quelle va être la première aventure de <span>{{ child.name }}</span> ?</h2>
    <p>Nous avons sélectionné les histoires correspondant à l’âge de <span>{{ child.name }}</span>
        pour l’accompagner au mieux dans le monde magique d’Epopia </p>
    
    <v-list class="productsList__container row">
      <v-list-item
        v-for="product in products"
        :key="product.id"
        class="card__globalContainer col-md-3"
      >
        <productCard
          :product="product"
          @add-to-cart="addToCartEmit"
        />
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
  import productCard from './card/Product.vue';
  
  const props = defineProps({
    products: {
      type: Array,
      required: true
    },
    child: {
      type: Object,
      required: true
    },
  })

  const emit = defineEmits('add-to-cart')
  function addToCartEmit (id_product, id_product_attribute) {
    emit('add-to-cart', id_product, id_product_attribute)
  }
</script>

<style scoped lang="scss">
  h2 {
    color: #00124e;
    font-size: 24px;
    line-height: normal;
    margin-bottom: 1rem;
    text-transform: unset;
    font-family: "VisbyRoundCF", sans-serif;
    text-align: center;
  }
  p {
    font-size: 13px;
    padding: 0 5px !important;
    margin-bottom: 15px;
    font-weight: 400;
    color: #00124e;
    font-family: "VisbyRoundCF", sans-serif;
    text-align: center;
  }
  h2 span, p span {
    color: #742985;
  }

  .productsList__container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .card__globalContainer {
      margin: 1em;
      text-align: center;
      width: auto;
    }
  }

  @media screen and (min-width: 900px) {
    h2 {
      line-height: 45px;
      font-size: 40px;
    }
    p {
      font-size: 18px;
      line-height: 19px;
      margin: 0 15rem;
    }
    .card__globalContainer {
      margin: 1em;
      min-width: 28%;
    }
  }
</style>