import Notification from "../mixins/Notification";
const show = (info) => {
  if (info.data) {
    //success
    Notification.show(info.data.message, "positive");
  } else {
    //failed or error occured
    let message = "";
    if (info.response.status < 500) {
      for (let items in info.response.data.errors) {
        message = info.response.data.errors[items][0];
      }
    } else {
      message = "Internal server error. Try again later";
    }
    Notification.show(message, "negative");
  }
};

export default {
  show,
};
