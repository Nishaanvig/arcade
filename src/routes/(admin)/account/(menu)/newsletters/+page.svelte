<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("newsletters")
</script>

<svelte:head>
  <title>Newsletter subscriptions</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Your newsletter subscriptions</h1>

<div class="my-6">
  <h1 class="text-xl font-bold mb-1">The Daily Aus Newsletter</h1>
</div>
