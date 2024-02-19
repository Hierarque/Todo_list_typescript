import React, { useEffect, useState } from "react"

export default function TaskForm({updateState, state}) {
    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [isButtonValid, setIsButtonValid] = useState(false)
    const taskValidated = false;

    useEffect(() => {
        !taskName || !taskDescription ? setIsButtonValid(true) : setIsButtonValid(false)
    }, [taskName, taskDescription])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            taskName,
            taskDescription,
            taskValidated,
        }

        updateState([...state, newTask])

        handleReset(e)
    }

    const handleReset = (e) => {
        e.preventDefault()
        setTaskName("")
        setTaskDescription("")
    }

    return (
        <form onSubmit= {handleSubmit}>
            <div>
                <label htmlFor="taskName">Task name :</label>
                <input
                type="text"
                id="taskName"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="taskDescription">Task description :</label>
                <input
                type="text"
                id="taskDescription"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                />
            </div>
            <div>
                <button type="submit" disabled={isButtonValid}>Submit</button>
            </div>
        </form>
    )

}

