'use client';
import Image from 'next/image';
import {Button} from './components/button';
import {useState} from 'react';

export default function Home() {
	const [selected, setSelected] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const [email, setEmail] = useState('');

	const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
		setSelected(e.currentTarget.value);
	};
	const url =
		'https://project-server-6p2zykct3q-ew.a.run.app/bootsexchange-emails';

	const submit = async (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setDisabled(true);

		const response = await fetch(url, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': String(process.env.NEXT_PUBLIC_API_KEY),
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({email: email}), // body data type must match "Content-Type" header
		});

		if (response.ok) {
			setSubmitted(true);
		}

		setDisabled(false);
	};

	return (
		<main className="flex flex-col justify-center items-center p-10 pt-24 gap-16 ">
			{/* Header */}
			<div className="z-10 gap-5 fixed left-0 top-0 flex w-full justify-center align-middle border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
				<Image alt={'logo'} src={'/logo.png'} width={40} height={40} />
				<p className="mt-1">Boots Exchange</p>
			</div>
			{/* Content */}
			<h1 className="flex relative place-items-center text-3xl text-center pt-20 max-w-sm">
				Dein Marktplatz für Fussballschuhe.
			</h1>

			<div className="flex relative max-w-lg">
				<p className="text-center text-gray-300">
					Boots Exchange, ist ein Online-Marktplatz für gebrauchte aber
					neuwertige Fußballschuhe. Hier kannst du deine unpassenden Schuhe
					verkaufen und gleichzeitig nach hochwertigen, aber preisgünstigen
					Fußballschuhen suchen, die besser zu deinen Bedürfnissen passen!
				</p>
			</div>
			{selected.length === 0 ? (
				<div className="flex flex-col justify-center w-full gap-4 max-w-xs lg:flex-row lg:max-w-lg">
					<Button title={'Kaufen'} onClick={handleClick} />
					<Button title={'Verkaufen'} onClick={handleClick} />
					<Button title={'Kaufen und Verkaufen'} onClick={handleClick} />
				</div>
			) : submitted ? (
				<div className="flex flex-col justify-center w-full gap-4 max-w-xs lg:max-w-lg">
					{' '}
					<p className="text-center text-gray-300">
						Vielen Dank, wir melden uns bei dir sobald es los geht!
					</p>
				</div>
			) : (
				<div className="flex flex-col justify-center w-full gap-4 max-w-xs lg:max-w-lg">
					<p className="text-center text-gray-300">
						Cool, dass du auf Boots Exchange {selected} möchtest. Wir sind bald
						soweit, gib uns kurz deine Email an und wir tragen dich in die
						Warteliste ein.
					</p>
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						value={email}
						placeholder="markus.mueller@firma.com"
						onChange={(e) => {
							setEmail(e.currentTarget.value);
						}}
					/>
					<Button disabled={disabled} title="Abschicken" onClick={submit} />
				</div>
			)}
		</main>
	);
}
