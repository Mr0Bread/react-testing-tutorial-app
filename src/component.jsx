import React, { useEffect, useState } from 'react';

export const useMockRequest = (delay) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => setTimeout(() => setIsLoading(false), delay), []);

	return [isLoading];
}

export default function TestComponent({ children }) {
	const [isLoading] = useMockRequest(100);

	if (isLoading) {
		return (
			<div>Loading</div>
		);
	}

	return (
		<div>
			{ children }
		</div>
	);
};
