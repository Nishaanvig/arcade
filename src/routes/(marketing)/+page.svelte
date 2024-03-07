<script lang="ts">
  import { PUBLIC_SITE_NAME } from "$env/static/public"
</script>

<svelte:head>
  <title>{PUBLIC_SITE_NAME}</title>
  <meta name="description" content="{PUBLIC_SITE_NAME} Home Page" />
</svelte:head>

<div class="hero min-h-[70vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4 md:mb-8"
      >
        <img
          class="subscriber-hub-logo"
          src="/images/TDA_Mind-Blowing.png"
          alt="Subscriber Hub Logo"
        />
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        The Daily Aus
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >Subscriber</span
        >
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >Hub</span
        >
      </div>
      <div>
        <h3>Become smarter in three minutes.</h3>
      </div>
      <div class="mt-6 md:mt-2">
        <a href="/login/sign_up/">
          <button class="btn btn-primary btn-sm px-6">Sign up</button>
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
