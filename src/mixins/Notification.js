import { Notify } from "quasar";
const show = (message, type) => {
  Notify.create({
    type,
    message,
    position: "bottom-right",
  });
};

export default {
  show,
};
