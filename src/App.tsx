import {PlayingField} from "./entities";

function App() {

    const logIt = (e: React.MouseEvent<HTMLButtonElement>) => console.log(e.target)

  return (
    <>
        <PlayingField clickOnCell={logIt} cellSize={200} fieldSize={3}/>
    </>
  )
}

export default App
