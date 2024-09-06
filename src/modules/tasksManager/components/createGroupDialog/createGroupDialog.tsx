import { Button } from "@/shared/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { FilePlus2, Plus } from "lucide-react";
import { useCreateDialog } from "../../hooks/useCreateDialog";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";

const CreateGroupDialog = () => {
	const { form, onSubmit, refTriggerButton } = useCreateDialog();
	return (
		<Dialog>
			<DialogTrigger>
				<Button ref={refTriggerButton} className="gap-2 items-center">
					<Plus size={18} />
					Criar grupo
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						<div className="flex gap-2 items-center">
							<FilePlus2 />
							<p>Criar grupo de tarefa</p>
						</div>
					</DialogTitle>
					<DialogDescription>
						Adicione um novo grupo de tarefas abaixo.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full space-y-3"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Criar
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export { CreateGroupDialog };
