app.component('product-display1', {
  props: {
      premium: {
        type: Boolean,
        required: true
      }
  },
  template: 
  /*html*/
  `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <p v-if="inStock">In Stock: 50 $</p>
          <p v-else>Out of Stock</p>
  
          <p>Shipping: {{ shipping }}</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <section class="colors">
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
          </section>
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
      return {
          product: 'Cats',
          selectedVariant: 0,
          details: ['Discover our young, strong, and cute kittens available for adoption, ready to bring joy and energy to your home.', 'Are you looking for a feline companion? Check out our adorable kittens, young, strong, and full of vitality, ready to find a new home.','Adopt a vibrant cat! Our young, strong, and cute cats are seeking a loving home where they can unleash their boundless energy.'],
          variants: [
            { id: 36, color: 'orange', image: './assets/images/orange_cats.jpg', quantity: 10 },
            { id: 37, color: 'black', image: './assets/images/black_cats.jpg', quantity: 6 },
            { id: 38, color: 'white', image: './assets/images/white_cats.jpg', quantity: 2 },
          ],
          reviews: []
      }
  },
  methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
          this.reviews.push(review)
        }
  },
  computed: {
    title() {
            return this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
          if (this.premium) {
              return 'Free'
            }
            return '2.99 $'
        }
    }
})

// Project done by Thaïs Bordessoul and Matthéo Buffey for Advanced Web Programming class at ILAC