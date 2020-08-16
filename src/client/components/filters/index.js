import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../button';
import { useQuery, getUpdatedUrlInfo } from '../../../util';
import './filters.scss';

export const Filters = () => {
    const history = useHistory();
    const query = useQuery();

    const filterHandler = (evt, key) => {
        const value = evt.target.textContent;
        const { url, replace } = getUpdatedUrlInfo({
            key,
            value,
            history,
            query,
        });
        if (replace) {
            history.replace(url);
        } else {
            history.push(url);
        }
    };

    return (
        <div className="spx-filters">
            <h2>Filters</h2>
            <div className="spx-filters__type">
                <p>Launch Year</p>
            </div>
            <div className="spx-filters__filter">
                <div className="spx-filters__filter__btns">
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2006
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2008
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2010
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2012
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2014
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2016
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2018
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2020
                    </Button>
                </div>
                <div className="spx-filters__filter__btns">
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2007
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2009
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2011
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2013
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2015
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2017
                    </Button>
                    <Button
                        classname="spx-filters__filter__btns__btn year"
                        queryKey="launch_year"
                        evtHandler={filterHandler}
                    >
                        2019
                    </Button>
                </div>
            </div>
            <div className="spx-filters__type">
                <p>Successful Launch</p>
            </div>
            <div className="spx-filters__filter">
                <div className="spx-filters__filter__btns">
                    <Button
                        classname="spx-filters__filter__btns__btn launch"
                        queryKey="launch_success"
                        evtHandler={filterHandler}
                    >
                        true
                    </Button>
                </div>
                <div className="spx-filters__filter__btns">
                    <Button
                        classname="spx-filters__filter__btns__btn launch"
                        queryKey="launch_success"
                        evtHandler={filterHandler}
                    >
                        false
                    </Button>
                </div>
            </div>
            <div className="spx-filters__type">
                <p>Successful Landing</p>
            </div>
            <div className="spx-filters__filter">
                <div className="spx-filters__filter__btns">
                    <Button
                        classname="spx-filters__filter__btns__btn land"
                        queryKey="land_success"
                        evtHandler={filterHandler}
                    >
                        true
                    </Button>
                </div>
                <div className="spx-filters__filter__btns">
                    <Button
                        classname="spx-filters__filter__btns__btn land"
                        queryKey="land_success"
                        evtHandler={filterHandler}
                    >
                        false
                    </Button>
                </div>
            </div>
        </div>
    );
};
