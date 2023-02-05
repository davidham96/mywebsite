<script>
    import { onMount } from "svelte";
    export let url;
    let frame;

    onMount(() => {
        frame.srcdoc = `<script src="${url}"><\/script> <style>
            /* https://github.com/lonekorean/gist-syntax-themes */
            @import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/d49b91b3/stylesheets/one-dark.css');

            @import url('https://fonts.googleapis.com/css?family=Open+Sans');
            body {
            font: 16px 'Open Sans', sans-serif;
            }
            body .gist .gist-file {
            border-color: #555 #555 #444
            }
            body .gist .gist-data {
            border-color: #555
            }
            body .gist .gist-meta {
            color: #ffffff;
            background: #373737; 
            }
            body .gist .gist-meta a {
            color: #ffffff
            }
            body .gist .gist-data .pl-s .pl-s1 {
            color: #a5c261
            }
            a, .gist-meta {
                display: none;
            }
            </style>`;
                });
</script>

<iframe bind:this={frame} title="Code" />

<style>
    iframe {
        width: 100%;
        height: 500px;
        background-color: transparent;
        border-style: none;
        color: white;
        overflow: auto;
    }
</style>
