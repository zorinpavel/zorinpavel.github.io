import { RefObject, useEffect } from 'react';


export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: (event: MouseEvent) => Promise<void> | void) => {
    useEffect(
        () => {
            const listener = async (event: MouseEvent) => {
                if(!ref.current || ref.current.contains(event.target as Node)) {
                    return;
                }

                await handler(event);
            };

            document.addEventListener('mousedown', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
            };
        },
        [ref, handler]
    );
};
