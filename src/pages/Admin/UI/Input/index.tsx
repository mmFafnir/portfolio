
import { FC, memo } from 'react';

interface IProps {
    name: string,
    classes?: string[]
    setState: (value:string) => void
}

const Input:FC<IProps> = ({name, classes, setState}) => {
    return (
        <div className={`admin-form__input ${classes?.join(' ')}`}>
            <span>{name}</span>
            <input type="text" onChange={(e) => setState(e.currentTarget.value)}/>
        </div>
    );
};

export default memo(Input);