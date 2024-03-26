import PropTypes from 'prop-types';

const IconDataCard = ({ img, name, onClick }) => {
    return (
        <button className="icon-data-card" onClick={onClick}>
            <div className="icon-box">
                <img src={img} alt="" />
            </div>
            <div className="text-box">
                <p>{name}</p>
            </div>
        </button>
    );
};

IconDataCard.propTypes = {
    img: PropTypes.node,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default IconDataCard;
