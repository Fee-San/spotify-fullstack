import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

// rafce

// Arrow Function
// const App2 = () => <h1>Olá, Mundo!</h1>;

// Nomeação de classes
// kebab-case

// Nomeação de componentes
// PascalCase

// Nomeação de Variável, Função...
// camelCase

// export default, posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves e com o nome exportado 

// Self closing tag
// <Header></Header>
// <Header/>

// Nomeação de classes em css
// Metodologia BEM:
// Blocks
// Elements 
// Modifiers
// bloco__elemento--modificador
// headre__link--small

// Nomes compostos são separados por - 
// item-list__header

// Tag vazia em React se chama Fragment ou Fragmento

// Componentes recebem "props"

 {/* {items === 5 ? (
                    <>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                    </>
                    ) : (
                     <>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                        <SingleItem/>
                    </>
                )}    */}

// {Array(items).fill().map((currentValue, index) => <SingleItem key={`${title}-${index}`}/>)}

// Spread operator
//  ...

// Quando componentes se re-renderizão
// Uma das ocasiões é quando uma váriavel de estado usada por esse componente é atualizada

// Hook - useState