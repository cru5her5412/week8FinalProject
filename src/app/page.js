import homePageStyles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <div className={homePageStyles.container}>
        <h1 className={homePageStyles.title}>Welcome to the site</h1>
        <p className={homePageStyles.desc}>
          A tech tips site made by: Callum Lodge
        </p>
      </div>
    </>
  );
}
