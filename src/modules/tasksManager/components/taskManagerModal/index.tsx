import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Ellipsis, Pencil } from "lucide-react";
import { GetTasksOutputDto } from "../../services/getTarefas/getTarefas.dto";
import { useTaskManagerModal } from "../../hooks/useTaskManagerModal";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";

type Props = {
	tasks: GetTasksOutputDto;
	type: "create" | "edit";
};

const TaskManagerModal = ({ tasks }: Props) => {
	const { form, formErrors, onSubmit } = useTaskManagerModal();
	return (
		<Dialog>
			<DialogTrigger>
				<button className="rounded-full border-grayscale-black p-1 border">
					<Ellipsis size={18} />
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						<div className="flex gap-2 items-center">
							<Pencil />
							<p>Editar tarefa</p>
						</div>
					</DialogTitle>
					<DialogDescription>
						Clique no botão salvar para editar uma tarefa.
					</DialogDescription>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="w-full grid grid-cols-4 gap-2"
						>
							<div className="col-span-4">
								<FormField
									control={form.control}
									name="title"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Título</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="col-span-4">
								<FormField
									control={form.control}
									name="description"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Descrição</FormLabel>
											<FormControl>
												<Textarea
													placeholder="..."
													className="resize-none"
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="col-span-2">
								<FormField
									control={form.control}
									name="id_responsible"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Responsável pela tarefa</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Selecione um responsável" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="1">Anderson Alves</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="col-span-2">
								<FormField
									control={form.control}
									name="deadline"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Data limite</FormLabel>
											<FormControl>
												<Input {...field} type="date" />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="col-span-4 flex justify-end gap-2">
								<Button type="button" variant="outline">
									Cancelar
								</Button>
								<Button type="submit">Editar</Button>
							</div>
						</form>
					</Form>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export { TaskManagerModal };
