import styles from "styles/MobileBottomNav.module.scss";
import GetIcon from "components/GetIcon";
import MobileCategories from "components/MobileCategories";
import { useContext, useState } from "react";
import MobileBasket from "components/MobileBasket";
import { BasketContext } from "context/BasketContext";
import clsx from "clsx";

const MobileBottomNav = () => {
  const [currentComponent, setCurrentComponent] = useState("");
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { basketItems } = useContext(BasketContext);

  return (
    <div
      className={clsx(
        styles.bottomNav,
        navIsOpen ? styles.fullHeight : styles.removeHeight
      )}
    >
      <div className={styles.content}>
        {(() => {
          switch (currentComponent) {
            case "categories":
              return <MobileCategories setNavIsOpen={setNavIsOpen} />;
            case "basket":
              return <MobileBasket setNavIsOpen={setNavIsOpen} />;
            default:
              return <div></div>;
          }
        })()}
      </div>
      <div className={styles.navContainer}>
        <button
          className={styles.navItem}
          onClick={() => {
            setCurrentComponent("");
            setNavIsOpen(false);
          }}
        >
          <GetIcon icon="BsHouseFill" size={20} />
        </button>
        <button
          className={styles.navItem}
          onClick={() => {
            setCurrentComponent("categories");
            setNavIsOpen((oldState) => !oldState);
          }}
        >
          <GetIcon icon="BsList" size={20} />
        </button>
        <button
          className={styles.navItem}
          onClick={() => {
            setCurrentComponent("basket");
            setNavIsOpen((oldState) => !oldState);
          }}
        >
          <GetIcon icon="BsCartFill" size={20} />
          {basketItems.length > 0 && (
            <span className={styles.basketLength}>{basketItems.length}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default MobileBottomNav;
