import { useCallback, useEffect, useRef } from "react";

// This should be used sparingly. It erases reactivity, i.e. when the inputs
// change, the function itself will remain the same. This means that if you
// use this at a higher level of your tree, and then some state you read in it
// changes, there is no mechanism for anything below in the tree to "react"
// to this change (e.g. by knowing to call your function again).
//
// Also, you should avoid calling the returned function during rendering
// since the values captured by it are going to lag behind.
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function useNonReactiveCallback<T extends (...args: any[]) => any>(
	fn: T,
): T {
	const ref = useRef<T>(fn);

	useEffect(() => {
		ref.current = fn;
	}, [fn]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	return useCallback(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(...args: any[]) => {
			const latestFn = ref.current;
			return latestFn(...args);
		},
		[ref],
	) as T;
}
