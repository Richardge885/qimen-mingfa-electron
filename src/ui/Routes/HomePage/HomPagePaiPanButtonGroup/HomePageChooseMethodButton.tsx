interface Props {
    style: string;
    openModal: () => void;
}

const HomePageChooseMethodButton = ({ style, openModal }: Props) => {
    return (
        <button
            className={style}
            onClick={() => openModal()}
        >
            制筹
        </button>
    );
};

export default HomePageChooseMethodButton;
