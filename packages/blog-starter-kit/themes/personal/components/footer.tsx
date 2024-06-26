import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t bg-stone-100 pt-10 font-mono text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
			&copy; {new Date().getFullYear()} {publication.title}
		</footer>
	);
};
