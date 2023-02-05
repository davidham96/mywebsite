<EyeCatcher></EyeCatcher>

<script>
    let davidHamaoui = "https://github.com/davidham96/logDavid/";
    let email = "davidhamaoui@outlook.com";

    import EyeCatcher from "../lib/EyeCatcher.svelte";
</script>

<div class="index">
    <p>Resume : <a href="/about">about</a>.
    <br><br>All personal projects : <a href="/projects">projects</a>.</p>
    <p>Interests : data science, machine learning.</p>
    <p>Source code for this site : <a href="{davidHamaoui}" target="_blank" rel="noreferrer">Github</a>.</p>
    <p>For more info : {email}.</p>
</div>

<style>
    .index {
        text-align: right;
        display: block;
        padding-left: 100px;
        margin: 20px auto;
    }
    p {
        font-size: 25px;
    }
</style>
 