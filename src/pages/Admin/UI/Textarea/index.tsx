
import { FC } from 'react';

interface IProps {
    name: string,
    setState: (desc:string) => void
}
const Textarea:FC<IProps> = ({name, setState}) => {
    return (
        <div className="admin-form__textarea">
            <span>{name}</span>
            <textarea onChange={(e) => setState(e.target.value)} name="desc" id="" cols={30} rows={10}></textarea>
        </div>
    );
};

export default Textarea;