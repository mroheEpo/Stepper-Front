<template>
  <div>
    <img 
      class="card__img" 
      :src="product.image"
    />
    <div class="cardBody__container">
      <div>
        <h3 class="cardBody__title">{{ product.name }}</h3>
        <p class="cardBody__p">{{ product.description }}</p>
        <ProductDetailsPopin 
          :product="product"
          @add-to-cart="addToCartEmit"
        />
      </div>
      <v-btn
        color="primary"
        class="py-2 px-5 my-2 addToCart__button"
        rounded
        @click="addToCartEmit"
      >
        Je choisis cette histoire
      </v-btn>
    </div>
  </div>
</template>

<script setup>
  import ProductDetailsPopin from '../../popin/ProductDetails.vue';

  const props = defineProps({
    product: {
      type: Object,
      required: true
    },
  })

  const emit = defineEmits('add-to-cart')
  function addToCartEmit () {
    emit('add-to-cart', props.product.id, props.product.id_product_attribute)
  }
</script>

<style scoped lang="scss">

  .card__img{
    width: 100%;
    height: auto;
    vertical-align: middle;
  }

  .cardBody__container{
    background-color: white;
    box-shadow: 0px 6px 24px 5px #e1e5f5;
    border-radius: 0 0 30px 30px;
    padding: 15px 10px 16px 10px;
    margin-top: -4px;
    display: flex;
    flex-direction: column;
    font-family: "VisbyRoundCF", sans-serif;
    min-height: auto;
    justify-content: unset;

    .cardBody__title {
      font-size: 20px;
      padding: 0;
      margin: 0 auto 0.5rem;
      min-height: auto;
      line-height: 22px;
      width: 100%;
      max-width: 95%;
      font-weight: 700;
    }
    .cardBody__p {
      line-height: 18px;
      min-height: 60px;
      padding: 0;
      font-size: 13px;
      max-width: 100%;
      margin: 0 auto;
    }
  }
  .addToCart__button:hover{
    background-color: #742985 !important;
  }
  
  @media screen and (min-width: 900px) {
    .cardBody__container {
      min-height: 228px;
      justify-content: space-between;

      .cardBody__title {
        min-height: 44px;
      }
      .cardBody__p {
        font-size: 15px;
        max-width: 90%;
        margin: auto;
      }
      .cardBody__button {
        padding: 10px 36px;
        max-width: 235px;
      }
    }
  }
</style>