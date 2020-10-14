# Adding GLTF to the game

- https://github.com/react-spring/gltfjsx
- use `npx gltfjsx model.gltf [Model.js] [options]`
  - model.gltf will be the name of the specific file for it to look for in public
    (so if the name is scene, specify public/scene.gltf)
  - the Model.js is what you want it to be called, call it what you would name the gltf,
    so for one called scene, call it src/components/scene.jsx
  - if it animates include the -a option
  - once the file is loaded, you can change the animate use effect to always be animating by changing it to 
    -   useEffect(() => void mixer.clipAction(animations[0], group.current).play(), [])
