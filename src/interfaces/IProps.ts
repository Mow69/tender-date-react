import {ReactElement, ReactNode} from "react";


export interface IUserServiceProps<P = {}> {
    (props: P & { children?: ReactNode }, context?: any): ReactElement | null;
    id: number;
}

export interface IUserProps {
    id: number,
    name: string,
    email: string
}

export interface IUserListProps {
    users: any,
    user: any
}
