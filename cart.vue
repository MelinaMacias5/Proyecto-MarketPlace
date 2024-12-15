<template>
  <div>
    <h1>Carrito de Compras</h1>
    <ul id="cartItems">
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - Precio: ${{ product.price.toFixed(2) }} - Descripción: {{ product.description }}
        <button @click="removeProduct(index)">Eliminar</button>
      </li>
    </ul>
    <p v-if="products.length === 0">No hay productos en el carrito.</p>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data() {
    return {
      products: JSON.parse(localStorage.getItem('cartProducts')) || [],
    };
  },
  methods: {
    removeProduct(index) {
      this.products.splice(index, 1);
      localStorage.setItem('cartProducts', JSON.stringify(this.products));
    },
  },
};
</script>

