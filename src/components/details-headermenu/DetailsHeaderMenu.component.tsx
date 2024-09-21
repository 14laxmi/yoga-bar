import { faArrowRight, faArrowUpRightFromSquare, faCartShopping, faPerson, faSearch, faSquareArrowUpRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './DetailsHeaderMenu.module.scss';
import yogarbarIcon from '../../assets/logo/yogarbar-icon.jpg';
import yogaBanner from '../../assets/logo/yogaBanner.jpg';

const DetailsHeaderMenu = () => {
    return(
        <>
            <div className={style.detailsHeaderMenu}>
                <div className={style.shopHeaderMenu}>
                    <FontAwesomeIcon className={style.arrowButton} icon={faArrowRight} />
                    <a href="/" className={style.textMenu}>Shop</a>
                </div>
                <div>
                    <img src={yogarbarIcon } alt="Yoga bar Logo" className={style.yogarbarIcon}/>
                </div>
                <div className={style.adminAndCartMenu}>
                    <FontAwesomeIcon className={style.headerIcon} icon={faSearch} />
                    <FontAwesomeIcon className={style.headerIcon} icon={faUser} />
                    <a href="/" className={style.textMenu}>CART</a>
                    <FontAwesomeIcon className={style.cartIcon} icon={faCartShopping} />
                </div> 
            </div>
            <div>
                <img className={style.yogaBanner} src={yogaBanner} alt="Yoga Bar Banner"/>
            </div> 
        </>
    );
}

export default DetailsHeaderMenu;