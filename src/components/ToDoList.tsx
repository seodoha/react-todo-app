import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "./../atoms";
import ToDo from "./ToDo";
import CategoryToDo from "./CategoryToDo";
import styled from "styled-components";

// function ToDoList() {
//     const [toDo, setTodo] = useState("");
//     const [toDoError, setTodoError] = useState("");
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setTodoError("");
//         setTodo(value);
//     };
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setTodoError("To do should be longer");
//         }
//         console.log("submit");
//     };

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );
// }

// interface FormData {
//     [key: string]: string;
// }

// interface IForm {
//     email: string;
//     FirstName: string;
//     LastName: string;
//     UserName: string;
//     Password: string;
// }

// function ToDoList() {
//     const {
//         register,
//         // watch,
//         handleSubmit,
//         formState: { errors },
//         setError,
//     } = useForm<FormData>({
//         defaultValues: {
//             email: "@naver.com",
//         },
//     });
//     const onValid = (data: FormData) => {
//         if (data.Password !== data.Password1) {
//             setError("Password1", { message: "Password are not the same" }, { shouldFocus: true });
//         }
//     };
//     return (
//         <div>
//             <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
//                 <input
//                     {...register("email", {
//                         required: "Email is required",
//                         pattern: { value: /^[A-Za-z0-9._%+-]+@naver.com$/, message: "Only naver.com emails allowed" },
//                     })}
//                     placeholder="Email"
//                 />
//                 <span>{errors?.email?.message}</span>
//                 <input
//                     {...register("FirstName", {
//                         required: "write here",
//                         validate: {
//                             noNico: (value) => (value.includes("nico") ? "no nicos allowed" : true),
//                             noNick: (value) => (value.includes("nicl") ? "no nicos allowed" : true),
//                         },
//                     })}
//                     placeholder="First Name"
//                 />
//                 <span>{errors?.FirstName?.message}</span>
//                 <input {...register("LastName", { required: true })} placeholder="Last Name" />
//                 <input
//                     {...register("Username", { required: "error is not", minLength: { value: 5, message: "your your" } })}
//                     placeholder="Username"
//                 />
//                 <span>{errors?.Username?.message}</span>
//                 <input {...register("Password", { required: true })} placeholder="Password" />
//                 <span>{errors?.Password?.message}</span>
//                 <input {...register("Password1", { required: true })} placeholder="Password" />
//                 <span>{errors?.Password1?.message}</span>
//                 <button>Add</button>
//             </form>
//         </div>
//     );
// }

//interface IForm {
//    [key: string]: string;
//}

//interface IToDo {
//    text: string;
//    id: number;
//    category: "TO_DO" | "DOING" | "DONE";
//}

//const toDoState = atom<IToDo[]>({
//    key: "toDo",
//    default: [],
//});

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto;
`;

function ToDoList() {
    //const toDos = useRecoilValue(toDoState);
    //const [toDos, setToDos] = useRecoilState(toDoState);
    //const value = useRecoilValue(toDoState);
    //const modFn = useSetRecoilState(toDoState);
    //const { register, handleSubmit, setValue } = useForm<IForm>();
    //const handleValid = ({ toDo }: IForm) => {
    //    setToDos((oldToDos) => [{ text: toDo, id: Date.now(), category: "TO_DO" }, ...oldToDos]);
    //    setValue("toDo", "");
    //};

    const toDos = useRecoilValue(toDoSelector);

    return (
        <Container>
            <h1>To Dos</h1>
            <hr />
            <CategoryToDo />
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </Container>
    );
}

export default ToDoList;
