<script>
    import Gist from "../../lib/Gist.svelte";
    let spaceInvaders = "https://github.com/davidham96/SpaceInvaders";
    let myWebsite = "https://github.com/davidham96/mywebsite";
    let eflow = "https://github.com/ccassidy020/EFlow";

    function scrollTo(id) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    }
</script>

<div class="projects">
    <div class="goto">
        <p>
            goto <a
                href="#myWebsite"
                on:click|preventDefault={() => scrollTo("myWebsite")}
                >My Website</a
            >
        </p>
        <p>
            goto <a
                href="#eflow"
                on:click|preventDefault={() => scrollTo("eflow")}>EFlow</a
            >
        </p>
        <p>
            goto <a
                href="#spaceInvaders"
                on:click|preventDefault={() => scrollTo("spaceInvaders")}
                >Space Invaders</a
            >
        </p>
        <br />
    </div>
    <section id="myWebsite">
        <h1>
            <a href={myWebsite} target="_blank" rel="noreferrer">My Website</a> :
            Feb 2023
        </h1>
        <p>My first website using online tutorials and SvelteKit</p>
        <Gist
            url="https://gist.github.com/davidham96/97d8c176015404cca30922cdab00a6c4.js"
        />
    </section>
    <br /><br />
    <section id="eflow">
        <h1>
            <a href={eflow} target="_blank" rel="noreferrer"
                >EFlow (Hackathon)</a
            > : Jan 2023
        </h1>
        <p>Google extension email generator using OpenAI</p>
        <Gist
            url="https://gist.github.com/davidham96/0c6ad19306ebf97416207d5313cf898c.js"
        />
        <p>
            Using an API key with OpenAI, model Davinci was used and built into
            Gmail to generate emails given certain inputs (seen in prompt)
        </p>
    </section>
    <br /><br />
    <section id="spaceInvaders">
        <h1>
            <a href={spaceInvaders} target="_blank" rel="noreferrer"
                >Space Invaders</a
            > : Jan 2023
        </h1>
        <p>Space Invaders in Python using pygame</p>
        <Gist
            url="https://gist.github.com/davidham96/ffe6096aebf8d12e891a61d83124fe1a.js"
        />
        <p>General game logic (mostly using pygame)</p>
        <Gist
            url="https://gist.github.com/davidham96/580ae182d3298b6b41b09123508e7b17.js"
        />
        <p>
            Created a player class, which has an x/y, a bullet to shoot, a
            speed, and bool that indicates if player is currently shooting
        </p>
        <Gist
            url="https://gist.github.com/davidham96/29518fd4f2f3372bc61a334af1c2b9c4.js"
        />
        <p>
            Logic for enemies in the game, mostly similar to player with some
            differences
        </p>
        <Gist
            url="https://gist.github.com/davidham96/9aa87c62778782e55476634132d4d06d.js"
        />
        <p>Logic for bullet (has a position, speed, dimensions)</p>
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
