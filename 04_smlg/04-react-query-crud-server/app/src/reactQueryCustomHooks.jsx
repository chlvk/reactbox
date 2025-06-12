import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import customFetch from "./utils";

const useFetchTasks = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  return { isLoading, isError, data };
};

const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  return { createTask, isLoading };
};

const useEditTask = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { editTask };
};

const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading: isDeleteTaskLoading } = useMutation({
    mutationFn: (taskId) => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { deleteTask, isDeleteTaskLoading };
};

export { useCreateTask, useDeleteTask, useEditTask, useFetchTasks };
