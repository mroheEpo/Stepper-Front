<template>
  <div class="steps__globalContainer">
    <v-img
      class="steps__logo"
      max-height="100"
      max-width="140"
      src="https://www.epopia.com/img/cms/Rectangle%201.png"
    ></v-img>
    <v-stepper 
      alt-labels 
      flat
      v-model="actualStep"
    >
      <v-stepper-header>
        <v-stepper-step 
          step="1" 
          :complete="isFirstStepComplete()"
        >
          <p class="text-center primary--text">Le héros</p>
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step 
          step="2"
          :complete="isSecondStepComplete()"
        >
          <p class="text-center primary--text">Abonnements</p>
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step 
          step="3" 
        >
          <p class="text-center primary--text">Panier</p>
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step 
          step="4"
        >
          <p class="text-center primary--text">Paiement</p>
        </v-stepper-step>
      </v-stepper-header>

      <v-alert 
        v-if="error != null" 
        type="error"
      >
        {{ error }}
      </v-alert>

      <v-stepper-items>
        <v-stepper-content 
          step="1"
        >
          <ChildInfosStep
            @get-child-infos="getChildInfos"
          />
        </v-stepper-content>
        
        <v-stepper-content 
          step="2"
        >
          <ProductsListStep 
            :products="products"
            :child="customerToAdd"
            @add-to-cart="createCustomization"
          />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script setup>
  import ChildInfosStep from './step/ChildInfos.vue'
  import ProductsListStep from './step/ProductsList.vue'
  import { ref, onMounted } from 'vue'
  //import axios from 'axios'

  const actualStep = ref(1)

  const products = ref([])
  const attributes = ref([])
  const productToAdd = ref(null)
  const customerToAdd = ref(null)
  const error = ref(null)

  const customizationUrl = ref('https://www.epopia.com/module/epopiacore/ApiGetProductCustomization')
  const cartUrl = ref('https://www.epopia.com/fr/panier?content_only=1&action=show')
  const token = ref(null)

  function isFirstStepComplete () {
    if (customerToAdd.value.name != null
      && customerToAdd.value.age != null) {
      return true
    }
    return false
  }
  function isSecondStepComplete () {
    if (isFirstStepComplete()
      && productToAdd.value.id_product != null
      && productToAdd.value.id_product_attribute != null) {
      return true
    }
    return false
  }


  function getChildInfos (datas) {
    customerToAdd.value.name = datas.name
    customerToAdd.value.age = datas.age
    actualStep.value++
  }
  function createCustomization (id_product, id_product_attribute) {
    productToAdd.value.id_product = id_product
    productToAdd.value.id_product_attribute = id_product_attribute
    addToCart()

    /* axios
    .post( customizationUrl.value, null, { params: { 
      id_product: productToAdd.value.id_product,
      id_product_attribute: productToAdd.value.id_product_attribute,
      name: customerToAdd.value.name,
      age: customerToAdd.value.age,
    } })
    .then(response => {
      productToAdd.value.id_customization = response.data
      error.value = null
      addToCart()
    })
    .catch(error => {
      console.log(error)
      error.value = error
    }) */
  }
  function addToCart () {
    console.log('addToCart')
    console.log(cartUrl.value)
    console.log(token.value)

    /*axios
    .post( cartUrl.value, null, { params: { 
      token: token.value , 
      id_product: productToAdd.value.id_product,
      id_product_attribute: productToAdd.value.id_product_attribute,
      id_customization: productToAdd.value.id_customization,
      add: 1
    } })
    .then(response => {
      console.log(response.data)
      error.value = null
      //TODO : redirection on cartUrl.value
    })
    .catch(error => {
      console.log(error)
      error.value = error
    })*/

    actualStep.value++
  } 

  function getProducts (id_attribute = null) {
    /* axios
    .get(props.apiUrl, { params: { action: 'Index', id_attribute: id_attribute} })
    .then(response => {
      products.value = response.data
      console.log(products.value)
    })
    .catch(error => {
      console.log(error)
    }) */
    return [
      {
        id: 1,
        id_product_attribute: 1,
        name: 'Mon incroyable voyage',
        description: 'Votre enfant va découvrir le monde grâce à un immeuble magique où chaque pièce renferme un univers.',
        image: 'https://www.epopia.com/img/cms/checkout-stepper/aventure-mon-incroyable-voyage-320.png',
        popin: {
          videoUrl: 'https://www.youtube.com/embed/dmFjzGas8CQ',
          title: 'Mon incroyable voyage',
          subtitle: 'À la découverte du monde !',
          description: 'CATASTROPHE : Un étrange feu s\'est déclaré dans l\'immeuble de Nao et sa mémé Bilboquet. La porte d\'entrée est bloquée ! Votre enfant va devoir aider Nao à parcourir l\'immeuble à la recherche d\'un autre porte de sortie. Mais leur cheminement dans l\'immeuble va leur réserver de nombreuses surprises... Il s\'agit d\'un immeuble magique où chaque porte permet d’accéder à un pays tout entier ! Des pyramides d’Egypte à la cathédrale de Moscou, en passant par la grande muraille de Chine, Nao et votre enfant se lancent alors dans un véritable tour du monde !',
          itemsList: [
            {
              name: 'Des courriers qui lui sont déstinés',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-m1.png'
            },
            {
              name: 'L\'immeuble magique à construire',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-m2.png'
            },
            {
              name: 'Son passeport à compléter',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-m3.png'
            },
            {
              name: 'Des lunettes 3D',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-m4.png'
            },
          ],
          charactersList: [
            {
              name: 'Nao ',
              description: 'Le (futur) meilleur ami de votre enfant',
              image: 'https://www.epopia.com/img/cms/Nao.png'
            },
            {
              name: 'Myrtille',
              description: 'Une sorcière expérimentée (ou presque)',
              image: 'https://www.epopia.com/img/cms/myrtille.png'
            },
            {
              name: 'Barnabé',
              description: 'Le plus petit des géants',
              image: 'https://www.epopia.com/img/cms/Barnabe_Perso_.png'
            },
            {
              name: 'Mémé Bilboquet',
              description: 'La grand-mère mystérieuse de Nao',
              image: 'https://www.epopia.com/img/cms/Bilboquet_Perso_.png'
            }
          ],
        }

      },
      {
        id: 2,
        id_product_attribute: 4,
        name: 'Miraculous : Marinette a besoin d’aide !',
        description: 'Votre enfant va devoir combattre le vilain Papillon aux côtés de Ladybug et Chat Noir !',
        image: 'https://www.epopia.com/img/cms/checkout-stepper/aventure_miraculous.png',
        popin: {
          videoUrl: 'https://www.youtube.com/embed/13llv6Zsogg',
          title: 'Mon aventure avec Ladybug',
          subtitle: 'Marinette a besoin d\'aide !',
          description: 'Votre enfant est fan de Ladybug et Chat Noir et connait le générique du dessin animé par cœur ? Plongez-le au cœur d’une aventure par courrier aux côtés de ses héros préférés ! Nommé(e) Super-Conseiller(ère) de Ladybug et Chat Noir, votre enfant devra les aider à vaincre Papillon et les Supervilains qui akumatisent les habitants de Paris et trouver qui est le mystérieux personnage qui joue des tours à Marinette. Énigmes à résoudre, choix à faire, secrets à percer, c’est votre enfant qui commande !',
          itemsList: [
            {
              name: 'Les premiers autocollants',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-miraculous-2.png'
            },
            {
              name: '4 lettres qui lui seront destinées',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-miraculous3.png'
            },
            {
              name: 'Un bijou Miraculous à la fin de l’aventure',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-miraculous.png'
            },
            {
              name: 'Un décor à monter soi-même',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-miraculous4.png'
            },
          ],
          charactersList: [
            {
              name: 'Marinette',
              description: 'Jeune fille maladroite et attachante, elle est aussi Ladybug.',
              image: 'https://www.epopia.com/img/cms/Marinette_1.png'
            },
            {
              name: 'Ladybug',
              description: 'Super-héroïne forte et courageuse en duo avec Chat Noir.',
              image: 'https://www.epopia.com/img/cms/Ladybug_1.png'
            },
            {
              name: 'Adrien',
              description: 'Jeune garçon mannequin et populaire, il est aussi Chat Noir.',
              image: 'https://www.epopia.com/img/cms/Adrien.png'
            },
            {
              name: 'Chat Noir',
              description: 'Super-héros drôle et vif, en duo avec Ladybug.',
              image: 'https://www.epopia.com/img/cms/ChatNoir.png'
            }
          ],
        }
      },
      {
        id: 3,
        id_product_attribute: 4,
        name: 'Les Schtroumpfs et le Nuage magique',
        description: 'La forêt des Schtroumpfs est victime d\'une curieuse malédiction... Votre enfant arrivera-t-il à résoudre ce mystère ?',
        image: 'https://www.epopia.com/img/cms/checkout-stepper/aventure-schtroumph.png',
        popin: {
          videoUrl: 'https://www.youtube.com/embed/oKw6-7472lQ',
          title: 'Les Schtroumpfs et le nuage magique',
          subtitle: 'Cataschtroumpf au village des Schtroumpfs !',
          description: 'Le Grand Schtroumpf a besoin d’aide ! Il se passe des phénomènes étranges dans la forêt, que lui même n\'arrive pas à expliquer. Et si votre enfant partait en expédition à ses côtés, accompagné de la Schtroumpfette et du Schtroumpf à Lunettes pour mener l\'enquête ? Traversée de lieux mystérieux, épreuves à réussir, énigmes à résoudre : votre enfant devra faire preuve de malice et d’ingéniosité pour relever les défis qui l’attendent et, ainsi, aider les Schtroumpfs à sauver leur forêt et tous ses habitants !',
          itemsList: [
            {
              name: '3 lettres qui lui seront destinées',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-schtroumpfs2.png'
            },
            {
              name: 'La première planche de la maison du Grand Schtroumpf',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-schtroumpfs.png'
            },
            {
              name: 'Son diplôme d’assistant du Grand Schtroumpf',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-schtroumpfs6.png'
            },
            {
              name: 'La carte de la forêt magique',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/courrier-schtroumpfs3.png'
            },
          ],
          charactersList: [
            {
              name: 'Le Grand Schtroumpf',
              description: ' Le chef des Schtroumpfs',
              image: 'https://www.epopia.com/img/cms/LesSchtroumpfs6.png'
            },
            {
              name: 'La Schtroumpfette',
              description: 'La fille préférée des Schtroumpfs',
              image: 'https://www.epopia.com/img/cms/LesSchtroumpfs3.png'
            },
            {
              name: 'Le Schtroumpf à lunettes',
              description: 'Le second assistant du Grand Schtroumpf',
              image: 'https://www.epopia.com/img/cms/LesSchtroumpfs1.png'
            },
            {
              name: 'Tempête',
              description: 'L\'aventurière du village des filles',
              image: 'https://www.epopia.com/img/cms/LesSchtroumpfs2.png'
            }
          ],
        }
      },
      {
        id: 4,
        id_product_attribute: 8,
        name: 'Mon Royaume',
        description: 'Nommé roi, ou reine, d\'une contrée lointaine, votre enfant va protéger son royaume en péril !',
        image: 'https://www.epopia.com/img/cms/checkout-stepper/aventure-mon-royaume.png',
        popin: {
          videoUrl: 'https://www.youtube.com/embed/HsGmA9_NN68',
          title: 'Mon royaume',
          subtitle: 'Le Royaume est en péril ! Votre enfant à la rescousse',
          description: 'Votre enfant vient d\'être nommé Roi/Reine d\'un royaume magique ! Le voici donc plongé à l\'époque Médivale où règne joyeux banquets, vie de cour et tournois de chevaliers. Néanmoins, tout n\'est pas toujours rose dans la vie de château. Lagalimal, un sorcier maléfique a décidé de tout mettre en oeuvre pour mettre en péril le Royaume. Pour protéger ses sujets, votre enfant va devoir se lancer dans une grande épopée médiévale. Découverte de nouvelles contrées, rencontre de créatures fantastiques et personnages étonnants, votre enfant va dévoir prendre d\'importantes décisions et résoudre d\'étranges énigmes. Les chevaliers ont leurs épées, votre enfant aura son stylo !',
          itemsList: [
            {
              name: 'La couronne royale',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/mon-royaume1.png'
            },
            {
              name: 'La carte du royaume',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/mon-royaume2.png'
            },
            {
              name: 'Son diplôme royal',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/mon-royaume6.png'
            },
            {
              name: 'Son badge de roi',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/mon-royaume3.png'
            },
          ],
          charactersList: [
            {
              name: 'Grouguignon',
              description: 'L\'ami fraceur',
              image: 'https://www.epopia.com/img/cms/royaume5.png'
            },
            {
              name: 'Bellegadar',
              description: 'La grande magicienne',
              image: 'https://www.epopia.com/img/cms/royaume2.png'
            },
            {
              name: 'Castagnolle',
              description: 'Le général des armées',
              image: 'https://www.epopia.com/img/cms/royaume3.png'
            },
            {
              name: 'Mordau',
              description: 'Le chevalier de la couronne',
              image: 'https://www.epopia.com/img/cms/royaume7.png'
            }
          ],
        }
      },
      {
        id: 5,
        id_product_attribute: 12,
        name: 'Ma réserve naturelle',
        description: 'Au cœur d’une grande réserve naturelle, votre enfant doit résoudre des énigmes et aider les animaux du parc.',
        image: 'https://www.epopia.com/img/cms/checkout-stepper/aventure-reserve-naturelle.png',
        popin: {
          videoUrl: 'https://www.youtube.com/embed/klALlViG_1o',
          title: 'Ma réserve naturelle',
          subtitle: 'La réserve naturelle cherche son nouveau directeur',
          description: 'A la suite d\'une expérience ratée, la directrice de la réserve naturelle s\'est transformée en éléphante et semble rapetisser ! A côté d\'elle, un unique papier indiquant l\'adresse et le nom de votre enfant. Vite, les employés de la réserve vont appeler votre enfant à la rescousse. Il va devoir parcourir le parc pour trouver un remède avant qu\'elle ne disparaisse complètement ! Propulsé au cœur d’une grande réserve naturelle votre enfant va découvrir des animaux rares ou disparus, la beauté de la nature et la fragilité des écosystèmes.',
          itemsList: [
            {
              name: '3 lettres qui lui seront destinées',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/reserve1.png'
            },
            {
              name: 'La clef du parc',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/reserve2.png'
            },
            {
              name: 'Son certificat de direction',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/reserve3.png'
            },
            {
              name: 'La carte de la réserve naturelle',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/reserve4.png'
            },
          ],
          charactersList: [
            {
              name: 'Samy',
              description: 'L\'enfant farceur',
              image: 'https://www.epopia.com/img/cms/ma-reserve-naturelle2.png'
            },
            {
              name: 'Séraphine',
              description: 'La vétérinaire',
              image: 'https://www.epopia.com/img/cms/ma-reserve-naturelle1.png'
            },
            {
              name: 'Robert',
              description: 'Le chef de la sécurité',
              image: 'https://www.epopia.com/img/cms/ma-reserve-naturelle3.png'
            },
            {
              name: 'Alan',
              description: 'Le botaniste',
              image: 'https://www.epopia.com/img/cms/ma-reserve-naturelle8.png'
            }
          ],
        }
      },
      {
        id: 6,
        id_product_attribute: 24,
        name: 'Ma Mission Dinosaures',
        description: 'Une équipe de voyageur du temps se retrouve bloqué à l’époque des dinosaures. Seul votre enfant peut les aider !',
        image: 'https://www.epopia.com/img/cms/checkout-stepper/aventure-mission-dinosaure.png',
        popin: {
          videoUrl: 'https://www.youtube.com/embed/UGmIiQD9QEs',
          title: 'Ma mission dinosaures',
          subtitle: 'Une mission temporelle !',
          description: 'Le voyage dans le temps ne s\'est pas passé comment prévu. Si les membres de l\'équipage se sont bien retrouvés à une autre époque, la machine à voyager dans le temps est tombée en panne ! Les voilà donc coincés il y a des milliers d\'années au milieu de féroces dinosaures. Votre enfant, nommé chef de la missoin va devoir partir en exploration, résoudre des énigmes et prendre d\'importantes décisions pour leur porter secours.Une véritable aventure temporelle qui lui fera découvrir de nombreuses espèces et plantes du temps des dinosaures !',
          itemsList: [
            {
              name: '4 lettres qui lui seront destinées',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/dinosaures1.png'
            },
            {
              name: 'Une dent de dinosaure',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/dinosaures2.png'
            },
            {
              name: 'Son diplôme de capitaine de mission',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/dinosaures3.png'
            },
            {
              name: 'La carte du territoire à explorer',
              image: 'https://www.epopia.com/img/cms/checkout-stepper/dinosaures4.png'
            },
          ],
          charactersList: [
            {
              name: 'Tilly',
              description: 'L\'ami farceur',
              image: 'https://www.epopia.com/img/cms/ma-mission-dinosaures7.png'
            },
            {
              name: 'Béranie',
              description: 'La mécanicienne',
              image: 'https://www.epopia.com/img/cms/ma-mission-dinosaures2.png'
            },
            {
              name: 'Finn',
              description: 'Le paléontologue',
              image: 'https://www.epopia.com/img/cms/ma-mission-dinosaures6.png'
            },
            {
              name: 'Bob Castou',
              description: 'Le chef de la sécurité',
              image: 'https://www.epopia.com/img/cms/ma-mission-dinosaures3.png'
            }
          ],
        }
      },
    ]
  }

  onMounted(() => {
    productToAdd.value = {
      id_product: ref(null),
      id_product_attribute: ref(null),
      product_type: ref(null),
      id_attribute: ref(null),
      id_customization: ref(0),
      id_cart: ref(null),
      quantity: ref(1),
    },
    customerToAdd.value = {
      name: ref(null),
      age: ref(null),
    }

    products.value = getProducts()

    /* axios
    .get(props.apiUrl, { params: { action: '' } })
    .then(response => {
      productToAdd.value = response.data
      console.log(productToAdd.value)
      if (productToAdd.value.id_attribute != null) {
        products.value = getProducts(productToAdd.value.id_attribute)
        console.log(products.value)
      } else if (productToAdd.value.product_type != null) {
        attributes.value = getAttributes(productToAdd.value.product_type)
        console.log(attributes.value)
      }
    })
    .catch(error => {
      console.log(error)
    }) */

    /* axios
    .get(props.apiUrl, { params: { action: '' } })
    .then(response => {
      customerToAdd.value = response.data
      console.log(customerToAdd.value)

    })
    .catch(error => {
      console.log(error)
    }) */


  })


