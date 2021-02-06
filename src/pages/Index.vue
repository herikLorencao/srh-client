<template>
  <q-page class="flex flex-center dark-page">
    <div class="index-page column items-center">
      <h1>Bem vindo ao sistema de avaliação de itens!</h1>
      <div class="welcome-guide">
        <p>
          Selecionamos alguns itens e gostaríamos de sua colaboração
          para avaliá-los, para isso basta seguir os seguintes passos:
        </p>
        <ul class="score-steps">
          <li>Escolha a nota para o item utilizando as estrelas</li>
          <li>Clique no botão avançar para continuar a avaliação</li>
          <li>Clique no botão voltar se desejar reavaliar algum item</li>
        </ul>
        <p>
          <b>Dica:</b> Use o botão ? para ver os outros atributos do item
        </p>

        <p>Para iniciar a avaliação clique no botão abaixo:</p>

        <div class="welcome-action flex justify-center">
          <q-btn @click="startRating" class="btn-start" label="Iniciar Avaliação" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    async startRating() {
      await this.$router.push('/avaliacoes/realizar');
    },
  },
};
</script>
