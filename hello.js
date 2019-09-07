import $ from "jquery";

export default (name) => {
  $("body").append($("<p>").text(`Hello,${name}!!`));
}