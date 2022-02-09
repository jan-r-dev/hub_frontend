function startup() {
    var el = document.getElementById("wrapper");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
  }

function handleStart() {
    console.log('start')
}

function handleEnd() {
    console.log('end')
}

function handleCancel() {
    console.log('cancel')
}

function handleMove() {
    console.log('move')
}

const SwipeWrapper = (props) => {

        return (
            <div id="wrapper">
                {props.children}
            </div>
        )
}

export default SwipeWrapper