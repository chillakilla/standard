import { useMutation } from "react-query";
import { removeTodo, switchTodo, addTodo } from "../api/todos";
import { TODOS_QUERY_KEY } from "./keys.constant";
import { useQueryClient } from "react-query";

export const useTodosQuery = () => {
  const queryClient = useQueryClient();

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: (data) => {
      console.log("data", data);
      queryClient.invalidateQueries(TODOS_QUERY_KEY);
    },
  });
  const removeTodoMutation = useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS_QUERY_KEY);
    },
  });
  const switchTodoTodoMutation = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS_QUERY_KEY);
    },
  });
};
