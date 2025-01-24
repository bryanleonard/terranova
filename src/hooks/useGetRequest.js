import loadalStatus from "@/helpers/loadalStatus";
import { useCallback, useState } from "react";

const useGetRequest = (url) => {
	const [loadalState, setLoadalState] = useState(loadalStatus.isLoading);

	const get = useCallback(async () => {
		setLoadalState(loadalStatus.isLoading);

		try {
			const resp = await fetch(url);
			const result = await resp.json();
			setLoadalState(loadalStatus.loaded);
			return result;
		} catch {
			setLoadalState(loadalStatus.hasErrored);
		}
	}, [url]);
	return { get, loadalState };
};

export default useGetRequest;