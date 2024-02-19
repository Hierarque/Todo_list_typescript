import React from "react";

export default function Task({
    taskName,
    taskDescription,
    taskValidated,
    index,
    updateState,
    taskList
}) {
    const handleDelete = () => {
        const tempArray = [...taskList]
        tempArray.splice(index, 1)
        updateState([...tempArray])
    }

    const handleValidation = (e) => {
        const tar = e.target.closest(".task")
        if (e.target.checked == true) {
            taskValidated = true
            tar.classList.toggle("NotValidated")
            tar.classList.toggle("Validated")
        } else {
            taskValidated = false
            tar.classList.toggle("Validated")
            tar.classList.toggle("NotValidated")
        }
    }

    return (
        <div 
        className={taskValidated ? "Validated task" : "NotValidated task"}
        >
            <span>{index + 1}</span>
            <span>{taskName}</span>
            <span>{taskDescription}</span>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <input
                className="taskValidator"
                type="checkbox"
                defaultChecked={taskValidated}
                onClick={handleValidation}
                />
            </div>
        </div>
    )
}