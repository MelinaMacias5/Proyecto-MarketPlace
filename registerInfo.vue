<template>
  <div>
    <h1>Registrar Información</h1>
    <form @submit.prevent="registerInfo">
      <input v-model="userName" placeholder="Nombre" required />
      <input v-model="userEmail" type="email" placeholder="Correo Electrónico" required />
      <input v-model="userPhone" type="tel" placeholder="Teléfono" required />
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'registerInfo',
  data() {
    return {
      userName: '',
      userEmail: '',
      userPhone: '',
    };
  },
  methods: {
    registerInfo() {
      const userInfo = {
        name: this.userName,
        email: this.userEmail,
        phone: this.userPhone,
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      alert('Información registrada exitosamente.');
      this.userName = '';
      this.userEmail = '';
      this.userPhone = '';
    },
  },
};
</script>

