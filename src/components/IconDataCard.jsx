const IconDataCard = ({ img, name }) => {
    return (
        <button className="icon-data-card">
            <div className="icon-box">
                <img src={img} alt="" />
            </div>
            <div className="text-box">
                <p>{name}</p>
            </div>
        </button>
    );
};

export default IconDataCard;