/*
  NEEDS :
    - cart url
    - token "getToken -> tools.php"

  TODO :
  @media #{map-get($display-breakpoints, 'md-and-up')} {
  - traductions
  - API connection
  - voir img
*/
</script>

<style scoped lang="scss">
  .steps__globalContainer {
    display: flex;
    flex-direction: column;
    width: 120%;
    position: relative;
    left: -10%;

    .steps__logo {
      margin: 1rem auto;
    }

    .headerSteps__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 13px;
      font-weight: 600;
      font-family: "VisbyRoundCF", sans-serif;

      .headerStep__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;

        &--firstStep::after {
          width: 50%;
          left: 25%;
        }
        &--middleStep::after {
          width: 100%;
          left: 0%;
        }
        &--lastStep::after {
          width: 50%;
          left: -25%;
        }
      }
      .headerStep__container::after {
        content: "";
        position: relative;
        bottom: 75%;
      }
      .headerStep__number {
        color: white;
        text-align: center;
        border-radius: 50%;
        padding: 8px 0;
        width: 35px;
        z-index: 2;
      }
      .headerStep--active {
        .headerStep__number {
          background-color: #00124e;
        }
        .headerStep__text { 
          color: #00124e;
        }
      }
      .headerStep--inactive {
        .headerStep__number {
          background-color: #e1e5f5;
        }
        .headerStep__text {
          color: #e1e5f5;
        }
      }
      .headerStep--active::after  {
        border: 2px solid #00124e;
      }
      .headerStep--inactive::after {
        border: 1px solid #e1e5f5;
      }
    }
  }
  
  @media screen and (min-width: 900px) {
    .steps__logo {
      max-width: 130px;
    }
    .headerSteps__container {
      font-size: 14px;
    }
  }
</style>
