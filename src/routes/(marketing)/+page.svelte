<script lang="ts">
  import { PUBLIC_SITE_NAME } from "$env/static/public"
</script>

<svelte:head>
  <title>{PUBLIC_SITE_NAME}</title>
  <meta name="description" content="{PUBLIC_SITE_NAME} Home Page" />
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 md:mb-8"
      >
        <img
          class="rubixcube"
          src="https://thedailyaus.com.au/wp-content/uploads/2024/02/TDA_Rubix-Cube-.png"
          alt="Rubix Cube"
        />
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        Play
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >challenging</span
        >,
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >multiplayer</span
        >, and
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >free</span
        >
        <span> games online</span>
      </div>
      <div class="mt-6 md:mt-2">
        <a href="/login/sign_up/">
          <button class="btn btn-primary btn-sm px-6">Create an account</button>
        </a>
        <a href="/login/sign_in/">
          <button class="btn btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
            >Login</button
          >
        </a>
      </div>
    </div>
  </div>
</div>
