import Dialogue from "../shared/ui/Dialogue.tsx";
import {TicTacToeField} from "../wigets";
import {useState} from "react";

const Main = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onAcceptCallback = () => {
    //todo
    // обращение к апи для сохранения истории
    // очищать стэйт
    // добавить открытие модалки с результатом при завершении партии
    }

    return (
        <main>
            <Dialogue onAcceptCallback={onAcceptCallback} setIsOpen={setIsOpen} isOpen={isOpen} header={'Начать сначала?'}/>
            <TicTacToeField setIsOpenModal={setIsOpen} fieldSize={3} cellRelativeSize={200}/>
        </main>
    );
};

export default Main;