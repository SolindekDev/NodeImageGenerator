# Node-Image-Generator
Paczka umożliwia generowanie losowych zdjęć w danej kategorii. Kategorii jest 5 ale zaniedługo będzie ich owiele więcej, przedstawiam wam przykładowy kod którym możecie sie kierować
```javascript
// Importujemy paczke do naszego skryptu
const imageGenerator = require('node-image-generator')

// Pokazujemy wartość w konsolii
console.log(imageGenerator.randomDog())
```

Poniżej ujrzysz wszystkie wykorzystania paczki

### Pies
```javascript
imageGenerator.randomDog()
```

### Kot
```js
imageGenerator.randomCat()
```

### Panda
```js
imageGenerator.randomPanda()
```

### Ptak
```js
imageGenerator.randomBird()
```

### Lis
```js
imageGenerator.randomFox()
```
