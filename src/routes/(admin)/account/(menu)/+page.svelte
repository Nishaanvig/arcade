<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>

<div class="my-6">
  <h1 class="text-xl font-bold mb-1">Position</h1>
  <div class="stats shadow stats-vertical sm:stats-horizontal sm:w-[420px]">
    <div class="stat place-items-center">
      <div class="stat-title">Today</div>
      <div class="stat-value">54</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Streak</div>
      <div class="stat-value text-secondary">5 day streak</div>
    </div>
  </div>
</div>
