import React from 'react';
import styles from "./styles.module.scss";
import icon from "../../assets/img/icon_budget_card.png";

interface IBudgetCardProps {
    title: string;
    description: string;
    handler?: () => void;
}

const BudgetCard: React.FC<IBudgetCardProps> = ({title, description, handler}) => {
    return (
        <div onClick={handler} className={styles.budgetCard}>
            <div className={styles.cardInfoWrapper}>
                <h5 className={styles.cardHeader}>{title}</h5>
                <h6 className={styles.cardDescription}>{description}</h6>
            </div>
            <div className={styles.cardIcon}>
                <img src={icon} alt="budget-card-icon"/>
            </div>

        </div>
    );
};

export default BudgetCard;