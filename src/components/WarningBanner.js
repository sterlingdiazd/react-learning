import React, { Component } from "react";

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