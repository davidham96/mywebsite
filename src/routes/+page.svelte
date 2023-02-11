<script>
    let website = "https://github.com/davidham96/mywebsite/";
    let email = "davidhamaoui@outlook.com";
</script>

<div class="index">
    <div>
        <p>Resume : <a href="/about">about</a></p>
        <p>Projects/hackathons : <a href="/projects">projects</a></p>
        <p>
            Source code : <a href={website} target="_blank" rel="noreferrer"
                >GitHub</a
            >
        </p>
        <p>Contact : {email}</p>
    </div>
</div>

<style>
    .index {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        margin: 20px auto;
    }
    p {
        font-size: 25px;
    }
</style>
