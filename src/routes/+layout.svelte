<svelte:head>
    <title>David Hamaoui</title>
</svelte:head>

<EyeCatcher></EyeCatcher>

<script>
    import Title from '$lib/title.svelte'
    import '../styles/global.css'
    import EyeCatcher from "../lib/EyeCatcher.svelte";
</script>

<header>
    <nav>
        <Title title="David Hamaoui"/>
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
        </div>
    </nav>
</header>

<main>
    <slot></slot>
</main>

<style>
    header {
        text-align: center;
        background: rgba(0,0,0,0.1);
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 10px;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
        font-size: 22px;
    }
</style>