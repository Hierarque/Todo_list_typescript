import React from "react";
import Task from "./Task.tsx";

export default function TaskList({taskList, updateState}) {
    
    const handleFilter = (e) => {
        console.log(e.target.value)
        const filter = e.target.value
        if (filter == 1) {
            document.querySelectorAll(".task").forEach(task => {
                task.style.display="flex"
            })
        } else if (filter == 2) {
            document.querySelectorAll(".NotValidated").forEach(task => {
                task.style.display="none"
            })
            document.querySelectorAll(".Validated").forEach(task => {
                task.style.display="flex"
            })
        } else {
            document.querySelectorAll(".NotValidated").forEach(task => {
                task.style.display="flex"
            })
            document.querySelectorAll(".Validated").forEach(task => {
                task.style.display="none"
            })
        }
    }

    return (
    <>
        <label htmlFor="filter">Filter :</label>
        <div id="filter">
            <button className="filterButton" onClick={handleFilter} value={1}>All</button>
            <button className="filterButton" onClick={handleFilter} value={2}>Finished</button>
            <button className="filterButton" onClick={handleFilter} value={3}>To Do</button>
        </div>
        {taskList.map((task, index) => (
            <Task
                key={index}
                taskName = {task.taskName}
                taskDescription = {task.taskDescription}
                taskValidated={task.taskValidated}
                index = {index}
                taskList={taskList}
                updateState={updateState}
            />
        ))}
    </>
    )
}