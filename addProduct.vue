<template>
  <div>
    <h1>Agregar Producto</h1>
    <form @submit.prevent="addProduct">
      <input v-model="productName" placeholder="Nombre del Producto" required />
      <input v-model="productPrice" type="number" placeholder="Precio" required />
      <textarea v-model="productDescription" placeholder="Descripción" required></textarea>
      <button type="submit">Agregar Producto</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addProduct',
  data() {
    return {
      productName: '',
      productPrice: '',
      productDescription: '',
    };
  },
  methods: {
    addProduct() {
      const newProduct = {
        name: this.productName,
        price: parseFloat(this.productPrice),
        description: this.productDescription,
      };
      let products = JSON.parse(localStorage.getItem('cartProducts')) || [];
      products.push(newProduct);
      localStorage.setItem('cartProducts', JSON.stringify(products));
      alert('Producto agregado exitosamente.');
      this.productName = '';
      this.productPrice = '';
      this.productDescription = '';
    },
  },
};
</script>

