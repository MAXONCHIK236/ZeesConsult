    import React, { useMemo } from "react";
    import styles from "./Sheme.module.scss";
    import Devider from "./../../devider/Devider";
    import { ShemeArr } from "../../constants/sheme";
    import ShemeCard from "../schemeCard/Sheme";
    const Sheme = () => {
    const renderSheme = useMemo(
        () => ShemeArr.map((article) => <ShemeCard {...article} />),
        []
    );
    return (
        <div className={styles.Sheme}>
        <div className={styles.Paragraph}>
            <Devider text="Как это все происходит?" />
        </div>
        <div className="container">
            <div className={styles.shem__info}>{renderSheme}</div>
        </div>
        </div>
    );
    };

    export default Sheme;
