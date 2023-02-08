<script>
    let website = "https://github.com/davidham96/mywebsite/";
    let email = "davidhamaoui@outlook.com";
</script>

<div class="index">
    <p>Resume : <a href="/about">about</a></p>
    <p>Projects/hackathons : <a href="/projects">projects</a></p>
    <p>
        Source code : <a href={website} target="_blank" rel="noreferrer"
            >GitHub</a
        >
    </p>
    <p>Contact : {email}</p>
</div>

<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }
    p {
        font-size: 25px;
    }
</style>
