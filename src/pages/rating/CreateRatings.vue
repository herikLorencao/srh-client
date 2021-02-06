<template>
  <q-page class="flex column flex-center score-page">
    <ItemScore v-if="!evaluationIsFinish" @evaluationFinish="evaluationFinish"/>

    <div v-else class="evaluation-success flex column items-center">
      <h1>Avaliação concluída com sucesso!</h1>
      <p>Esses dados serão de extrema importância para meu estudo de Sistemas de Recomendação</p>
      <p>Obrigado pela ajuda, agora você pode sair do sistema ou refazer a avaliação</p>
      <q-icon class="success-icon" color="primary" name="fas fa-check-circle"></q-icon>
    </div>
  </q-page>
</template>

<script>
import ItemScore from 'components/ItemScore';

export default {
  name: 'CreateRatings',
  components: {
    ItemScore,
  },
  data() {
    return {
      evaluationIsFinish: false,
    };
  },
  methods: {
    evaluationFinish() {
      this.evaluationIsFinish = true;
    },
  },
};
</script>

<style scoped>

</style>
