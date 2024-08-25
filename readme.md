For running react prject check scripts in package.json

Use "npm run start" to start react project "npm start" can through exception

When we run "npm run build" new build folder is created in directory and it is only served in Production


-Create project with vite
npm create vite@latest
It doesnt comes with node_modules, extra testing libarires

To install packages here write "npm i" here i is install

--
React is single page because it has one element root which is returned
Component aways start with Capital letter


--Virtual DOM, Fibre and reconciliation

createRoot create DOM like structure, to compares main DOm and its own DOM and changes only part which is changed.Not like browser reloads Whole page(repaint whol DOM)
https://github.com/acdlite/react-fiber-architecture

Now React uses Fibre to update virtual DOM

Reconciliation - A high-level description of React's reconciliation algorithm.The algorithm React uses to diff one tree with another to determine which parts need to be changed.
Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app


Fibre
Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:
Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
The key points are:

    In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
    Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
    A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.





Custom hooks
-> Create .js if is normal js file and only use .jsx if it return some jsx

























