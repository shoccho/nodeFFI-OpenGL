### Node ffi experiments
this is a test repo that contains some codes for testing loading shared objects written in c through ffi in node js

### what is in here
in this repo I have written some c code that has an add and sub method and I compile it to a sharedObject and load it in js and invoke the add, sub methods from javascript, there is also a basic triangle renderer using glfw+glad which opens an window and renders a triangle using opengl 

### dependencies
  - node (v16+)
  - gcc (11+)
  - make

### how to run:
  - clone the repo
  - compile or download GLFW as a shared library
  - copy the glfw shared library  (`libglfw.so`) into `$(proj_dir)/openGL/lib/`
  - run `npm i` to install the dependencies
  - run `npm run compile` to compile the c codes into shared objects
  - run `npm run start` to render a window through openGL with glfw and glad

### screenshot:
![a tirangle rendered with opengl that ran from node js](https://github.com/shoccho/nodeFFI-OpenGL/assets/33720947/7ab5fef4-692d-4c78-bb6b-b59e3bb6328e)

## LICENSES
this project uses the following third-party libraries:

- GLFW: [License](LICENSE_GLFW)
- GLAD: [License](LICENSE_GLAD)
