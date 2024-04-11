import { useState, useEffect } from 'react';

export const useGetUser = () => {
	const [dataFetch, setDataFech] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => {
				if (response.ok) {
					setIsLoading(false);
				}
				console.log(response);
				return response.json();
			})
			.then((data) => setDataFech(data))
			.catch((err) => {
				setIsLoading(false);
				setError(err);
			});
	}, []);

	return { dataFetch, isLoading, error };
};
