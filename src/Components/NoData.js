import React from "react"

class NoData extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <h3 className="text-danger">No Data Available</h3>
            </div>
        );
    }

}
export default NoData;