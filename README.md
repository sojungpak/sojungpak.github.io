# starterpack-react

Basic starter package w/ React for development. 

## Included in this Starterpack
* react
* redux
* routing + fallback support
* webpack
* sass
* babel
* eslint
* file-loader

## Usage
In your project directory:
```bash
git remote add starter https://github.com/JY2452/starterpack-react.git
git pull starter master --allow-unrelated-histories
```


To pull a specific release version, change "master" to the namee of the tag.
For example:
```bash
git pull starter reactOnly --allow-unrelated-histories
```

Once pulled, install your webpack dependencies:
```bash
npm install
```

## Redux Usage
Install the following libraries:
```bash
npm install redux-thunk
npm install axios
```

In the root index.js file:
```javascript
// at the top
import thunk from 'redux-thunk';

// change the applyMiddleware line:
applyMiddleware(thunk),
```

## References
* [Dartmouth CS 52 Starterpack Tutorial](https://cs52.me/assignments/sa/starterpack/)
