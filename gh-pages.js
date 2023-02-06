import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/davidham96/mywebsite.git', // Update to point to your repository
        user: {
            name: 'davidham96', // update to use your name
            email: 'davidhamaoui27@hotmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);