export const delayBeforeMoveToOtherPage = <M extends (...args: Parameters<M>) => ReturnType<M>>(func: M): ((...args: Parameters<M>) => unknown) =>
{
	return (...args: Parameters<M>) =>
	{
		setTimeout(() =>
		{
			func(...args);
		},300);
	};

};
