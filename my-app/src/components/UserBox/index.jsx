import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styles from "./userbox.module.css";
import { v4 } from "uuid";
import { userActions } from "../../appState/userDataSlice";
import { FaPlusCircle } from "react-icons/fa";

// function v4() from module uuid generates a unique id everytime, that's why using it to generate keys for
// the list of rendered children

// function that need to be dispatched  to set the userModel window display/hide --->  userActions.setModelActive()
// userActions is an action creater from redux which is holding all the reducer functions

// function that need to be dispatched to set the contact with whom the user is chatting---->   userActions.setActiveContact()

// line no 46-64 is the code block where list of all the contacts are mapped and rendered

// userBlock is divided into userHead and Userlistcontainer
export const UserBox = ({ activeBlock, setActiveBlock }) => {
  const dispatch = useDispatch();

  // state of the user who is using the app, it is an object which contain all the data of user.
  const { logedinUserContent, activeContact } = useSelector(
    (state) => state.userData
  );

  return (
    <div
      className={`${styles.userBoxContainer} ${
        !activeBlock ? styles.hide : ""
      }`}
    >
      <div className={styles.userHead}>
        <span>Users</span>
        <span
          onClick={() => {
            dispatch(userActions.setModelActive());
          }}
        >
          <FaPlusCircle
            style={{
              fontSize: "30px",
              color: "midnightBlue",
              cursor: "pointer",
            }}
          />
        </span>{" "}
      </div>
      <div className={styles.userListContainer}>
        <ul>
          {(logedinUserContent.contacts || []).map((contact) => {
            return (
              <li
                key={v4()}
                onClick={() => {
                  dispatch(
                    userActions.setActiveContact(contact.contactUserName)
                  );
                  setActiveBlock((prev) => !prev);
                }}
              >
              <div className={`${styles.tab}  ${activeContact===contact.contactUserName ? styles.tabHide : ""}`}>h</div>
                <FaUserCircle
                  style={{ color: "midnightblue", fontSize: "40px" }}
                />{" "}
                <span>{contact.contactName}</span>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
