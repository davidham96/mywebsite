<EyeCatcher></EyeCatcher>

<script>
    let website = "https://github.com/davidham96/mywebsite/";
    let email = "davidhamaoui@outlook.com";
    import EyeCatcher from "../lib/EyeCatcher.svelte";
</script>

<div class="index">
    <p>Resume + more info : <a href="/about">about</a></p>
    <p>Personal projects + hackathons : <a href="/projects">projects</a></p>
    <p>Interests : machine learning, AI</p>
    <p>Source code for this site : <a href="{website}" target="_blank" rel="noreferrer">GitHub</a></p>
    <p>For more info : {email}</p>
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
 