import { useState } from "react";
const HandleTask = () => {
   const [tasks, setTasks] = useState([]);
   const handleCreateTask = (content) => {
      if (!content.trim()) {
         console.error("Task is not empty");
         return;
      }
      setTasks((prev) => [
         ...prev,
         {
            id: crypto.randomUUID(),
            title: content,
            completed: false,
         },
      ]);
   };

   return {
      tasks,
      setTasks,
      handleCreateTask,
   };
};
export default HandleTask;
