import React from "react";

export default class RatioTypeSelector extends React.Component {
    render() {
        return (
            <div>
                            <div>
                                <input name="ratio-type" value="financing-structure" id="financing-structure" type="radio"/>
                                <label for="financing-structure" class="form-check-label">Financing Structure Ratios</label>
                            </div>
                            <div>
                                <input id="asset-allocation" value="asset-allocation" name="ratio-type" type="radio"/>
                                <label for="asset-allocation" class="form-check-label">Asset Allocation Ratios</label>
                            </div>
                            <div>
                                <input id="asset-utilization" value="asset-utilization" name="ratio-type" type="radio"/>
                                <label for="asset-utilization" class="form-check-label">Asset Utilization Ratios</label>
                            </div>
                            <div>
                                <input id="sales-profitability" value="sales-profitability" name="ratio-type" type="radio"/>
                                <label for="sales-profitability" class="form-check-label">Sales Profitability Ratios</label>
                            </div>
                            <div>
                                <input id="return-on-investment" value="return-on-investment" name="ratio-type" type="radio"/>
                                <label for="return-on-investment" class="form-check-label">Return on Investment Ratios</label>
                            </div>
                            <div>
                                <input id="others" value="others" name="ratio-type" type="radio" />
                                <label for="others" class="form-check-label">Others</label>
                            </div>
                        </div>
        );
    }
}