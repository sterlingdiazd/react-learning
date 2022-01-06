import React, { Component } from "react";
import styles from 'style.css';
import '../style.css';

class WarningBanner extends Component {

    render() {
        if (!this.props.warn) {
            return null
        }

        return (
            <div className={styles.warning}>
                Warning!
            </div>
        )
    }
}

export default WarningBanner 