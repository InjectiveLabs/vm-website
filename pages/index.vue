<script setup>
import { applyPureReactInVue } from 'veaury'
import ClientTestReact from '../react_app/ClientTestReact.jsx'

const ReactTest = applyPureReactInVue(ClientTestReact)
</script>

<template>
  <div>
    <ReactTest />
    <!-- code for blink goes here -->
  </div>
</template>
