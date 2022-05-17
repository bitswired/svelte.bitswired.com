<script>
    import "../styles/tailwind-output.css";
    import {CONFIG} from "@config";

    import Header from '@components/header/index.svelte';
    import Footer from '@components/footer/index.svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Open+Sans:wght@300;400;700;800&family=Roboto+Serif:wght@300;400;500;700;900&display=swap"
      rel="stylesheet"
    />

    <link rel="preconnect" href={CONFIG.api.assets.basePath} />
    <link rel="dns-prefetch" href={CONFIG.api.assets.basePath} />
</svelte:head>


<div class="fixed top-0 left-0 w-[100%]">
    <Header/>
</div>

<div class="pt-[80px]">
    <slot />
</div>

<div class="">
    <Footer/>
</div>
