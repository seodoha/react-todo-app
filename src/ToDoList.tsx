import { useState } from "react";
import { useForm } from "react-hook-form";

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

function ToDoList() {
    const { register, watch, handleSubmit, formState } = useForm();
    const onValid = (data: any) => {
        console.log(data);
    };
    console.log("🚀 ~ file: ToDoList.tsx:35 ~ ToDoList ~ formState", formState.errors);

    return (
        <div>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
                <input {...register("Email", { required: true, pattern: /^[A-Za-z0-9._%+-]+@naver.com$/ })} placeholder="Email" />
                <input {...register("FirstName", { required: true })} placeholder="First Name" />
                <input {...register("LastName", { required: true })} placeholder="Last Name" />
                <input
                    {...register("Username", { required: "error is not", minLength: { value: 5, message: "your your" } })}
                    placeholder="Username"
                />
                <input {...register("Password", { required: true })} placeholder="Password" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;
