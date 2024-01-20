import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId();

const Group = class {
  constructor(newGroupName, id) {
    // this.group = currentGroup;
    this.id = uid.rnd();
    this.uid = uid.rnd();
    this.group = newGroupName;
    this.affirmations = [];
    // this.order = "69";
    // this.uuid = "install this and creat method";

    // let limit = 60;
    // let affLength = affirmation.length;
    // let short = "4000";
    // let long = "8000";
    // if (affLength < limit) {
    //   console.log("smaller than 10. It is: " + affLength);
    //   this.duration = short;
    // } else {
    //   console.log("larger than 10. It is: " + affLength);
    //   this.duration = long;
    // }
  }
};
export default Group;
