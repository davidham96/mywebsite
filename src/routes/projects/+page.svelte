<script>
    import Gist from "../../lib/Gist.svelte";
    let spaceInvaders = "https://github.com/davidham96/SpaceInvaders";
    let myWebsite = "https://github.com/davidham96/mywebsite";
</script>

<div class="projects">
    <section id="myWebsite">
        <h1><a href="{myWebsite}" target="_blank" rel="noreferrer">My Website</a> : Feb 2023</h1>
        <p>Built my first website using online tutorials and SvelteKit.</p>
        <Gist url="https://gist.github.com/davidham96/97d8c176015404cca30922cdab00a6c4.js"></Gist>
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