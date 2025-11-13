export function Home() {
return (
		<div className="flex justify-center items-center min-h-screen bg-slate-900">
			<div
				className="bg-black rounded-3xl shadow-lg flex items-center justify-center"
				style={{
					maxWidth: 400,
					width: '100%',
					aspectRatio: '9/19', // typical phone ratio
					border: '8px solid #222',
				}}
			>
				<img
					src={mainScreen}
					alt="Progression Map"
					className="object-contain w-full h-full rounded-2xl"
				/>
			</div>
		</div>
	);
}
