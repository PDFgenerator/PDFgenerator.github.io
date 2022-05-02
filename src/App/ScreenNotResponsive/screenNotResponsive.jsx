import css from "./screenNotResponsive.module.css";

function ScreenNotResponsive() {
    return (
        <div className={css.ContainerSNR}>
            <p className={css.Message}>{`This app is not display for little screen.\nPlease use a big screen for you can see the app.`}</p>
        </div>
    )
}
export default ScreenNotResponsive;