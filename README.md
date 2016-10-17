# A pong game in typescript

This is a shameless typescript translation of https://www.youtube.com/watch?v=ju09womACpQ, a js implementation
of pong on a HTML5 canvas, unsg classes rather than a more functional approach.

It uses my webpack-ts project as a template as such:
- git clone --depth 1 https://github.com/lucclaesen/ts-wp-01.git pong
- git remote rm origin

You'll notice how the typescript - webpack - vscode setup gives a lot more development 
support than the original author had in the video, which was the whole point of the exercise. Thank you,
javascript language service. 

Also notice hot molule reloading in action: we get change in behavior without
needing to restart the game.