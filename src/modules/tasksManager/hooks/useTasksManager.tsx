import { useUserContext } from "@/shared/contexts/user/useUserContext";
import { useTasksContext } from "../context/useTaskContext";
import { useEffect } from "react";

function useTasksManager() {
	const { getTasks, groupWithTasks, getTasksGroup, groups } = useTasksContext();
	const { user } = useUserContext();

	//TODO MAKE REQUESTS
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	function onDragEnd(result: any) {
		const { destination, source } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const start = groupWithTasks.value.data.find(
			(list) => list.id === source.droppableId
		);
		const finish = groupWithTasks.value.data.find(
			(list) => list.id === destination.droppableId
		);
		console.log("---->", start);
		if (!start || !finish) return;
		// Se a lista de origem e destino são a mesma, mover o item dentro da mesma lista
		if (start === finish) {
			const newTasks = Array.from(start.tasks);
			const [movedTask] = newTasks.splice(source.index, 1);
			newTasks.splice(destination.index, 0, movedTask);

			const newList = { ...start, tasks: newTasks };
			const newState = groupWithTasks.value.data.map((list) =>
				list.id === newList.id ? newList : list
			);
			groupWithTasks.set({
				page: groupWithTasks.value.page,
				data: newState,
				size: groupWithTasks.value.size,
				total: groupWithTasks.value.total,
			});
			return;
		}

		const startTasks = Array.from(start.tasks);
		const [movedTask] = startTasks.splice(source.index, 1);

		const newStart = { ...start, tasks: startTasks };
		const newFinishTasks = Array.from(finish.tasks);
		newFinishTasks.splice(destination.index, 0, movedTask);
		const newFinish = { ...finish, tasks: newFinishTasks };

		const newState = groupWithTasks.value.data.map((list) => {
			if (list.id === newStart.id) {
				return newStart;
			}
			if (list.id === newFinish.id) {
				return newFinish;
			}
			return list;
		});

		groupWithTasks.set({
			page: groupWithTasks.value.page,
			data: newState,
			size: groupWithTasks.value.size,
			total: groupWithTasks.value.total,
		});
	}

	useEffect(() => {
		getTasksGroup();
		getTasks(user.value.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		groupWithTasks,
		groups,
		onDragEnd,
	};
}

export { useTasksManager };
