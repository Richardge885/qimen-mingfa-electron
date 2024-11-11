interface Props {
    zhiFu: string;
    zhiShi: string;
}

const FuShi = ({ zhiFu, zhiShi }: Props) => {
    return (
        <div className='flex flex-row justify-between gap-4'>
            <div>值符:{zhiFu}</div>
            <div>值使:{zhiShi}</div>
        </div>
    );
};

export default FuShi;
