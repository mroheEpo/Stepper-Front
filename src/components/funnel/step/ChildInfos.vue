<template>
  <form class="childInfos__container">
    <div class="childInfosName__container">
      <h2>Comment s’appelle le héros de cette histoire ?</h2>
      <p>La personnalisation complète de son histoire s’effectuera une fois votre abonnement réalisé.</p>
      <v-text-field 
        placeholder="Océane"
        
        class="py-2 px-6 mt-8 childInfosName__input"
        v-model="childName"
      ></v-text-field>
    </div>
    <div class="childInfosAge__container">
      <h2 class="mb-8">Quel est l’âge de 
        <span v-if="childName != null">{{ childName }}</span> 
        <span v-else>l'enfant</span> 
      ?</h2>
      <div class="childInfosAgeChoice__container">
        <AgeChoice @get-child-age="selectedAge"/>
      </div>
      <v-btn
        class="mt-8"
        @click="childInfosEmit"
      >
        Continuer
      </v-btn>
    </div>
  </form>
</template>

<script setup>
  import AgeChoice from './AgeChoice.vue'
  import { ref } from 'vue'

  const childAge = ref(3)
  const childName = ref(null)
  
  const emit = defineEmits('get-child-infos')

  function childInfosEmit () {
    if( childName.value != null & childAge.value != null ){
      const datas = {
        type: 'child',
        name: childName.value,
        age: childAge.value,
      }
      emit('get-child-infos', datas)
    }
  }

  const selectedAge = (age) => (childAge.value = age)
  
</script>

<style scoped lang="scss">
  h2 {
    color: #00124e;
    font-size: 40px;
    font-weight: 900;
    line-height: 45px;
    margin-bottom: 1rem;
    text-transform: unset;
    font-family: "VisbyRoundCF", sans-serif;
    
    span {
    color: #742985;
    }
  }

  .childInfos__container {
    font-size: 18px;
    line-height: 19px;
    font-weight: 400;
    color: #00124e;
    font-family: "VisbyRoundCF", sans-serif;

    .childInfosName__container {
      text-align: center;
      max-width: 360px;
      margin: 1rem auto 5rem;
      @media screen and (min-width: 900px) {
        max-width: 540px;
      }

      .childInfosName__input {
        font-weight: 300;
        color: #00124e;
        border: 1px solid #e1e5f5;
        border-radius: 20px;
        max-width: 380px;
        font-size: 14px;
        margin: 0 auto;
        max-height: 42px;
      }
    }
    
    .childInfosAge__container {
      text-align: center;
      background-color: #E1E5F5;
      padding: 1rem 1rem 3rem;
      font-size: 28px;
      font-weight: normal;

      button {
        width: 250px;
        min-width: 200px;
        font-weight: 900;
        font-size: 14px;
        padding: 13px;
        margin: 3rem 1rem 0 1rem;
        cursor: pointer;
        color: #ffffff;
        background-color: #38b6ab;
        border: none;
        border-radius: 25px;
      }
    }

    .childInfosAgeChoice__container {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 80%;
      background-color: #E1E5F5;
      overflow-x: scroll;
      @media screen and (min-width: 900px) {
        width: 40%;
      }
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
</style>