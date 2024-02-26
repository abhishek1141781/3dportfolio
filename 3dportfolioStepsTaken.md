1. npm create vite@latest => javascript
2. npm i react-router-dom

3. setup tailwind config
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

4. start developing 3d elements
   npm i @react-three/fiber

   all 3d scene is in canvas component of three fiber
   Canvas accepts threejs elements as children
   define camera to show whats visible

   Suspense is a wrapper and its used asa loading screen

   if we're renderin anything inside canvas it has to be a special 3d property, if not the case, we've to turn something not 3d to 3d using react 3 drei

   npm i @react-three/drei

   after setting up loader

   next up is lighting
   lighting setup

   # Use Sketchfab to use 3d models from the web

   ## https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907

   use a website to convert the 3d model to a jsx component
   https://gltf.pmnd.rs/

   install react-spring for animations
   npm i @react-spring/three

   Errror:
   <!-- Failed to parse source for import analysis because the content contains invalid JS syntax. You may need to install appropriate plugins to handle the .glb file format, or if it's an asset, add "**/*.glb" to `assetsInclude` in your configuration. -->

   modify position, rotations & scaling of 3d model to see it properly on screen

   sky is a primitive element: as in we can just consume what we've created & we can't tweak/play with it
   island isn't a primitive element: as we can conssume it tweak and do all sorts of things

```log
   [plugin:vite:react-babel] C:\Users\abhis\Desktop\Project\VVIMP Projects Guthub\Private Github Uploads\3dportfolio\src\models\Island.jsx: 'import' and 'export' may only appear at the top level. (175:0)

  173 | };
  174 |
> 175 | export default Island;
      | ^
  176 |
```

use emailjs to send email
npm i @emailjs/browser

# using custom hooks
