<template>
  <b-card-code title="Links">
    <b-card-text>
      <span>Optionally convert the toast body to a link (</span>
      <code>&lt;a&gt;</code>
      <span>) or </span>
      <code>&lt;router-link&gt;</code>
      <span> (or </span>
      <code>&lt;nuxt-link&gt;</code>
      <span>) via the href and to props respectively. When set, the entire toast body becomes a link.</span>
    </b-card-text>

    <b-button
      variant="outline-primary"
      @click="toast()"
    >
      Toast with link
    </b-button>

    <template #code>
      {{ codeLinks }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { codeLinks } from './code'

export default {
  data() {
    return {
      codeLinks,
    }
  },
  methods: {
    toast() {
      this.$bvToast.toast('Toast with action link', {
        href: '#foo',
        title: 'Toast Link',
      })
    },
  },
}
</script>
