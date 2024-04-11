import { useGetUser } from './hooks/useGetUser';

export const App = () => {
	const { dataFetch, isLoading, error } = useGetUser();

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	if (error !== null) {
		return <h6>Oops, something goes wrong</h6>;
	}

	return (
		<>
			<h1>Hola mundo</h1>

			{dataFetch &&
				dataFetch.map((item) => (
					<ul key={item.id}>
						<li>{item.name}</li>
					</ul>
				))}
		</>
	);
};
