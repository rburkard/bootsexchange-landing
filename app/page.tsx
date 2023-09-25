import Image from 'next/image';
import {Button} from './components/button';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col justify-center items-center p-10 pt-24 gap-16 ">
			{/* Header */}
			<div className="z-10 gap-5 fixed left-0 top-0 flex w-full justify-center align-middle border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
				<Image alt={'logo'} src={'/logo.png'} width={40} height={40} />
				<p className="mt-1">Boots Exchange</p>
			</div>

			{/* Content */}
			<h1 className="flex relative place-items-center text-3xl text-center pt-20 max-w-sm">
				Dein Marktplatz für Fussballschuhe.
			</h1>
			<div className="flex flex-col relative max-w-lg">
				<p className="text-center text-gray-300">
					Boots Exchange, ist ein Online-Marktplatz für gebrauchte aber
					neuwertige Fußballschuhe. Hier kannst du deine unpassenden Schuhe
					verkaufen und gleichzeitig nach hochwertigen, aber preisgünstigen
					Fußballschuhen suchen, die besser zu deinen Bedürfnissen passen!
				</p>
			</div>
			<div className="flex flex-col justify-center w-full gap-4 max-w-xs lg:flex-row lg:max-w-lg">
				<Button title={'Kaufen'} />
				<Button title={'Verkaufen'} />
				<Button title={'Kaufen und Verkaufen'} />
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
		</main>
	);
}
