import React from "react";
import { Link } from "react-router-dom";
import Group4 from "../Group4";
import "./IPhone13ProMax5.css";

function IPhone13ProMax5(props) {
  const {
    iphone13ProMax5,
    signUp,
    text4,
    firstName,
    spanText,
    spanText2,
    login,
    signUp2,
    group4Props,
    group42Props,
    group43Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-13-pro-max-5 screen" style={{ backgroundImage: `url(${iphone13ProMax5})` }}>
        <div className="sign-up sansita-bold-white-48px">{signUp}</div>
        <div className="text-4 valign-text-middle sansation-regular-normal-white-18px">{text4}</div>
        <div className="overlap-group2-1">
          <div className="first-name valign-text-middle sansation-regular-normal-black-18px">{firstName}</div>
        </div>
        <Group4>{group4Props.children}</Group4>
        <Group4 className={group42Props.className}>{group42Props.children}</Group4>
        <Group4 className={group43Props.className}>{group43Props.children}</Group4>
        <Link to="/iphone-13-pro-max-4" className="align-self-flex-end">
          <div className="text-5 valign-text-middle sansation-regular-normal-white-14px">
            <span>
              <span className="sansation-regular-normal-white-14px">{spanText}</span>
              <span className="span1 sansation-bold-white-14px">{spanText2}</span>
            </span>
          </div>
        </Link>
        <Link to="/home">
          <div className="group-7">
            <div className="overlap-group1-2">
              <div className="overlap-group-2">
                <div className="login valign-text-middle sansation-regular-normal-como-18px">{login}</div>
                <div className="rectangle-1-1"></div>
              </div>
              <div className="sign-up-1 valign-text-middle sansation-bold-white-18px">{signUp2}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IPhone13ProMax5;
