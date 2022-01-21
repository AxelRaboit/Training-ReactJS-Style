# Ce projet a pour but d'aborder plusieurs façon de faire du css

- In line
```
<div style={{backgroundColor: 'red'}}>
    //Content
</div>
```

```
const changeColor = {
    backgroundColor: 'red'
}

<div style={changeColor}>
    //Content
</div>
```

- Import file

```
import './style.css';

<div className="styleColor">
    //Content
</div>
```

- module

-> Créer un fichier css avec l'extension .module.css (ex: myCss.module.css)
-> contenu du fichier
```
.green {
    background-color: green;
}
```

```
import styles from './myCss.module.css';

<div className={styles.green}>
    //Content
</div>
```

- bootstrap

```
npm install bootstrap
```

Importer dans le fichier index.js (le mieux est de l'importer dans le fichier où il est utile de l'avoir)
```
import 'bootstrap/dist/css/bootstrap.min.css';
```

- styled components

```
npm install styled-components
```

```
import styled from 'styled-components';
```

```
const Header = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #a82caa;
`

const Title = styled.h3`
    font-size: 1.3em;
`

const CardContent = styled.div`
    background-color: whitesmoke;
    width: 100%;
    height: 500px;
`

<div>
    <Header>
        <Title>Container with styled component</Title>
    </Header>
    <CardContent>

    </CardContent>
</div>
```