import { useEffect } from "react";
import toast, { useToasterStore } from "react-hot-toast";

function useToasterConfig() {
	const { toasts } = useToasterStore();

	const TOAST_LIMIT = 1;

	useEffect(() => {
		toasts
			.filter((t) => t.visible) //only consider visible toasts
			.filter((_, i) => i >= TOAST_LIMIT) //Is toast index over limit?
			.forEach((t) => toast.dismiss(t.id)); //Dismiss – Use toast.remove(t.id) for no exit animation
	}, [toasts]);
}

export { useToasterConfig };
