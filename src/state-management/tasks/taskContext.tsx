import { Dispatch, createContext, useContext, useReducer } from "react";
import taskReducers, { Task, TaskAction } from "./taskReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

export const TaskContext = createContext<TasksContextType>(
  {} as TasksContextType
);

interface TaskContextProviderProps {
  children: React.ReactNode;
}

export const TaskProvider = ({ children }: TaskContextProviderProps) => {
  const [tasks, dispatch] = useReducer(taskReducers, []);

  const contextValue: TasksContextType = {
    tasks,
    dispatch,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};
