import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks"

export function Auth(): JSX.Element {

    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <div>Auth</div>
    )
}