import { Categories, IToDo, toDoState } from "./../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (newCategory: IToDo["category"]) => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: newCategory };

            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };
    const onDelete = () => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

            return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && <button onClick={() => onClick(Categories.DOING)}>Doing</button>}
            {category !== Categories.TO_DO && <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>}
            {category !== Categories.DONE && <button onClick={() => onClick(Categories.DONE)}>Done</button>}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}

export default ToDo;
