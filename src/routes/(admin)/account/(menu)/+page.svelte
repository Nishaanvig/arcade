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
<div class="alert alert-error max-w-lg mt-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="stroke-current shrink-0 h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    /></svg
  >
</div>

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
