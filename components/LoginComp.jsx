import styles from "../styles/Login.module.scss";
import { useForm } from 'react-hook-form';

export default function LogIn(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className={styles.logInTest}>
      <div className={styles.logInLeftPanel}>
        <div className={styles.img}></div>
        <div className={styles.logInLeftTitleCard}>
          <h1>The Interactive look into new origins</h1>
          <p>
            The rousing soundtrack imbues the film with a thrilling power, and
            builds to a tremendous climax, offering an all-round exhilarating
            experience for the viewer.
          </p>
        </div>
      </div>
      <div className={styles.logInRightPanel}>
        <div className={styles.escapeLogIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className={styles.form_container}>
          <h1 className={styles.form_title}>Welcome</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form_content}>
            <input type="text" required="required" {...register("Username", {required: true})} />
              <label>Username</label>
              <div className={styles.line}></div>
            </div>

          <div className={styles.form_content}>
            <div className={styles.form_content}>
            <input type="password" required="required" {...register("Password", {required: true, maxLength: 80})} />
              <label>Password</label>
              <div className={styles.line}></div>
            </div>

            <input type="submit" className="py-2 px-4  bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"/>

            <div className={styles.signUp}>Don't have an account?</div>
          </div>

          </form>
          
        </div>
      </div>
    </div>
  );
}