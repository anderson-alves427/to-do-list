import { ListTask } from "../services/getGroupWithTasks/getGroupWithTasks.dto";


const tasksAfazer: ListTask[] = [
	{
		id: "1",
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",

	},
	{
		id: "2",
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
		
	},
	{
		id: "3",
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
	},
	{
		id: 4,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
	},
];

const tasksEmAndamento: ListTask[] = [
	{
		id: 5,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
	},
	{
		id: 6,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
		number_files: 7,
	},
	{
		id: 7,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
		number_files: 7,
	},
	{
		id: 8,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
		number_files: 7,
	},
];

const tasksConcluido: GetGroupTasksOutputDto[] = [
	{
		id: 9,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
		number_files: 7,
	},
	{
		id: 10,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
		number_files: 7,
	},
	{
		id: 11,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
		number_files: 7,
	},
	{
		id: 12,
		created_at: "08 Set 2024",
		title: "Titulo",
		description: "Descrição tarefa",
		number_coments: 7,
		number_files: 7,
	},
];

export { tasksConcluido, tasksEmAndamento, tasksAfazer };
