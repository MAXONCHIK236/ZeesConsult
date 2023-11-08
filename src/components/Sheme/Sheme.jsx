    import React, { useMemo } from "react";
    import styles from "./Sheme.module.scss";
    import Devider from "./../../devider/Devider";
    import { ShemeArr } from "../../constants/sheme";
    import ShemeCard from "../schemeCard/Sheme";
    import { useTranslation } from "react-i18next";
    const Sheme = () => {
        const {t} = useTranslation();
    const renderSheme = useMemo(
        () => ShemeArr.map((article) => <ShemeCard {...article} />),
        []
    );
    return (
        <div className={styles.Sheme}>
        <div className={styles.Paragraph}>
            <Devider text={t("Paragraph.HowitIs")}/>
        </div>
        <div className="container">
            <div className={styles.shem__info}>{renderSheme}</div>
        </div>
        </div>
    );
    };

    export default Sheme;
