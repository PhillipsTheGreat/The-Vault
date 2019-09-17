import React from "react";
import './SeriesTemplate.css';
import { Link } from "react-router-dom";


export default function SeriesTemplate() {
    return (
        <div className="EpisodeTemplateContainer">
            <div className="Title">
                Placeholder Title
            </div>
            <div className="SummaryContainer">
                <div className="SummaryLabel">
                    Summary
                </div>
                <div className="Summary">
                    Swiggity swoogity comin' for that sample text!
                </div>
            </div>
            <div className="SubsContainer">
                <div className="SubsLabel">
                    Subs
                </div>
                <div className="SubsList">

                </div>
            </div>

        </div>
    );
}
