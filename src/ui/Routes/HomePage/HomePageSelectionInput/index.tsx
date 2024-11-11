interface Props {
    updateZiXuanJu: (updateZiXuanJu: string) => void;
}

const index = ({ updateZiXuanJu }: Props) => {
    return (
        <label className='text-center text-[5vw] text-red'>
            自选局：
            <select
                className='bg-bgdark text-black'
                onChange={(e) => {
                    updateZiXuanJu(e.target.value);
                }}
            >
                <option value=''>默认</option>
                <optgroup label='阳遁'>
                    <option value='阳1局'>阳一局</option>
                    <option value='阳2局'>阳二局</option>
                    <option value='阳3局'>阳三局</option>
                    <option value='阳4局'>阳四局</option>
                    <option value='阳5局'>阳五局</option>
                    <option value='阳6局'>阳六局</option>
                    <option value='阳7局'>阳七局</option>
                    <option value='阳8局'>阳八局</option>
                    <option value='阳9局'>阳九局</option>
                </optgroup>
                <optgroup label='阴遁'>
                    <option value='阴1局'>阴一局</option>
                    <option value='阴2局'>阴二局</option>
                    <option value='阴3局'>阴三局</option>
                    <option value='阴4局'>阴四局</option>
                    <option value='阴5局'>阴五局</option>
                    <option value='阴6局'>阴六局</option>
                    <option value='阴7局'>阴七局</option>
                    <option value='阴8局'>阴八局</option>
                    <option value='阴9局'>阴九局</option>
                </optgroup>
            </select>
        </label>
    );
};

export default index;
