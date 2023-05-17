<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="550"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
          color="#38B6AB"
          class="mb-1"
        >
          En savoir plus
        </v-btn>
      </template>

      <v-card>
        <div class="pa-4 text-center">
          <div class="d-flex justify-end">
            <v-btn
              small
              fab
              @click="dialog = false"
            >
              X
              <!--v-icon>
                {{ mdiCloseCircle }}>
              </v-icon-->
            </v-btn>
          </div>
          <h2 class="pb-4 primary--text">{{ product.popin.title }}</h2>
          <div class="pt-4">
            <iframe
                v-if="dialog"
                width="450"
                height="250"
                :src="product.popin.videoUrl">
            </iframe>

            <h3 class="my-6 primary--text">{{ product.popin.subtitle }}</h3>
            <p class="primary--text px-6">{{ product.popin.description }}</p>

            <h3 class="my-6 primary--text"> Dans le premier courrier, <br> l'enfant découvre </h3>
            <v-list class="d-flex justify-center flex-wrap">
              <v-list-item
                v-for="item in product.popin.itemsList"
                :key="item.name"
                class="flex-column px-8 popinContentItemList__item"
              >
                <img
                  class="pa-6 popinContentItemList__image"
                  :src="item.image"
                />
                <p class="px-8 mt-5 mb-6">{{ item.name }}</p>
              </v-list-item>
            </v-list>

            <h3 class="mY-6 primary--text">Les personnages</h3>
            <v-list class="d-flex justify-center flex-wrap">
              <v-list-item
                v-for="character in product.popin.charactersList"
                :key="character.name"
                class="flex-column px-8 popinContentItemList__item"
              >
                <img
                  class="pa-6 popinContentItemList__image"
                  :src="character.image"
                />
                <h5 class="px-8 mt-5">{{ character.name }}</h5>
                <p class="primary--text px-8 mb-6">{{ character.description }}</p>
              </v-list-item>
            </v-list>
          </div>
        </div>
        <v-card-actions class="popinActions__container py-6">
          <v-btn
            color="secondary"
            class="py-2 px-5 addToCart__button"
            rounded
            @click="addToCartEmit"
          >
            Choisir cette histoire
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  // TODO add mdi import { mdiCloseCircle } from '@mdi/js'

  const props = defineProps({
    product: {
      type: Object,
      required: true
    },
  })

  const emit = defineEmits('add-to-cart')
  function addToCartEmit () {
    emit('add-to-cart')
    dialog.value = false
  }

  const dialog = ref(false)

</script>

<style scoped lang="scss">
  h2, h3 {
    font-size: 28px;
  }
  h2 {
    font-weight: 900;
  }
  p {
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
  }

  .popinContentItemList__item {
    width: 50%;
    flex: auto !important;

    .popinContentItemList__image {
      box-shadow: 0px 7px 20px 7px #E1E5F5;
      border-radius: 23px;
      width: 100%;
    }
  }

  .popinActions__container {
    position: sticky;
    bottom: 0;
    background-color: white;
    display: flex;
    justify-content: center;
  }

  .addToCart__button:hover{
    background-color: white !important;
    color: $DARK_BLUE !important;
    border: $EPOPIA_GREEN 1px solid
  }
</style>