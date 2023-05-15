<template>
  <div class="books__globalContainer">
    <div class="booksBanner__container">
      <img src="https://www.epopia.com/img/cms/checkout-stepper/book-banner.png" />
      <h2>Recevez le livre de fin dont votre enfant est l’auteur !</h2>
      <p> Emmenez votre enfant jusqu’au bout du rêve en commandant le livre final <br>
          de son épopée <span>pour 50,00€ TTC</span> ! </p>
    </div>
    <div class="booksDetails__container">
      <div class="booksDetailsArguments__container">
        <p>En fin d’aventure, nous réunissons dans un seul livre :</p>
        
        <v-list class="booksDetailsArguments__list">
          <v-list-item class="booksDetailsArguments__listItem">L’ensemble des lettres reçues</v-list-item>
          <v-list-item class="booksDetailsArguments__listItem">Les réponses et dessins envoyées par l’enfant</v-list-item>
          <v-list-item class="booksDetailsArguments__listItem">Des illustrations inédites</v-list-item>
        </v-list>
      </div>
      <div class="booksDetailsButtons__container">
        <v-btn 
          rounded
          color="secondary"
          class="py-3 px-6 text-center booksDetailsButtons__button--yes"
          @click="addBook"
        >Oui, je prend le livre !</v-btn>
        <v-btn 
          rounded
          outlined
          color="primary"
          class="mt-4 py-3 px-6 text-center booksDetailsButtons__button--no"
          @click="noBook"
        >Non merci</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits('add-book', 'no-books')
  function addBook () {
    emit('add-book')
  }
  function noBook () {
    emit('no-books')
  }
</script>

<style scoped lang="scss">
  h2 {
    color: #00124e;
    line-height: 45px;
    text-transform: unset;
    font-family: "VisbyRoundCF", sans-serif;
    text-align: center;
    margin: 1em 0 10px;
    font-size: 22px !important;

    @media screen and (min-width: 900px) {
      font-size: 40px !important
    }
  }
  p {
    font-weight: 400;
    color: #00124e;
    font-family: "VisbyRoundCF", sans-serif;
    text-align: center;
    font-size: 16px;
    line-height: normal;
  }
  h2 span, p span {
    color: #742985;
  }

  .books__globalContainer {
    width: 100%;

    .booksBanner__container {
      margin-bottom: 1.5rem;
      display: block;

      img {
        width: 100%;
      }
    }

    .booksDetails__container {
      width: 92%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 1em auto;

      @media screen and (min-width: 900px) {
        flex-direction: row;
        max-width: 80%;
      }
    }
    .booksDetailsArguments__container {
      margin-bottom: 2em;
      
      p {
        font-size: 16px;
        margin: auto 0;
        margin-bottom: 1rem;
        text-align: left;
        line-height: 1.25em;
        max-width: 225px;
      }
      .booksDetailsArguments__list {
        margin: 0;
        padding: 0 15px;
        text-align: left;
        line-height: 1.25em;
        color: #00124e;
        font-family: "VisbyRoundCF", sans-serif;
        font-size: 16px;
        list-style: none;
      }
      .booksDetailsArguments__listItem {
        font-size: 15px;
        line-height: normal;
      }
      .booksDetailsArguments__listItem:before {
        content: "\2022";
        color: #38b6ab;
        width: 1em;
        height: 1em;
        margin-left: -1em;
      }
    }
    .booksDetailsButtons__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      width: 85%;

      &--yes {
        font-weight: 600;
        font-size: 16px;
        font-family: Source Sans Pro, sans-serif;
        outline: none;
        width: 100%;
      }
      &--no {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 900px) {
    h2 {
      margin: 1em 2em;
      font-size: 40px;
    }
    p {
      font-size: 18px;
      line-height: 19px;
      margin: auto 14rem 1rem 14rem;
    }

    .booksDetails__container {
      flex-direction: row;
      width: 100%;
      margin: 3em auto;
      min-width: 800px;
      align-items: center;
      width: 60%;
    }
    .booksDetailsArguments__container {
      margin-bottom: 2em;
      li {
        line-height: 28px;
      }
    }
    .booksDetailsButtons__container {
      max-width: 225px;
    }
  }
</style>