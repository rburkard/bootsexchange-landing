import {FC} from 'react';

type Props = {
	title: string;
	onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
};
export const Button: FC<Props> = ({title, onClick}) => {
	return (
		<button
			value={title}
			onClick={(e) => onClick(e)}
			className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
		>
			{title}
		</button>
	);
};
