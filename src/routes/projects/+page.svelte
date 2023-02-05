<script>
    import Gist from "../../lib/Gist.svelte";
    let spaceInvaders = "https://github.com/davidham96/SpaceInvaders";
    let davidHamaoui = "https://github.com/davidham96/logDavid";
</script>

<div class="projects">

    <section id="davidHamaoui">
        <h1><a href="{davidHamaoui}" target="_blank" rel="noreferrer">David Hamaoui</a> : Feb 2023</h1>
        <p>Built my first website using online tutorials and SvelteKit.</p>
        <Gist url=""></Gist>
    </section>
    <br><br>
    <section id="spaceInvaders">
        <h1><a href="{spaceInvaders}" target="_blank" rel="noreferrer">Space Invaders</a> : Jan 2023</h1>
        <p>Built Space Invaders in Python using pygame.</p>
        <Gist url="https://gist.github.com/davidham96/ffe6096aebf8d12e891a61d83124fe1a.js"></Gist>
    </section>
</div>

<style>
    .projects {
        text-align: center;
        display: block;
        margin: 20px auto;
        font-size: 20px;
    }
</style>