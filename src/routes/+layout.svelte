<!-- default layout page for every page -->

<script>
    import Title from '$lib/title.svelte'
    import '../styles/global.css'
</script>

<header>
    <nav>
        <Title title="log(David)"/>
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
        </div>
    </nav>
</header>

<main>
    <!-- page content-->
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
    }
</style>