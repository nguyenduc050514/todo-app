import { useState, useCallback, useMemo } from "react";
const HandleTask = () => {
   const [tasks, setTasks] = useState(new Map());
   const [emptyNoTask, setEmptyNoTask] = useState("");
   const handleCreateTask = useCallback((content) => {
      if (!content.trim()) {
         console.error("Task is not empty");
         setEmptyNoTask("Please enter a task!");
         return;
      }
      const id = crypto.randomUUID();
      setTasks((prev) => {
         const newTasks = new Map(prev);
         newTasks.set(id, {
            id: id,
            title: content,
            completed: false,
         });
         return newTasks;
      });
   }, []);

   const handleDeleteTask = useCallback((id) => {
      if (!id) {
         console.error(" No valid ID available");
         return;
      }
      setTasks((prev) => {
         if (!prev.has(id)) {
            console.error("Task not found");
            setEmptyNoTask("Task not found");
            return prev;
         }

         const newTasks = new Map(prev);
         // if (confirm("You have delete this task !")) {
         newTasks.delete(id);
         // }
         return newTasks;
      });
   }, []);
   const handleEditTask = useCallback(
      (id) => {
         if (!id) {
            console.error("No valid ID available");
            setEmptyNoTask("No valid ID available");
            return;
         }
         const currentTask = tasks.get(id);
         if (!currentTask) {
            console.error("Task not found");
            setEmptyNoTask("Task not found");
            return;
         }
         let newTitle = prompt("Edit task title:", currentTask.title);
         if (newTitle === null) return;
         newTitle = newTitle.trim();
         if (!newTitle) {
            console.error("Task title cannot be empty");
            setEmptyNoTask("Please enter a task!");
            return;
         }
         setTasks((prev) => {
            const newTasks = new Map(prev);
            newTasks.set(id, {
               ...currentTask,
               title: newTitle,
            });
            return newTasks;
         });
      },
      [tasks, setTasks]
   );
   const tasksArray = useMemo(() => Array.from(tasks.values()), [tasks]);
   return {
      tasks: tasksArray,
      setTasks,
      handleCreateTask,
      handleDeleteTask,
      handleEditTask,
      setEmptyNoTask,
      emptyNoTask,
   };
};
export default HandleTask;
