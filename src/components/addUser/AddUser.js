import { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../errorModal/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty values)."
      });
      return;
    }
    if (+age <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter an age greater then 0."
      });
      return;
    }

    props.onAddUser({ name, age });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const handleDismiss = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleDismiss}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            htmlFor="username"
            type="text"
            id="username"
            // value={userInput.username}
            // onChange={(e) => changeHandler(e.target.id, e.target.value)}
            ref={nameInputRef}
          ></input>
          <label>Age (Years)</label>
          <input
            htmlFor="age"
            type="number"
            id="age"
            // value={userInput.age}
            // onChange={(e) => changeHandler(e.target.id, e.target.value)}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
